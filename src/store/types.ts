export type HitType = {
  objectID: string,
  num_comments: number,
  points: number,
  title: string,
  url: string,
  author: string,
  created_at: string,
  shortUrl?: string,
  hidden?: boolean,
};

export type NewsBaseType = {
  page: number,
  hits: HitType[],
};

export type SavedNewsItem = {
  id: string | undefined,
  points: number | undefined,
  hidden: boolean | undefined,
};
