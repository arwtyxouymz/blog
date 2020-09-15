import styled from 'styled-components'

interface Props {
  color?: string
  margin?: string
  padding?: string
}

const H2Text = styled.h2<Props>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
`

export default H2Text
