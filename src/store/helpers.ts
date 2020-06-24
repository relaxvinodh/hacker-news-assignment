import * as R from 'ramda';
import { getDomain } from '../utils';
import { HitType, SavedNewsItem } from './types';

export const newsBaseProp = ['page', 'hits'];

export const hitsProp = ['objectID', 'num_comments', 'points', 'title', 'url', 'author', 'created_at'];

export const getUpdatedData = (updatedData: SavedNewsItem[], hits: HitType[]) => {
  if (updatedData.length === 0) {
    return hits;
  }

  const savedHash = R.indexBy(R.prop('id') as (rec: SavedNewsItem) => string, updatedData);
  return R.map((item: HitType) => R.pipe(
    R.assoc('points', savedHash[item.objectID]?.points ?? item.points),
    R.assoc('hidden', savedHash[item.objectID]?.hidden ?? item.hidden),
  )(item))(hits);
};

export const mapShortUrl = (data: HitType[]) => R.map(R.pipe(
  R.pick(hitsProp) as (rec: HitType) => HitType,
  (list) => R.assoc('shortUrl', getDomain(list.url), list),
))(data);

export const mapChartData = (data: HitType[]) => R.map(R.pick(['objectID', 'points']), data);
