export const BLOG_TITLE = 'One Step Forward'

const customMediaQuery = (maxWidth: number): string =>
  `@media screen and (max-width: ${maxWidth}px)`

const BREAKPOINTS = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
}

export const MQ = {
  custom: customMediaQuery,
  mobileS: customMediaQuery(BREAKPOINTS.mobileS),
  mobileM: customMediaQuery(BREAKPOINTS.mobileM),
  mobileL: customMediaQuery(BREAKPOINTS.mobileL),
  tablet: customMediaQuery(BREAKPOINTS.tablet),
  laptop: customMediaQuery(BREAKPOINTS.laptop),
  laptopL: customMediaQuery(BREAKPOINTS.laptopL),
}
