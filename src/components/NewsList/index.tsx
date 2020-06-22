import React from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { newsListQuery, pageNumberState } from '../../store';
import BusyBox from '../BusyBox';
import ListItem from './ListItem';

const NewsList: React.FC = () => {
  const pageNumber = useRecoilValue(pageNumberState);
  const { state } = useRecoilValueLoadable(newsListQuery(pageNumber));
  if (state === 'loading') {
    return <BusyBox />;
  }
  return (
    <>
      <ListItem />
    </>
  );
};

export default NewsList;
