import * as R from 'ramda';

export function cancelEvent<T = Element, E = Event>(e: React.SyntheticEvent<T, E>) {
  if (!e) return;
  e.preventDefault();
  e.stopPropagation();
}

export function stopAndProcessEvent<
  T = Element, E = Event
>(procesFunction?: (e: React.SyntheticEvent<T, E>) => void) {
  return (e: React.SyntheticEvent<T, E>) => {
    cancelEvent(e);
    if (procesFunction) {
      procesFunction(e);
    }
  };
}

export const getMaxValue = <T extends keyof K, K>(prop: T, data: K[]) => R.pipe(
  R.map(R.prop(prop as string) as (rec: K) => number),
  R.apply(Math.max),
)(data);
