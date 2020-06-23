import React, { useContext, useMemo } from 'react';
import { styled, StyledComponentPropsWithRef } from '../../../theme';
import { ChartContext } from '../contexts';
import { stopAndProcessEvent } from '../helpers';
import { SerieHoverBar } from './SeriesContainer';

const ItemsHover: React.FC<
StyledComponentPropsWithRef<typeof SerieHoverBar>
> = ({ children, ...props }) => {
  const chartContext = useContext(ChartContext);

  const onMouseEnter = useMemo(
    () => (chartContext ? stopAndProcessEvent<HTMLDivElement, MouseEvent>((event) => {
      chartContext.setHoverId((event?.target as HTMLDivElement)?.getAttribute('data-category'));
    }) : undefined), [chartContext],
  );

  return (
    <>
      {chartContext?.data?.map?.((_, ix) => (
        <SerieHoverBar {...props} key={ix} data-category={ix} onMouseEnter={onMouseEnter} />)
      )}
    </>
  );
};

export const MyItemsHover = styled(ItemsHover)`
  :hover {
    background-color: #ffff0022;
  }
`;

export default ItemsHover;
