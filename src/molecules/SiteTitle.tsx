import React from 'react'
import styled from 'styled-components'
import H1Text from '../atoms/H1Text'
import PText from '../atoms/PText'
import { WHITE } from '../_constants'

interface Props {
  title: string
  subtitle: string
}

const SiteTitle: React.FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <Wrapper>
      <H1Text color={WHITE}>{title}</H1Text>
      <PText color={WHITE}>{subtitle}</PText>
    </Wrapper>
  )
}

export default SiteTitle

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
