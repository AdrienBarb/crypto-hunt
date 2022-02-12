import Head from 'next/head'
import Link from 'next/link'
import Layout from '../connects/Layout'
import Colors from '../constants/Colors'
import { VerticalDivider } from '../styles/StyledDivider'
import {
  CenterContainer,
  ScreenContainer,
} from '../styles/StyledScreenContainer'
import { StyledText } from '../styles/StyledText'
import { StyledHomepageScreen } from '../styles/StyledHomepageScreen'

export default function Home() {
  return (
    <Layout>
      <ScreenContainer>
        <StyledHomepageScreen>
          <StyledText color={Colors.black} h1 bold karla>
            FIND
          </StyledText>
          <VerticalDivider height="20px" color={Colors.yellow} />
          <StyledText color={Colors.black} h1 bold karla>
            SHARE
          </StyledText>
          <VerticalDivider height="20px" color={Colors.yellow} />
          <StyledText color={Colors.black} h1 bold karla>
            INVEST
          </StyledText>
        </StyledHomepageScreen>
      </ScreenContainer>
    </Layout>
  )
}
