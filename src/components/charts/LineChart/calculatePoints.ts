type CalculateLinePointsProps<T> = {
  svgWidth: number,
  svgHeight: number,
  key: keyof T,
  maxValue: number,
  radius?: number,
  data: T[],
};

const calculateLinePoints = <T, _>({
  svgWidth, svgHeight, data, key, maxValue,
}: CalculateLinePointsProps<T>) => data
    .map(
      (item, i) => {
        if (typeof item[key] !== 'undefined' && item[key] !== null) {
          const point = svgHeight - (item[key] / maxValue) * svgHeight || 0;
          return `${i * (svgWidth / data.length) + (svgWidth / data.length / 2)},${Number.isFinite(point) ? point : 0}`;
        }
        return '';
      },
    ).join(' ');

export default calculateLinePoints;
