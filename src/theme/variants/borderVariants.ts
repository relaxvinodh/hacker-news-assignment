const borderVariants = {
  normal: {
    style: 'solid',
    width: '2px',
    invalidInputBorderStyle: 'solid',
    invalidInputBorderWidth: '2px',
    inputMarginCorrection: '0',
    normalInputColor: true,
  },
  none: {
    style: 'none',
    width: '0',
    invalidInputBorderStyle: 'solid',
    invalidInputBorderWidth: '2px',
    inputMarginCorrection: '0 -2px',
    normalInputColor: false,
  },
};

export default borderVariants;
