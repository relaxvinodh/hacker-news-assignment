import React, { useContext } from 'react';
import { styled } from '../../../theme';
import Legend from '../components/Legend';
import ChartContainer from '../components/ChartContainer';
import Circle, { SeriesProps } from '../components/Circle';
import { MyItemsHover } from '../components/ItemsHover';
import SeriesContainer from '../components/SeriesContainer';
import SvgContainer, { PositionedSvg } from '../components/SvgContainer';
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

const Wrapper = styled.div`
  width: 70%;
  ${PositionedSvg} {
    border-left: 2px dashed ${({ theme }) => theme.colors.link};
    border-bottom: 2px dashed ${({ theme }) => theme.colors.link};
  }
`;

const LineChart = <T, _>({
  data, renderLegend, prop,
}:{ data: T[], renderLegend: (point: T) => JSX.Element, prop: keyof T,
}) => (
  <ChartContainer data={data} style={{ height: '150px', width: '100%', display: 'flex' }}>
    <Wrapper>
      <SeriesContainer style={{ width: 'inherit' }}>
        <SvgContainer>
          <LineSeries prop={prop} stroke="#3498db" strokeWidth="2px" />
          <Circle prop={prop} stroke="black" />
        </SvgContainer>
        <MyItemsHover />
      </SeriesContainer>
    </Wrapper>
    <Legend render={renderLegend} style={{ position: 'static' }} />
  </ChartContainer>
  );

export default LineChart;
