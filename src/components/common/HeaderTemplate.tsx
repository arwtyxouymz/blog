import React from 'react'
import NavigationBar from '@/components/common/NavigationBar'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-image: url('/cover.jpg');
  background-size: cover;
  background-position: center;
`

const HeaderTemplate: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <NavigationBar />
      {children}
    </StyledHeader>
  )
}

export default HeaderTemplate
