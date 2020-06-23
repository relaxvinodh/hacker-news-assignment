const lightColors = {
  border: '#ecf0f1',
  borderLight: '#eeeeee',
  borderAction: '#bdc3c7',
  regular: 'rgba(0, 0, 0, 0.9)',
  link: '#3498db',
  textDimmed: 'rgba(0, 0, 0, 0.4)',
  textDescriptive: 'rgba(0, 0, 0, 0.6)',
  textRegular: 'rgba(255, 255, 255, 0.9)',
};

type ColorsBase = typeof lightColors;
type ColorsExtension = (colors: ColorsBase) => ColorsBase;
type Colors = ColorsBase | ColorsExtension;

const darkColors: ColorsBase = {
  border: '#383838',
  borderLight: '#222222',
  borderAction: '#505050',
  regular: 'rgba(255, 255, 255, 0.9)',
  link: '3498db',
  textDescriptive: 'rgba(255, 255, 255, 0.6)',
  textDimmed: 'rgba(255, 255, 255, 0.4)',
  textRegular: 'rgba(255, 255, 255, 0.9)',
};

const colorVariants = {
  dark: darkColors,
  light: lightColors,
} as const;

export default colorVariants;
