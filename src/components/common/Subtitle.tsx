import styled from 'styled-components'
import { MQ } from '@/constants'

const Subtitle = styled.p`
  color: white;
  margin: 0 auto;
  font-size: 20px;
  ${MQ.mobileL} {
    font-size: 16px;
  }
`

export default Subtitle
