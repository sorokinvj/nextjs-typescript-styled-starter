import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './globalStyles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
