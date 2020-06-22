/**
 * @description Set of colors used for backgrounds with light theme
 */

const lightBackgrounds = {
  regular: 'white',
  highlight: '#3498db', // previous implementation might be misleading now
  input: 'white',
  invalid: '#e74c3c',
  /**
   * @deprecated
   */
  drilldown: 'white',
  action: 'white',
  hover: '#ecf0f1',
  dimmed: '#ecf0f1',
};

/**
 * @description Set of colors used for backgrounds with dark theme
 */

const darkBackgrounds = {
  regular: '#252525',
  highlight: '#3498db', // previous implementation might be misleading now
  input: 'black',
  invalid: '#e74c3c',
  /**
   * @deprecated
   */
  drilldown: '#383836',
  action: '#383838',
  hover: '#505050',
  dimmed: '#383838',
};

/**
 * @description Set of colors used for backgrounds with transparent theme
 */

const transparentBackgrounds = {
  regular: 'transparent',
  highlight: 'transparent',
  input: 'transparent',
  invalid: 'transparent',
  /**
   * @deprecated
   */
  drilldown: 'transparent',
  action: 'transparent',
  hover: 'transparent',
  dimmed: 'transparent',
};

const backgroundVariants = {
  dark: darkBackgrounds,
  light: lightBackgrounds,
  transparent: transparentBackgrounds,
};

export default backgroundVariants;
