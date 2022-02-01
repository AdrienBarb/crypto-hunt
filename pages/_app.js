import { Provider } from 'react-redux'
import React, { useEffect, useState } from 'react'

import store from '../store/index'
import { auth } from '../firebase/clientApp'
import { onAuthStateChanged } from 'firebase/auth'
import CurrentUser from '../connects/CurrentUser'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CurrentUser />
      <Component {...pageProps} />
    </Provider>
  )
}
