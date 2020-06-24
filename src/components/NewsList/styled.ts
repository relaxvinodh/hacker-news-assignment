import { css, styled } from '../../theme';
import { TableField, TableHeader } from '../table';

export const UpVoteIcon = styled.span`
  cursor: pointer;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 4px 8px 4px;
  border-color: transparent transparent #000 transparent;
  display: inline-block;
  margin-left: 15px;
  cursor: pointer;
`;

export const DimmedCss = css`
  color: ${({ theme }) => theme.colors.textDimmed};
`;

export const SmallFont = css`
  font-size: ${({ theme }) => theme.sizing.fonts.regular.size};
`;

export const Details = styled.span`
  ${SmallFont};
  ${DimmedCss};
`;

export const Url = styled.a.attrs({
  target: '_blank',
})`
  text-decoration: none;
  ${DimmedCss};
  ${SmallFont}
`;

export const DarkText = styled.span`
  color: ${({ theme }) => theme.colors.regular};
  ${SmallFont};
`;

export const HideText = styled(DarkText)`
  cursor: pointer;
`;

export const TableFieldClickable = styled(TableField)`
  cursor: pointer;
`;

export const Button = styled.span`
  color: ${({ onClick, theme }) => (onClick ? theme.colors.link : theme.colors.regular)};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  margin: 0 5px;
`;

const HighlightedFontCss = css`
  color: ${({ theme }) => theme.colors.regular};
  background-color: ${({ theme }) => theme.backgrounds.highlight};
  font-size: ${({ theme }) => theme.sizing.fonts.boldText.size};
  font-weight: ${({ theme }) => theme.sizing.fonts.boldText.weight};
`;

export const PageDisplayed = styled.span`
  ${HighlightedFontCss};
`;

export const TableContainer = styled.div`
  ${TableHeader} {
    ${HighlightedFontCss}
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;
