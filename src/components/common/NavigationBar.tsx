import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { MQ } from '@/constants'

const Nav = styled.nav`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 3vw;
`

const ListItem = styled.li<{ selected: boolean }>`
  color: white;
  background-color: ${({ selected }) => selected && 'rgba(255, 255, 255, 0.1)'};
  list-style: none;
  display: inline-block;
  padding: 0.5em 1.5vw;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${MQ.tablet} {
    padding: 0.5em 0.75em;
  }
`

const NavigationBar: React.FC = () => {
  const router = useRouter()
  return (
    <Nav>
      <ListItem selected={router.pathname === '/'}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </ListItem>
      <ListItem selected={router.pathname === '/about'}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ListItem>
    </Nav>
  )
}

export default NavigationBar
