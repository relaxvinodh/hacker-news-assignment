/**
 * @description Set of colors used for backgrounds with light theme
 */

const lightBackgrounds = {
  regular: 'white',
  highlight: '#3498db',
  input: 'white',
  invalid: '#e74c3c',
};

const darkBackgrounds = {
  regular: '#252525',
  highlight: '#3498db',
  input: 'black',
  invalid: '#e74c3c',
};

/**
 * @description Set of colors used for backgrounds with transparent theme
 */

const transparentBackgrounds = {
  regular: 'transparent',
  highlight: 'transparent',
  input: 'transparent',
  invalid: 'transparent',
};

const backgroundVariants = {
  dark: darkBackgrounds,
  light: lightBackgrounds,
  transparent: transparentBackgrounds,
};

export default backgroundVariants;
