import qs from 'qs';
import * as R from 'ramda';

export type HashProp = {
  [key: string]: string,
};

export const getHash = () => qs.parse(window?.location?.hash?.slice(1));

export const mapKey = (fnc: (key: string) => string) => R.pipe(
  R.toPairs,
  R.map(([key, value]) => [fnc(key), value]) as any,
  R.fromPairs,
) as (obj: HashProp) => HashProp;

export const withSecondArgument = <T, K>(fnc: (arg: K) => T) => (__: any, arg: K) => fnc(arg);

export const getKeySpace = (space: string) => R.pipe(
  R.pickBy(withSecondArgument(R.startsWith(`${space}.`))) as (obj: HashProp) => HashProp,
  mapKey(R.drop(space.length + 1)),
);

export const prefixObjectKeys = R.uncurryN(
  2, (prefix: string) => mapKey((key) => `${prefix}.${key}`),
) as (prefix: string, obj: HashProp) => HashProp;
