import React from 'react'
import Meta, { MetaProps } from '@/components/common/Meta'
import NavigationBar from '@/components/common/NavigationBar'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-image: url('/cover.jpg');
  background-size: cover;
  background-position: center;
`

const HeaderTemplate: React.FC<MetaProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <React.Fragment>
      <Meta title={title} description={description} />
      <StyledHeader>
        <NavigationBar />
        {children}
      </StyledHeader>
    </React.Fragment>
  )
}

export default HeaderTemplate
