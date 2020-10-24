import React from 'react'
import Head from 'next/head'
import { BLOG_TITLE } from '../_constants'

interface Props {
  title: string
  description: string
  url: string
}

const OgpMeta: React.FC<Props> = ({ title, description, url }: Props) => {
  const ogpImagePath = '/ogp.png'
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogpImagePath} />
      <meta property="og:site_name" content={BLOG_TITLE} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@arwtyxouymz" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={ogpImagePath} />
    </Head>
  )
}

export default OgpMeta
