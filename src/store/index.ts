import * as R from 'ramda';
import { atom, selector, selectorFamily } from 'recoil';
import { getNews } from '../api';
import { getDomain } from '../utils';
import { HitType, NewsBaseType, SavedNewsItem } from './types';
import { SAVE_KEY } from '../constants';
import { getUpdatedData } from './helpers';

const newsBaseProp = ['page', 'hits'];

const hitsProp = ['objectID', 'num_comments', 'points', 'title', 'url', 'author', 'created_at'];

export const pageNumberState = atom({
  key: 'pageNumberState',
  default: 1,
});

export const UpdatedState = atom<SavedNewsItem[]>({
  key: 'UpdatedState',
  default: [],
});

export const localStorageData = selector({
  key: 'localStorageData',
  get: ({ get }) => {
    const pageNumber = get(pageNumberState);
    const newsItems = window.localStorage.getItem(`${SAVE_KEY}-${pageNumber}`) ?? '[]';
    return JSON.parse(newsItems) as SavedNewsItem[];
  },
});

export const persistenceData = selector({
  key: 'persistenceData',
  get: ({ get }) => {
    const savedItems = get(localStorageData);
    return savedItems as SavedNewsItem[];
  },
  set: ({ set, get }, newValue: any) => {
    const pageNumber = get(pageNumberState);
    const savedItems = get(localStorageData);
    const existingItems = R.reject(R.propEq('id', newValue.id), savedItems);
    const recsToSave = R.concat(existingItems, [newValue]) as SavedNewsItem[];
    window.localStorage.setItem(`${SAVE_KEY}-${pageNumber}`, JSON.stringify(recsToSave));
    set(UpdatedState, recsToSave);
  },
});

export const newsListQuery = selectorFamily({
  key: 'newsListQuery',
  get: (pageNumber: number) => async ({ get }) => {
    const response = await getNews<NewsBaseType>(pageNumber);
    const data = R.pick(newsBaseProp, response);

    const newsList = R.map(R.pipe(
      R.pick(hitsProp) as (rec: HitType) => HitType,
      (list) => R.assoc('shortUrl', getDomain(list.url), list),
    ))(data.hits);

    const savedNewsItems: SavedNewsItem[] = get(persistenceData);
    const updatedList = getUpdatedData(savedNewsItems, newsList);
    const updatedData = R.assoc('hits', updatedList, data);
    return updatedData as NewsBaseType;
  },
});
