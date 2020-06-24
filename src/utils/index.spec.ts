import moment from 'moment';
import { getDomain, getTimeSince } from '.';

describe('test utils', () => {
  it('should return the domain from the url', () => {
    expect(getDomain('https://www.google.com/lorem/ipsum')).toEqual('google.com');
  });

  it('should return time since in string format', () => {
    const date = moment().subtract(1, 'years').valueOf();
    expect(getTimeSince(date)).toBe('a year ago');
  });
});
