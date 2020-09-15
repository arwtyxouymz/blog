import styled from 'styled-components'

interface Props {
  size: number
  margin?: string
}

const CircleImage = styled.img<Props>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-radius: 50%;
`

export default CircleImage
