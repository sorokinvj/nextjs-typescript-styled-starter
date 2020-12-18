import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: lightgray;
`

const IndexPage: React.FC<NextPage> = () => {
  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Pool frontend</h1>
      </main>
    </Wrapper>
  )
}

export default IndexPage
