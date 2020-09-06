import styled from 'styled-components'

const PText = styled.p<{ color?: string }>`
  color: ${({ color }) => color};
`

export default PText
