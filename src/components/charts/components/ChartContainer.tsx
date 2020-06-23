import React, { useState, useCallback } from 'react';
import { StyledComponentPropsWithRef, styled } from '../../../theme';
import { ChartContext } from '../contexts';

type ChartProps<T> = {
  data: T[],
};

type HoverId = string | number | null | undefined;

type ChartWrapperProps = { hoverId?: HoverId };

const ChartWrapper = styled.div<ChartWrapperProps>`
  position: relative;

  :hover *${({ hoverId }) => (typeof hoverId !== 'undefined' ? `[data-category="${hoverId}"]` : '[data-default]')}  {
    display: block;
  }

  &:not(:hover) *[data-default] {
    display: block;
  }
`;

const ChartContainer = <T, _>({
  data, children, ...props
}: ChartProps<T> & StyledComponentPropsWithRef<typeof ChartWrapper>) => {
  const [hoverId, setHoverId] = useState<HoverId>(undefined);
  const restHoverId = useCallback(() => setHoverId(undefined), []);

  return (
    <ChartContext.Provider value={{ data, setHoverId }}>
      <ChartWrapper {...props} hoverId={hoverId} onMouseEnter={restHoverId}>
        {children}
      </ChartWrapper>
    </ChartContext.Provider>
  );
};

export default ChartContainer;
