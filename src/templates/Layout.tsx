import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* interface Props extends HeaderProps {                                        */
/*   children: React.ReactNode                                                  */
/* }                                                                            */

/* const Layout: React.FC<Props> = ({                                           */
/*   children,                                                                  */
/*   coverTitle,                                                                */
/*   coverDescription,                                                          */
/* }: Props) => {                                                               */
/*   return (                                                                   */
/*     <div>                                                                    */
/*       <Head />                                                               */
/*       <Header coverTitle={coverTitle} coverDescription={coverDescription} /> */
/*       <main>{children}</main>                                                */
/*       <Footer />                                                             */
/*     </div>                                                                   */
/*   )                                                                          */
/* }                                                                            */

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
