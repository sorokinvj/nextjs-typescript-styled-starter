import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const IndexPage: React.FC<NextPage> = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Pool frontend</h1>
      </main>
    </div>
  )
}

export default IndexPage
