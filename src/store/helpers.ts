/* eslint-disable import/prefer-default-export */
import * as R from 'ramda';
import { SavedNewsItem, HitType } from './types';

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
