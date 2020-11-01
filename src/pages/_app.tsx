import React from 'react'
import { AppProps } from 'next/app'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '@/styles/prism.theme.css'
import '@/styles/globals.css'
import 'normalize.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
