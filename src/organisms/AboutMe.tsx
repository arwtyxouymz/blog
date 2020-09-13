import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../atoms/containers/FlexContainer'
import PText from '../atoms/texts/PText'
import { BLACK20, BLACK60 } from '../_constants'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FlexContainer>
        <StyledImage src="/profile.png" alt="Profile Image" />
        <div>
          <PText>arwtyouymz</PText>
          <PText>今後もっと良い感じになりたい</PText>
          <PText>
            Neovimmer <br />
            TypeScript/Rust/Python <br />
            React/Next.js/Express.js/Next.js <br />
            AWS/Docker/GraphQL
          </PText>
        </div>
      </FlexContainer>
      <p className="copyright">© 2020 arwtyouymz / Ryutaro Matsumoto</p>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${BLACK60};
  color: ${BLACK20};
  padding: 15px 30px;
`

const StyledImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`
