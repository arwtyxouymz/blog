import React from 'react'
import styled from 'styled-components'
import { BLACK20, BLACK60 } from '../_constants'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p className="copyright">© 2020 arwtyouymz / Ryutaro Matsumoto</p>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${BLACK20};
  color: ${BLACK60};
  padding: 3px;
  text-align: center;
`
