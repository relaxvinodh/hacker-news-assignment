import { atomFamily, selectorFamily } from 'recoil';
import qs from 'qs';
import {
  getHash, getKeySpace, HashProp, prefixObjectKeys,
} from './helpers';

export const hashWithSpaceState = atomFamily({
  key: 'hash',
  default: (space: string) => getKeySpace(space)(getHash() as HashProp),
});

const hashState = atomFamily({
  key: 'hashDefault',
  default: (space: string) => getKeySpace(space)(getHash() as HashProp),
});

export const hashWithSpaceSelector = selectorFamily({
  key: 'hashSelector',
  get: (space: string) => ({ get }) => {
    const hash = get(hashState(space));
    return hash;
  },
  set: (space: string) => ({ set }, newValue: any) => {
    window.addEventListener('hashchange', () => {
      const currentHash = getHash() as HashProp;
      const keySpace = getKeySpace(space)(currentHash);
      set(hashState(space), keySpace);
    });

    const setSpace = (newData: HashProp) => {
      const newHash = {
        ...getHash(),
        ...prefixObjectKeys(space, newData),
      };
      window.location.href = `#${qs.stringify(newHash)}`;
      set(hashState(space), newData);
    };
    setSpace(newValue);
  },
});
