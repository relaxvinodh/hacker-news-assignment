import React from 'react';
import { useRecoilValue } from 'recoil';
import { chartData } from '../../store';
import { HitType } from '../../store/types';
import LineChart from '../charts/LineChart';
import { styled } from '../../theme';
import themeMakeFont from '../../theme/themeMakeFont';

const fonts = themeMakeFont('10pt', undefined, 600);

const LegendTitle = styled.span`
  color: ${({ theme }) => theme.colors.regular};
  font-size: ${fonts.size};
  font-weight: ${fonts.weight};
  margin: 0 5px;
`;

const Container = styled.div`
  margin-top: 20px;
`;

const renderLegend = (point: Partial<HitType>) => (
  <>
    <LegendTitle>ID:</LegendTitle>
    {point.objectID}
    <LegendTitle>Votes:</LegendTitle>
    {point.points}
  </>
);

const NewsChart: React.FC = () => {
  const data = useRecoilValue(chartData);
  return (
    <Container>
      <LineChart data={data} prop="points" renderLegend={renderLegend} />
    </Container>
  );
};

export default NewsChart;
