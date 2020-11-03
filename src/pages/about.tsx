import React from 'react'
import styled from 'styled-components'
import Layout from '@/templates/Layout'
import IconLink from '@/components/common/IconLink'
import TwitterIcon from '@/components/common/TwitterIcon'
import GithubIcon from '@/components/common/GithubIcon'
import { MQ } from '@/constants'

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5% 10%;
  & > section:first-child {
    align-self: flex-start;
  }
  & > section:last-child {
    flex: 1;
  }
  ${MQ.laptop} {
    margin: 5% 5%;
  }
  ${MQ.mobileL} {
    margin: 10% auto;
  }
`

const Section = styled.section`
  text-align: center;
`

const CircleImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;

  ${MQ.laptop} {
    width: 30vw;
    height: 30vw;
  }
  ${MQ.tablet} {
    width: 350px;
    height: 350px;
  }
  ${MQ.mobileL} {
    width: 60vw;
    height: 60vw;
  }
`

const AccountName = styled.h2`
  text-align: center;
  font-size: 30px;

  ${MQ.laptop} {
    font-size: 27px;
  }

  ${MQ.tablet} {
    font-size: 25px;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0 10px;
    width: 40px;
    height: 40px;

    ${MQ.mobileL} {
      width: 10vw;
      height: 10vw;
    }
  }
`

const DescriptionWrapper = styled.div`
  min-width: 50vw;
  width: 80%;
  text-align: left;
  margin: 0 auto;

  ${MQ.tablet} {
    width: 70%;
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
    <Layout path="/about">
      <Flex>
        <Section>
          <CircleImage src="/profile.png" />
        </Section>
        <Section>
          <AccountName>@arwtyxoutmz</AccountName>
          <IconContainer>
            <IconLink url="https://twitter.com/arwtyxouymz">
              <TwitterIcon />
            </IconLink>
            <IconLink url="https://github.com/arwtyxouymz">
              <GithubIcon />
            </IconLink>
          </IconContainer>
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
