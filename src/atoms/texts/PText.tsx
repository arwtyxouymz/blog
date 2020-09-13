import styled from 'styled-components'

const PText = styled.p<{ color?: string }>`
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`

export default PText
