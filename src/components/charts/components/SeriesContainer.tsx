import styled from 'styled-components';
import { LegendWrapper } from './Legend';

const SeriesContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  ${LegendWrapper} + & {
    bottom: 20px;
  }
`;

export const SerieHoverBar = styled.div`
  flex: 1 1 0;
  z-index: 2;
`;

export default SeriesContainer;
