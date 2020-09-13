import React from 'react'
import NavigationBar from '../molecules/NavigationBar'
import SiteTitle from '../molecules/SiteTitle'
import styled from 'styled-components'
import { media } from '../_constants'

const Header: React.FC = () => {
  const siteTitle = 'One Step Forward'
  return (
    <StyledHeader>
      <NavigationBar navItems={['Home', 'About', 'Blog']} />
      <SiteTitle title={siteTitle} subtitle="This is subtitle" />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  background: no-repeat center/cover url('/cover.jpg');
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet} {
    height: 60vh;
  }
`
