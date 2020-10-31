import styled from 'styled-components'
import { MQ } from '@/constants'

const Tag = styled.span<{ color?: string }>`
  color: ${({ color }) => color || 'white'};
  background-color: transparent;
  border: 1px solid ${({ color }) => color || 'white'};
  border-radius: 999em;
  padding: 0.1em 1em;
  margin: 0 0.1em;
  font-size: 18px;
  ${MQ.tablet} {
    font-size: 15px;
  }
  ${MQ.mobileL} {
    font-size: 12px;
  }
`

export default Tag
