/** Regular font. */
export const FF_NORMAL = '"Roboto", sans-serif';
/** Light variant of the font. */
export const FF_LIGHT = '"Roboto light", sans-serif';

/**
 * Create theme font object.
 * @param size Font-size.
 * @param family Font family.
 * @param weight Font weight.
 */
const themeMakeFont = (size: string, family = FF_NORMAL, weight: string | number = 'normal') => ({
  family,
  size,
  weight,
});

export default themeMakeFont;
