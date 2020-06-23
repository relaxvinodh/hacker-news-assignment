import React, { Suspense, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { HASH_SPACE } from '../../constants';
import { hashWithSpaceSelector } from '../../utils/hash/atoms';
import BusyBox from '../BusyBox';
import ListItem from './ListItem';
import { Button, ButtonContainer } from './styled';

const NewsList: React.FC = () => {
  const [{ page }, setHash] = useRecoilState(hashWithSpaceSelector(HASH_SPACE.newsScope));

  useEffect(() => {
    if (page == null) {
      setHash({ page: '1' });
    }
  }, [page]);

  const handleNext = useCallback(() => {
    setHash({ page: String(Number(page) + 1) });
  }, [page]);

  const handlePrevious = useCallback(() => {
    setHash({ page: String(Number(page) - 1) });
  }, [page]);

  return (
    <Suspense fallback={<BusyBox />}>
      <ListItem />
      <ButtonContainer>
        <Button onClick={page === '1' ? undefined : handlePrevious}>Previous</Button>
        {'  '}
        |
        {'  '}
        <Button onClick={handleNext}>Next</Button>
      </ButtonContainer>
    </Suspense>
  );
};

export default NewsList;
