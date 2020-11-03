import React from 'react'
import BlogHeader from '@/components/BlogHeader'
import Footer from '@/components/Footer'
import { BlogHeaderProps } from '@/types'

interface Props {
  header: BlogHeaderProps
}

const BlogLayout: React.FC<Props> = ({ header, children }) => {
  return (
    <React.Fragment>
      <BlogHeader {...header} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default BlogLayout
