import React from 'react'
import BlogHeader from '@/components/BlogHeader'
import Footer from '@/components/Footer'

type Props = {
  title: string
  description: string
  postedAt: string
  tags: string[]
}

const BlogLayout: React.FC<Props> = ({
  title,
  description,
  postedAt,
  tags,
  children,
}) => {
  return (
    <React.Fragment>
      <BlogHeader
        title={title}
        description={description}
        postedAt={postedAt}
        tags={tags}
      />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default BlogLayout
