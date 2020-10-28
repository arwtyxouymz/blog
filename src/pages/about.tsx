import React from 'react'
import styled from 'styled-components'
import Layout from '@/templates/Layout'
import { MQ } from '@/constants'

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5% 5%;
  & > section:first-child {
    align-self: flex-start;
  }
  & > section:last-child {
    flex: 1;
  }
  ${MQ.mobileL} {
    margin: 10% auto;
  }
`

const Section = styled.section`
  text-align: center;

  ${MQ.tablet} {
    max-width: 500px;
  }
`

const CircleImage = styled.img`
  border-radius: 50%;
  width: 400px;
  height: 400px;

  ${MQ.laptop} {
    width: 35vw;
    height: 35vw;
  }

  ${MQ.mobileL} {
    width: 60vw;
    height: 60vw;
  }
`

const AccountName = styled.h2`
  text-align: center;
  font-size: 40px;

  ${MQ.laptop} {
    font-size: 35px;
  }

  ${MQ.tablet} {
    font-size: 27px;
  }
`

const IconContainer = styled.div``

const DescriptionWrapper = styled.div`
  width: 80%;
  text-align: left;
  margin: 0 auto;
  font-size: 25px;

  ${MQ.laptop} {
    font-size: 22px;
  }
  ${MQ.tablet} {
    width: 70%;
    font-size: 18px;
  }
  ${MQ.mobileL} {
    width: 80%;
    font-size: 1em;
  }
`

const SkillSet = styled.ul`
  line-height: 1.5em;

  ${MQ.mobileS} {
    padding-inline-start: 20px;
  }
`

const About: React.FC = () => {
  return (
    <Layout>
      <Flex>
        <Section>
          <CircleImage src="/profile.png" />
        </Section>
        <Section>
          <AccountName>@arwtyxoutmz</AccountName>
          <IconContainer></IconContainer>
          <DescriptionWrapper>
            <p>
              都内でエンジニアをしています。学生時代メインはロボティクスでたまにWeb系のインターンとかしていました。
              仕事ではバックエンドを触っていますが、フロントも書きます。Vue.jsよりReactが好き。
              最近はRustを勉強しながらスプラトゥーンにハマってます。
            </p>
            <h4>Skillset</h4>
            <SkillSet>
              <li>Typescript/Python/Rust</li>
              <li>React/Vue.js/Next.js/Express.js</li>
              <li>MySQL/Postgresql</li>
              <li>Neovim/AWS/Docker/ROS</li>
            </SkillSet>
          </DescriptionWrapper>
        </Section>
      </Flex>
    </Layout>
  )
}

export default About
