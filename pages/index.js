import Head from 'next/head'
import Link from 'next/link'
import Layout from '../connects/Layout'
import Colors from '../constants/Colors'
import { HorizontalDivider, VerticalDivider } from '../styles/StyledDivider'
import {
  CenterContainer,
  ScreenContainer,
} from '../styles/StyledScreenContainer'
import { StyledText } from '../styles/StyledText'
import { StyledHomepageScreen } from '../styles/StyledHomepageScreen'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Home() {
  const matches = useMediaQuery('(max-width:768px)')
  return (
    <Layout>
      <StyledHomepageScreen>
        <StyledText color={Colors.black} h1 bold karla>
          FIND
        </StyledText>
        {matches ? (
          <HorizontalDivider width="20px" color={Colors.yellow} />
        ) : (
          <VerticalDivider height="20px" color={Colors.yellow} />
        )}
        <StyledText color={Colors.black} h1 bold karla>
          SHARE
        </StyledText>
        {matches ? (
          <HorizontalDivider width="20px" color={Colors.yellow} />
        ) : (
          <VerticalDivider height="20px" color={Colors.yellow} />
        )}
        <StyledText color={Colors.black} h1 bold karla>
          INVEST
        </StyledText>
      </StyledHomepageScreen>
    </Layout>
  )
}
