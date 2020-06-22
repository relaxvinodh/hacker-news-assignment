export interface IRecord {
  id: string;
  status: string;
  urgency: string;
  tickets: string;
  reference: string;
  created: string;
  description: string;
  lastUpdate: string;
  lastUpdateBy: string;

  lastComment?: string;
  lastCommentDate?: string;
  lastCommentCreatedBy?: string;
}

export const rows: IRecord[] = [
  {
    id: '2',
    status: 'new',
    urgency: 'fyi',
    tickets: 'XXXXXX',
    reference: 'People',
    created: '1559825857072',
    description: 'Lorem ipsum dolor sit amet',
    lastUpdate: '1559825857072',
    lastUpdateBy: 'vinodh kanna',
    lastComment: 'My very first coment',
    lastCommentDate: '1559825857072',
    lastCommentCreatedBy: 'vinodh kanna',
  },
  {
    id: '3',
    status: 'update',
    urgency: 'high',
    tickets: 'XXXXX',
    reference: 'Machines',
    created: '1559825857072',
    description: 'Machines get broken',

    lastUpdate: '1559825857072',
    lastUpdateBy: 'vinodh kanna',
  },

];
