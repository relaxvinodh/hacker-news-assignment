import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { HASH_SPACE } from '../../constants';
import { hashWithSpaceSelector } from '../../utils/hash/atoms';
import ListItem from './ListItem';
import { Button, ButtonContainer, PageDisplayed } from './styled';

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
    <>
      <ListItem />
      <ButtonContainer>
        <Button onClick={page === '1' ? undefined : handlePrevious}>Previous</Button>
        |
        <Button onClick={handleNext}>Next</Button>
        <PageDisplayed>
          (Page Disaplyed:
          {' '}
          {page}
          )
        </PageDisplayed>
      </ButtonContainer>
    </>
  );
};

export default NewsList;
