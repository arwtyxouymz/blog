import React from 'react'
import Header, { HeaderProps } from '@/components/Header'
import Footer from '@/components/Footer'

const Layout: React.FC<HeaderProps> = ({ path, children }) => {
  return (
    <React.Fragment>
      <Header path={path} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
