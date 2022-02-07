import { Provider } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import store from '../store/index'

import CurrentUser from '../connects/CurrentUser'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CurrentUser />
      <Component {...pageProps} />
    </Provider>
  )
}
