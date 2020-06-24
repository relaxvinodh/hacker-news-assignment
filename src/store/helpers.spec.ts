import { mapShortUrl, mapChartData, getUpdatedData } from './helpers';

const mockData = {
  objectID: '1',
  num_comments: 2121,
  points: 102,
  title: 'I am title',
  url: 'https://www.google.com/lorem/ipsum',
  author: 'vinodh',
  created_at: String(Date.now()),
};

describe('test store helpers', () => {
  it('map short url from url', () => {
    const [dataWithShortUrl] = mapShortUrl([mockData]);
    expect(dataWithShortUrl.shortUrl).toEqual('google.com');
  });

  it('should contain only objectID and points', () => {
    const [chartData] = mapChartData([mockData]);
    const expectedData = { objectID: '1', points: 102 };
    expect(chartData).toStrictEqual(expectedData);
  });

  it('merge saved upVote and hidden with existing data', () => {
    const savedData = { id: '1', points: 110, hidden: true };
    const [updatedData] = getUpdatedData([savedData], [mockData]);
    expect(updatedData.points).toBe(110);
    expect(updatedData.hidden).toBe(true);
  });
});
