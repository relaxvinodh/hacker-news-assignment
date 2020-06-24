import React, { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { newsListUpdated, persistenceData } from '../../store';
import { HitType, SavedNewsItem } from '../../store/types';
import { ThemeVariation } from '../../theme';
import { getTimeSince } from '../../utils';
import {
  Table, TableField, TableLabel, TableRow, TableFieldGroup,
} from '../table';
import {
  DarkText, Details, TableFieldClickable, UpVoteIcon, Url, HideText,
} from './styled';

const ListItem:React.FC = () => {
  const saveItem = useSetRecoilState(persistenceData);
  const rows = useRecoilValue(newsListUpdated);
  const handleAction = useCallback(({ id, points, hidden }: SavedNewsItem) => {
    saveItem({ id, points, hidden });
  }, [saveItem]);

  const renderRow = (row?: HitType) => (
    <TableRow key={row?.objectID} wrapping={{ under: 'sm' }}>
      <TableFieldGroup ratio="2" wrapping={{ under: 'md' }}>

        <TableField minWidth="30" ratio="0.5">
          <TableLabel>Comments</TableLabel>
          <div>{row?.num_comments}</div>
        </TableField>
        <TableField minWidth="300" ratio="0.5">
          <TableLabel>Vote Count</TableLabel>
          <div>{row?.points}</div>
        </TableField>
        <TableFieldClickable
          minWidth="30"
          ratio="0.5"
          onClick={() => handleAction({
            id: row?.objectID,
            points: ((row?.points ?? 0) + 1),
            hidden: row?.hidden,
          })}
        >
          <TableLabel>Up Vote</TableLabel>
          {row && <UpVoteIcon />}
        </TableFieldClickable>
      </TableFieldGroup>
      <TableField minWidth="200" ratio="5">
        <TableLabel>Description</TableLabel>
        {!row?.hidden && (
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
              <DarkText>{row?.author}</DarkText>
              {' '}
              {getTimeSince(row?.created_at)}
              {' [ '}
              <HideText onClick={() => handleAction({
                id: row?.objectID,
                points: row?.points,
                hidden: true,
              })}
              >
                Hide
              </HideText>
              {' ] '}
            </Details>
          </>
        )}
      </TableField>
    </TableRow>
  );

  return (
    <ThemeVariation sizing="small">
      <Table rows={rows} renderRow={renderRow} />
    </ThemeVariation>
  );
};

export default ListItem;
