import React from 'react'
import NavigationBar from '../molecules/NavigationBar'
import SiteTitle from '../molecules/SiteTitle'
import styled from 'styled-components'
import { media } from '../_constants'

export interface HeaderProps {
  coverTitle?: string
  coverDescription?: string
}

const Header: React.FC<HeaderProps> = ({
  coverTitle,
  coverDescription,
}: HeaderProps) => {
  const siteTitle = 'One Step Forward'
  const siteSubtitle = 'This is subtitle'
  return (
    <StyledHeader>
      <NavigationBar
        leftTitle={coverTitle && siteTitle}
        navItems={['Home', 'About', 'Blog']}
      />
      <SiteTitle
        title={coverTitle ? coverTitle : siteTitle}
        subtitle={coverDescription ? coverDescription : siteSubtitle}
      />
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
