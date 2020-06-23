import React, { useContext } from 'react';
import { ChartContext, SvgContext } from '../contexts';
import { getMaxValue } from '../helpers';
import calculateLinePoints from './calculatePoints';
import ChartContainer from '../components/ChartContainer';
import BottomLegend from '../components/BottomLegend';
import SeriesContainer from '../components/SeriesContainer';
import SvgContainer from '../components/SvgContainer';
import { MyItemsHover } from '../components/ItemsHover';
import Circle, { SeriesProps } from '../components/Circle';

const LineSeries = <T, _>({ prop, ...props }: SeriesProps<T> & Omit<React.SVGProps<SVGPolylineElement>, 'd'>) => {
  const chartContext = useContext(ChartContext);
  const svgContext = useContext(SvgContext);
  const maxValue = getMaxValue(prop, chartContext?.data ?? []);
  const lineData = calculateLinePoints({
    svgWidth: svgContext?.width,
    svgHeight: svgContext?.height,
    data: chartContext?.data,
    key: prop,
    maxValue,
  });
  return (
    <polyline fill="none" strokeWidth="1px" {...props} points={lineData} />
  );
};

const LineChart = <T, _>({
  data, renderLegend,
}:{ data: T[], renderLegend: (point: T) => JSX.Element}) => (
  <ChartContainer data={data} style={{ height: '300px', width: '100%' }}>
    <BottomLegend render={renderLegend} />
    <SeriesContainer>
      <SvgContainer>
        <LineSeries prop="votes" stroke="green" strokeWidth="2px" />
        <Circle prop="votes" stroke="red" />
      </SvgContainer>
      <MyItemsHover />
    </SeriesContainer>
  </ChartContainer>
  );

export default LineChart;
