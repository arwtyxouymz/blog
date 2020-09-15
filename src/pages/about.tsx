import React from 'react'
import Layout from '../templates/Layout'
import PageHeader from '../molecules/PageHeader'

const About: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        pageTitle="About"
        pageDescription="SNSとか気軽にフォローしてください"
      />
    </Layout>
  )
}

export default About
