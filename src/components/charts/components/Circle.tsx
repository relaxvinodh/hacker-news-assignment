import React, { useContext, useMemo } from 'react';
import { getMaxValue } from '../helpers';
import { ChartContext, SvgContext } from '../contexts';

type getCircleXYProps<T> = {
  svgWidth: number,
  svgHeight: number,
  totalPoints: number,
  key: keyof T,
  maxValue: number,
  idx: number,
  item: T,
  radius?: number,
};

const getCircleXY = <T, _>({
  svgWidth, svgHeight, totalPoints, key, maxValue, idx, item, radius,
}: getCircleXYProps<T>) => {
  const cx = `${idx * (svgWidth / totalPoints) + (svgWidth / totalPoints / 2)}`;
  const cy = `${svgHeight - ((item[key]) as unknown as number / maxValue) * svgHeight || 0}`;
  const r = radius ?? 3;
  return {
    cx, cy, r,
  };
};

export type SeriesProps<T> = {
  prop: keyof T,
};

const Circle = <T, _>({ prop, ...props }: SeriesProps<T> & Omit<React.SVGProps<SVGCircleElement>, ''>) => {
  const chartContext = useContext(ChartContext);
  const svgContext = useContext(SvgContext);
  const circlePoints = useMemo(() => {
    const { data = [] } = chartContext ?? {};
    const maxValue = getMaxValue(prop, data);
    return data.map((item, idx) => getCircleXY({
      svgWidth: svgContext?.width as number,
      svgHeight: svgContext?.height as number,
      totalPoints: data.length,
      key: prop,
      maxValue: maxValue as number,
      idx,
      item,
    }));
  }, [svgContext, chartContext, prop]);

  return (
    <>
      {circlePoints.map((points, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <circle {...props} {...points} key={idx} />
      ))}
    </>
  );
};

export default Circle;
