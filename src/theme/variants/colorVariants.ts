const lightColors = {
  border: '#ecf0f1',
  invalidInputBorder: '#e74c3c',
  borderLight: '#eeeeee',
  borderHighlited: '3498db',
  borderAction: '#bdc3c7',
  invalidText: '#e74c3c',
  regular: 'rgba(0, 0, 0, 0.9)',
  underline: '#03a9f4',
  listHover: '#ecf0f1',
  highlight: '#d4d4d4',
  highlightText: 'white',
  selected: '#03a9f4',
  selectedText: 'white',
  link: '3498db',
  textDimmed: 'rgba(0, 0, 0, 0.4)',
  textDescriptive: 'rgba(0, 0, 0, 0.6)',
  textRegular: 'rgba(255, 255, 255, 0.9)',
};

type ColorsBase = typeof lightColors;
type ColorsExtension = (colors: ColorsBase) => ColorsBase;
type Colors = ColorsBase | ColorsExtension;

const darkColors: ColorsBase = {
  border: '#383838',
  invalidInputBorder: '#ff0000',
  borderLight: '#222222',
  borderHighlited: '3498db',
  borderAction: '#505050',
  invalidText: '#e74c3c',
  regular: 'rgba(255, 255, 255, 0.9)',
  underline: '#03a9f4',
  listHover: '#505050',
  highlight: '#03a9f4',
  highlightText: 'white',
  selected: '#03a9f4',
  selectedText: 'white',
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
