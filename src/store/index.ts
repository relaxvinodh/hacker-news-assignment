import * as R from 'ramda';
import {
  atom, DefaultValue, selector, selectorFamily,
} from 'recoil';
import { getNews } from '../api';
import { HASH_SPACE, SAVE_KEY } from '../constants';
import { hashWithSpaceSelector } from '../utils/hash/atoms';
import {
  getUpdatedData, mapChartData, mapShortUrl, newsBaseProp,
} from './helpers';
import { NewsBaseType, SavedNewsItem } from './types';

export const UpdatedState = atom<SavedNewsItem[]>({
  key: 'UpdatedState',
  default: [],
});

export const persistenceData = selector({
  key: 'persistenceData',
  get: ({ get }) => {
    const { page } = get(hashWithSpaceSelector(HASH_SPACE.newsScope));
    const savedItems = window.localStorage.getItem(`${SAVE_KEY}-${page}`) ?? '[]';
    return JSON.parse(savedItems) as SavedNewsItem[];
  },
  set: ({ set, get }, newValue: any) => {
    const { page } = get(hashWithSpaceSelector(HASH_SPACE.newsScope));
    const savedItems = window.localStorage.getItem(`${SAVE_KEY}-${page}`) ?? '[]';
    const existingItems = R.reject(R.propEq('id', newValue.id), JSON.parse(savedItems));
    const recsToSave = R.concat(existingItems, [newValue]) as SavedNewsItem[];
    window.localStorage.setItem(`${SAVE_KEY}-${page}`, JSON.stringify(recsToSave));
    if (!(newValue instanceof DefaultValue)) {
      set(UpdatedState, recsToSave);
    }
  },
});

export const newsListQuery = selectorFamily({
  key: 'newsListQuery',
  get: (pageNumber: string) => async ({ get }) => {
    const response = await getNews<NewsBaseType>(pageNumber);
    const data = R.pick(newsBaseProp, response);
    const listWithShortUrl = mapShortUrl(data.hits);
    const savedNewsItems: SavedNewsItem[] = get(persistenceData);
    const updatedList = getUpdatedData(savedNewsItems, listWithShortUrl);
    const updatedData = R.assoc('hits', updatedList, data);
    return updatedData as NewsBaseType;
  },
});

export const newsListUpdated = selector({
  key: 'newsListUpdated',
  get: ({ get }) => {
    const { page } = get(hashWithSpaceSelector(HASH_SPACE.newsScope));
    const data = get(newsListQuery(page));
    const updatedData = get(UpdatedState);
    const { hits } = data;
    const UpdatedDataRows = getUpdatedData(updatedData, hits);
    return UpdatedDataRows;
  },
});

export const chartData = selector({
  key: 'chartData',
  get: ({ get }) => {
    const data = get(newsListUpdated);
    return mapChartData(data);
  },
});
