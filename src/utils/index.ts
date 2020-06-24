import moment from 'moment';

export const getDomain = (url: string) => {
  if (url == null) return null;
  const out: string | string[] = url.replace(/(https?:\/\/)?(www.)?/i, '');
  if (out.indexOf('/') !== -1) {
    return out.split('/')[0];
  }
  return out;
};

export const getTimeSince = (
  time: string | undefined | number,
) => moment(new Date(time ?? Date.now())).fromNow();
