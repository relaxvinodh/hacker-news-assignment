import themeMakeFont, { FF_NORMAL } from '../themeMakeFont';

const sizingVariants = {
  small: {
    inputPadding: '5px',
    inputMargin: '2px',
    inputTopOffset: 7,
    inputLeftOffset: 7,
    inputWidth: 'calc(100% - 4px)',
    contentPadding: '0 0 7px 0',
    fonts: {
      regular: themeMakeFont('7pt'),
      lightText: themeMakeFont('9pt', FF_NORMAL, 500),
      regularText: themeMakeFont('10pt', FF_NORMAL, 500),
      boldText: themeMakeFont('10pt', FF_NORMAL, 700),
    },
  },
  normal: {
    inputPadding: '5px',
    inputMargin: '2px',
    inputTopOffset: 7,
    inputLeftOffset: 7,
    inputWidth: 'calc(100% - 4px)',
    contentPadding: '0 0 7px 0',

    fonts: {
      regular: themeMakeFont('8pt'),
      lightText: themeMakeFont('9pt', FF_NORMAL, 500),
      regularText: themeMakeFont('10pt', FF_NORMAL, 500),
      boldText: themeMakeFont('10pt', FF_NORMAL, 700),
    },
  },
  large: {
    fonts: {
      regular: themeMakeFont('12pt'),
      lightText: themeMakeFont('11pt', FF_NORMAL, 500),
      regularText: themeMakeFont('12pt', FF_NORMAL, 500),
      boldText: themeMakeFont('12pt', FF_NORMAL, 700),
    },
  },
};

export default sizingVariants;
