import { css, styled } from '../../theme';
import { TableField } from '../table';

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

export const Author = styled.span`
  color: ${({ theme }) => theme.colors.regular};
  ${SmallFont};
`;

export const TableFieldClickable = styled(TableField)`
  cursor: pointer;
`;

export const Button = styled.span`
  color: '#f5ad7b';
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

export const ButtonContainer = styled.div`
  /* background: black; */
  text-align: center;
`;
