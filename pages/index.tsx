import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  h1 {
    color: darkblue;
  }
`

const IndexPage: React.FC<NextPage> = () => {
  return (
    <Wrapper>
      <Head>
        <title>Next JS Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to NextJS app</h1>
      </main>
    </Wrapper>
  )
}

export default IndexPage
