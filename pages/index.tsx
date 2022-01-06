import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import GlobalContext from '../context/GlobalContext'

const Start = dynamic(() => import('../shared/start'))
const Experience = dynamic(() => import('../shared/experience'))
const Confirm = dynamic(() => import('../shared/confirm'))
const Inform = dynamic(() => import('../shared/inform'))
const Contact = dynamic(() => import('../shared/contact'))

const Home: NextPage = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <>
      <Head>
        <title>DIQ Commercial</title>
        <meta name="description" content="Demand IQ For Commercial Solar" />
      </Head>

      {gContext.step === 0 && (
        <Start />
      )}

      {gContext.step === 1 && (
        <Experience />
      )}

      {gContext.step === 2 && (
        <Confirm />
      )}

      {gContext.step === 3 && (
        <Inform />
      )}

      {gContext.step === 4 && (
        <Contact />
      )}
    </>
  )
}

export default Home
