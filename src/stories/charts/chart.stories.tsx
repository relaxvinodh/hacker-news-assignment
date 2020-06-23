import React from 'react';
import LineChart from '../../components/charts/LineChart';

export default {
  title: 'Data|Charts',
  includeStories: ['lineChartWithLegend'],
  parameters: {
    docs: {
      page: null,
    },
  },
};

export type SummedRecord = {
  id: string,
  votes: number | null,
};

export const summed = [
  {
    id: '213',
    votes: 500,
  },
  {
    id: '324',
    votes: 510,
  },
  {
    id: '654',
    votes: 750,
  },
  {
    id: '57',
    votes: 411,
  },
  {
    id: '1',
    votes: 564,
  },
  {
    id: '212',
    votes: 650,
  },
  {
    id: '9457',
    votes: 477,
  },
  {
    id: '4712',
    votes: 420,
  },
];

const renderLegend = (point: SummedRecord) => (
  <>
    ID:
    {' '}
    {point.id}
    Votes:
    {' '}
    {point.votes}
  </>
);

export const lineChartWithLegend = () => <LineChart prop="votes" data={summed} renderLegend={renderLegend} />;
