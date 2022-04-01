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
import img from '../public/home-background.jpg'
import Image from 'next/image'

export default function Home() {
  console.log('Hello')
  const matches = useMediaQuery('(max-width:768px)')
  return (
    <StyledHomepage>
      {/* <Image src={img} layout="intrinsic" /> */}
    </StyledHomepage>
  )
}
