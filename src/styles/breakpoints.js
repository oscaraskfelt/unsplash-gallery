export const Sizes = {
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200',
  xxl: '1440',
};

export const Breakpoints = {
  // Small devices (landscape phones, 576px and up)
  sm: `(min-width: ${Sizes.sm}px)`,
  // Medium devices (tablets, 768px and up)
  md: `(min-width: ${Sizes.md}px)`,
  // Large devices (desktops, 992px and up)
  lg: `(min-width: ${Sizes.lg}px)`,
  // X-Large devices (large desktops, 1200px and up)
  xl: `(min-width: ${Sizes.xl}px)`,
  // XX-Large devices (larger desktops, 1400px and up)
  xxl: `(min-width: ${Sizes.xxl}px)`,
};
