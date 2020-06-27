import React, { useContext } from 'react';
import { styled } from '../../../theme';
import { ChartContext } from '../contexts';

type LegendProps<T> = {
  render: (point: T) => JSX.Element,
  defaultContent?: JSX.Element | string,
  style?: React.CSSProperties,
};

export const LegendWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const LegendItem = styled.div`
  background-color: #ffffff22;
  display: none;
`;

const Legend = <T, _>({
  render, children, style,
}: LegendProps<T> & { children?: React.ReactNode}) => {
  const chartContext = useContext(ChartContext);

  return (
    <LegendWrapper style={style}>
      {children && (
        <LegendItem data-default>
          {children}
        </LegendItem>
      )}
      {chartContext?.data?.map?.((point, ix) => (
        <LegendItem key={ix} data-category={ix}>
          {render(point)}
        </LegendItem>
      ))}
    </LegendWrapper>
  );
};

export default Legend;
