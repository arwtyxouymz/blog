import React from 'react'
import styled from 'styled-components'
import { MQ } from '@/constants'

type FooterProps = Partial<{
  bgColor: string
  fontColor: string
}>

const StyledFooter = styled.footer<FooterProps>`
  width: 100%;
  text-align: center;
  background-color: ${({ bgColor }) => bgColor || '#F8F8F8'};
  color: ${({ color }) => color || '#ADADAD'};
  line-height: 3;
`

const Copyright = styled.p`
  font-size: 18px;
  ${MQ.tablet} {
    font-size: 15px;
  }
  ${MQ.mobileM} {
    font-size: 13px;
  }
`

const Footer: React.FC = () => {
  const year = new Date().toLocaleString('en-US', {
    year: 'numeric',
    timeZone: 'Asia/Tokyo',
  })

  return (
    <StyledFooter>
      <Copyright>© {year} arwtyxouymz / Ryutaro Matsumoto</Copyright>
    </StyledFooter>
  )
}

export default Footer
