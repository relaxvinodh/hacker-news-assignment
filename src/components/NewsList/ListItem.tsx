import React, { useCallback, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  newsListQuery, pageNumberState, persistenceData, UpdatedState,
} from '../../store';
import { getUpdatedData } from '../../store/helpers';
import { HitType, SavedNewsItem } from '../../store/types';
import { ThemeVariation } from '../../theme';
import { getTimeSince } from '../../utils';
import {
  Table, TableField, TableLabel, TableRow,
} from '../table';
import {
  Author, Details, UpVoteIcon, Url,
} from './styled';

const ListItem:React.FC = () => {
  const pageNumber = useRecoilValue(pageNumberState);
  const data = useRecoilValue(newsListQuery(pageNumber));
  const saveItem = useSetRecoilState(persistenceData);
  const updatedData = useRecoilValue(UpdatedState);
  const { hits } = data;

  const UpdatedDataRows = useMemo(() => getUpdatedData(updatedData, hits), [hits, updatedData]);
  const handleUpVote = useCallback(({ id, points, hidden }: SavedNewsItem) => {
    saveItem({
      id,
      points: (points ?? 0) + 1,
      hidden: hidden ?? null,
    });
  }, [saveItem]);

  const renderRow = (row?: HitType) => (
    <TableRow wrapping={{ under: 'md' }} key={row?.objectID}>
      <TableField minWidth="30" ratio="0.5">
        <TableLabel>Comments</TableLabel>
        <div>{row?.num_comments}</div>
      </TableField>
      <TableField minWidth="300" ratio="0.5">
        <TableLabel>Vote Count</TableLabel>
        <div>{row?.points}</div>
      </TableField>
      <TableField minWidth="30" ratio="0.5">
        <TableLabel>Up Vote</TableLabel>
        <UpVoteIcon
          onClick={
            () => handleUpVote({ id: row?.objectID, points: row?.points, hidden: row?.hidden })
          }
        />
      </TableField>
      <TableField minWidth="200" ratio="5">
        <TableLabel>Description</TableLabel>
        {row?.title && (
          <>
            <span>{row?.title}</span>
            <Details>
              {' '}
              (
              {' '}
              <Url href={row?.url}>{row?.shortUrl}</Url>
              {' '}
              )
              {' '}
              by
              {' '}
              <Author>{row?.author}</Author>
              {' '}
              {getTimeSince(row?.created_at)}
            </Details>
          </>
        )}
      </TableField>
    </TableRow>
  );

  return (
    <ThemeVariation sizing="small">
      <Table rows={UpdatedDataRows} renderRow={renderRow} />
    </ThemeVariation>
  );
};

export default ListItem;
