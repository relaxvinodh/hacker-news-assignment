import React, { useContext } from 'react';
import { styled } from '../../../theme';
import { ChartContext } from '../contexts';

type LegendProps<T> = {
  render: (point: T) => JSX.Element,
  defaultContent?: JSX.Element | string,
  style?: React.CSSProperties,
};

export const BottomLegendWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const BottomLegendItem = styled.div`
  background-color: #ffffff22;
  display: none;
`;

const BottomLegend = <T, _>({
  render, children, style,
}: LegendProps<T> & { children?: React.ReactNode}) => {
  const chartContext = useContext(ChartContext);

  return (
    <BottomLegendWrapper style={style}>
      {children && (
        <BottomLegendItem data-default>
          {children}
        </BottomLegendItem>
      )}
      {chartContext?.data?.map?.((point, ix) => (
        <BottomLegendItem key={ix} data-category={ix}>
          {render(point)}
        </BottomLegendItem>
      ))}
    </BottomLegendWrapper>
  );
};

export default BottomLegend;
