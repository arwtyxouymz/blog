import styled from 'styled-components'

const H2Text = styled.h2<{ color?: string }>`
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`

export default H2Text
