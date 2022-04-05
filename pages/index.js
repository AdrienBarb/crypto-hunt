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
import { StyledHomepage } from '../styles/StyledHomepage'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { TiSocialInstagramCircular } from 'react-icons/ti'

export default function Home() {
  console.log('Hello')
  const matches = useMediaQuery('(max-width:768px)')
  return (
    <StyledHomepage>
      <div className="container">
        <div className="title">CRYPTO HUNT</div>
        <div className="sub-title">
          Join us! We share the most promising crypto projects every day.
        </div>
        <div className="link-wrapper">
          <Link href={'https://twitter.com/_CryptoHunt'}>
            <a target="_blank">
              <AiFillTwitterCircle size={32} color="white" />
            </a>
          </Link>
          <Link href={'https://t.me/cryptohuntannouncement'}>
            <a target="_blank">
              <BsTelegram size={28} color="white" />
            </a>
          </Link>
          <Link href={'https://www.instagram.com/_cryptohunt/'}>
            <a target="_blank">
              <TiSocialInstagramCircular size={36} color="white" />
            </a>
          </Link>
        </div>
      </div>
    </StyledHomepage>
  )
}
