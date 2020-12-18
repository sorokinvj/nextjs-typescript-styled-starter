import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: lightgray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`

export const theme = {
  colors: {
    primary: '#0070f3',
  },
}
