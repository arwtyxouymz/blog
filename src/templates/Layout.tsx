import React from 'react'
import Head from '../organisms/Head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
