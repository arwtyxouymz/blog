import React from 'react'
import styled from 'styled-components'
import Layout from '../templates/Layout'
import PageHeader from '../molecules/PageHeader'
import CircleImage from '../atoms/elements/CircleImage'
import H3Text from '../atoms/texts/H3Text'
import PText from '../atoms/texts/PText'
import TagText from '../atoms/texts/TagText'
import FlexContainer from '../atoms/containers/FlexContainer'

const About: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        pageTitle="About"
        pageDescription="SNSとか気軽にフォローしてください"
      />

      <WrapperFlexContainer justify="center">
        <section>
          <CircleImage src="/profile.png" size={300} margin="15px" />
        </section>
        <Section>
          <H3Text>arwtyxouymz</H3Text>
          <HorizontalLine />
          <PText>都内でエンジニアをしています．</PText>
          <PText>
            学生時代メインはロボティクスでたまにWeb系のインターンとかしてました．
          </PText>
          <PText>
            フロントよりもバックエンドが好き． Vue.jsよりReactが好き．
          </PText>
          <PText>GoとRustで悩んでRustを選んだことは後悔してません．</PText>
          <h4>Skills</h4>
          <StyledUl>
            <li>Typescript / Rust / Python</li>
            <li>React / Vue.js / Next.js / Express.js</li>
            <li>PostgreSQL / MySQL</li>
            <li>Neovim / ROS / Docker / AWS</li>
          </StyledUl>
          <FlexContainer align="center" justify="space-evenly">
            <TagText color="#1DA1F2">Twitter</TagText>
            <TagText color="#3C5A99">Facebook</TagText>
            <TagText color="#CF2E92">Instagram</TagText>
            <TagText color="#24292e">GitHub</TagText>
            <TagText color="#55C500">Qiita</TagText>
          </FlexContainer>
        </Section>
      </WrapperFlexContainer>
    </Layout>
  )
}

export default About

const WrapperFlexContainer = styled(FlexContainer)`
  margin: 40px auto;
  width: 100%;
`

const HorizontalLine = styled.div`
  width: 150px;
  border: 0.5px solid;
  margin: 20px 0;
`

const Section = styled.section`
  width: 25%;
  margin: 0 20px;
`

const StyledUl = styled.ul`
  list-style: none;
  padding-inline-start: 20px;
`
