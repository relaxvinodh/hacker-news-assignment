import React, { useContext } from 'react';
import { styled } from '../../../theme';
import BottomLegend from '../components/BottomLegend';
import ChartContainer from '../components/ChartContainer';
import Circle, { SeriesProps } from '../components/Circle';
import { MyItemsHover } from '../components/ItemsHover';
import SeriesContainer from '../components/SeriesContainer';
import SvgContainer from '../components/SvgContainer';
import { ChartContext, SvgContext } from '../contexts';
import { getMaxValue } from '../helpers';
import calculateLinePoints from './calculatePoints';

const LineSeries = <T, _>({ prop, ...props }: SeriesProps<T> & Omit<React.SVGProps<SVGPolylineElement>, 'd'>) => {
  const chartContext = useContext(ChartContext);
  const svgContext = useContext(SvgContext);
  const maxValue = getMaxValue(prop, chartContext?.data ?? []);
  const lineData = calculateLinePoints({
    svgWidth: svgContext?.width as number,
    svgHeight: svgContext?.height as number,
    data: chartContext?.data as T[],
    key: prop,
    maxValue,
  });
  return (
    <polyline fill="none" strokeWidth="1px" {...props} points={lineData} />
  );
};

const SeriesContainerStyled = styled(SeriesContainer)`
  width: 70%;
`;

const LineChart = <T, _>({
  data, renderLegend, prop,
}:{ data: T[], renderLegend: (point: T) => JSX.Element, prop: keyof T,
}) => (
  <ChartContainer data={data} style={{ height: '150px', width: '100%' }}>
    <BottomLegend render={renderLegend} style={{ right: '10px', top: '10px', left: 'unset' }} />
    <SeriesContainerStyled>
      <SvgContainer>
        <LineSeries prop={prop} stroke="green" strokeWidth="2px" />
        <Circle prop={prop} stroke="red" />
      </SvgContainer>
      <MyItemsHover />
    </SeriesContainerStyled>
  </ChartContainer>
  );

export default LineChart;
