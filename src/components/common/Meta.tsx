import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BLOG_TITLE } from '@/constants'

export type MetaProps = {
  title: string
  description: string
}

const Meta: React.FC<MetaProps> = ({ title, description }: MetaProps) => {
  const ogpImagePath = '/ogp.png'
  const router = useRouter()
  const currentPath = window.location.host + router.pathname
  return (
    <Head>
      <title key="title">{BLOG_TITLE}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={currentPath} />
      <meta property="og:image" content={ogpImagePath} />
      <meta property="og:site_name" content={BLOG_TITLE} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@arwtyxouymz" />
      <meta name="twitter:url" content={currentPath} />
      <meta name="twitter:image" content={ogpImagePath} />
    </Head>
  )
}

export default Meta
