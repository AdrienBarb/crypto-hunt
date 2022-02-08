import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, StyledLayout } from '../styles/globalStyles'
import Header from './Header'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'


const lightTheme = {
  background: '#F2ECDE',
  text: '#1E5871',
  gray: '#595E5F',
}

const Layout = ({ children, state, closeSnackbar }) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    closeSnackbar()
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <StyledLayout>{children}</StyledLayout>
      <Snackbar
        open={state.snackBarsReducers.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={state.snackBarsReducers.type}
          sx={{ width: '100%' }}
        >
          {state.snackBarsReducers.textMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  )
}

export default Layout
