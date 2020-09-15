import React from 'react'
import Head from '../organisms/Head'
import Header, { HeaderProps } from '../organisms/Header'
import Footer from '../organisms/Footer'

interface Props extends HeaderProps {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({
  children,
  coverTitle,
  coverDescription,
}: Props) => {
  return (
    <div>
      <Head />
      <Header coverTitle={coverTitle} coverDescription={coverDescription} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
