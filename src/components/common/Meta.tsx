import React from 'react'
import Head from 'next/head'
import { HOST, BLOG_TITLE } from '@/constants'

export type MetaProps = {
  title: string
  description: string
  path?: string
}

const Meta: React.FC<MetaProps> = ({ title, description, path }: MetaProps) => {
  const ogpImagePath = '/ogp.png'
  const pageUrl = `${HOST}${path || ''}`
  return (
    <Head>
      <title key="title">{BLOG_TITLE}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogpImagePath} />
      <meta property="og:site_name" content={BLOG_TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@arwtyxouymz" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:image" content={ogpImagePath} />
    </Head>
  )
}

export default Meta
