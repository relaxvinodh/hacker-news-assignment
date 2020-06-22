import themeMakeFont, { FF_LIGHT, FF_NORMAL } from '../themeMakeFont';
/**
 * @description Set of font styles
 */
const fontVariants = {
  normal: {
    regular: themeMakeFont('11px'),
    numberDisplay: themeMakeFont('28pt', FF_LIGHT, 100),
    buttons: themeMakeFont('12px', FF_NORMAL, 600),

    tag: themeMakeFont('7pt', FF_NORMAL, 600),
    content: themeMakeFont('8pt', FF_NORMAL, 400),
    sectionHeader: themeMakeFont('14pt', FF_NORMAL, 300),
    large: themeMakeFont('24px', FF_NORMAL, 400),
    largeLight: themeMakeFont('24px', FF_NORMAL, 100),

    medium: themeMakeFont('16px', FF_NORMAL, 600),

    hint: themeMakeFont('11px', FF_NORMAL, 400),
    small: themeMakeFont('10px', FF_NORMAL, 600),
    description: themeMakeFont('16px', FF_NORMAL, 600),
    errorMessage: themeMakeFont('12px', FF_NORMAL, 800),
    fieldHeader: themeMakeFont('12px', FF_NORMAL, 400),

  },
};

export default fontVariants;
