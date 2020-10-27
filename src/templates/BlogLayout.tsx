import React from 'react'
import BlogHeader from '@/components/BlogHeader'
import Footer from '@/components/Footer'

const testData = {
  title: 'Neovimの設定を晒してみる',
  description: '自分が普段使っているNeovimの設定を解説します',
  postedAt: '2020/09/14',
  tags: ['Neovim', 'Editor', 'VimScript', 'Test'],
}

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
