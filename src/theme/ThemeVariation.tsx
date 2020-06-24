import React from 'react';
import styled, { ThemeProvider } from './styled';
import { variations, ThemeType } from './theme';

type OverrideKey = keyof typeof variations;

type OverridesType = {
  [key in OverrideKey]?: (ThemeType)[key];
};

type OptsType = {
  [key in OverrideKey]?: keyof (typeof variations)[key];
};

type ThemeVariationProps = {
  children: React.ReactNode,
} & OptsType;

const ThemeVariation = ({ children, ...opts }: ThemeVariationProps) => {
  // Pick modifiers based on props
  // ts-ignoring it because TypeScript is not able to see
  // that OptsType is correct for selected variation

  const foundVariants: any = Object.keys(opts)
  // @ts-ignore
    .filter((key: OverrideKey) => variations[key] && !!(variations[key][opts[key]]));

  if (foundVariants.length === 0) {
    return <>{children}</>;
  }

  const mapTheme = (current: ThemeType): ThemeType => foundVariants
    .reduce((out: ThemeType, key: OverrideKey) => {
      // @ts-ignore
      let val = variations[key][opts[key]];

      if (typeof val === 'function') {
        val = val(current[key]);
      }

      return Object.assign(out, { [key]: val });
    }, { ...current });

  return (
    <ThemeProvider theme={mapTheme}>
      <>
        {children}
      </>
    </ThemeProvider>
  );
};

export const SetBackground = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.regular};
  :not(a) {
    color: ${({ theme }) => theme.colors.regular};
  }
  a{
    color: ${({ theme }) => theme.colors.link};
  }
  
`;

export const ColorBlock = ({ children, ...props }: ThemeVariationProps) => (
  <ThemeVariation {...props}>
    <SetBackground>
      {children}
    </SetBackground>
  </ThemeVariation>
);

export const DarkBlock = (props: ThemeVariationProps) => <ColorBlock {...props} colors="dark" backgrounds="dark" />;
export const LightBlock = (props: ThemeVariationProps) => <ColorBlock {...props} colors="light" backgrounds="light" />;

export default ThemeVariation;
