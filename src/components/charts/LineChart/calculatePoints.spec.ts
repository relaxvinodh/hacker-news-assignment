import calculatePoints from './calculatePoints';

describe('Calculate Line Points for polyline', () => {
  it('should calculate line points', () => {
    const points = calculatePoints({
      svgWidth: 100,
      svgHeight: 100,
      data: [{ foo: 10 }, { foo: 36 }],
      key: 'foo',
      maxValue: 100,
    });
    expect(points).toEqual('25,90 75,64');
  });
});
