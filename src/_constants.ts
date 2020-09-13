const WHITE = '#FFFFFF'
const BLACK20 = '#F8F8F8'
const BLACK40 = '#E8E8E8'
const BLACK60 = '#ADADAD'
const BLACK80 = '#5C5C5C'
const BLACK = '#303030'

export { WHITE, BLACK20, BLACK40, BLACK60, BLACK80, BLACK }

export const BREAKPOINTS = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
}

const customMediaQuery = (minWidth: number): string =>
  `@media screen and (min-width: ${minWidth}px)`

export const media = {
  custom: customMediaQuery,
  mobileS: customMediaQuery(BREAKPOINTS.mobileS),
  mobileM: customMediaQuery(BREAKPOINTS.mobileM),
  mobileL: customMediaQuery(BREAKPOINTS.mobileL),
  tablet: customMediaQuery(BREAKPOINTS.tablet),
  laptop: customMediaQuery(BREAKPOINTS.laptop),
  laptopL: customMediaQuery(BREAKPOINTS.laptopL),
}
