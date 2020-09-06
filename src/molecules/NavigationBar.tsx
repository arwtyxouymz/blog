import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { WHITE } from '../_constants'

interface Props {
  leftTitle?: string
  navItems: string[]
}

const NavigationBar: React.FC<Props> = ({ leftTitle, navItems }: Props) => {
  return (
    <Nav>
      {leftTitle && <H2>{leftTitle}</H2>}
      <Ul>
        {navItems.map((item) => (
          <Li key={item}>
            <Link href={'/' + item.toLowerCase()}>
              <a>{item}</a>
            </Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default NavigationBar

const Nav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  margin: 0 auto;
  color: ${WHITE};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const H2 = styled.h2`
  margin: 0;
  padding: 15px;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`
const Li = styled.li`
  padding: 20px;
`
