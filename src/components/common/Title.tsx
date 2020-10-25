import styled from 'styled-components'
import { MQ } from '@/constants'

const Title = styled.h1`
  color: white;
  font-size: 70px;
  margin: 0.1em auto;
  ${MQ.tablet} {
    font-size: 60px;
  }
  ${MQ.mobileL} {
    font-size: 45px;
  }
`

export default Title
