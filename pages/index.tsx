import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import GlobalContext from '../context/GlobalContext'

const Start = dynamic(() => import('../shared/start'))
const Experience = dynamic(() => import('../shared/experience'))
const Confirm = dynamic(() => import('../shared/confirm'))
const Inform = dynamic(() => import('../shared/inform'))
const Checking = dynamic(() => import('../shared/checking'))
const Report = dynamic(() => import('../shared/report'))
const Detail = dynamic(() => import('../shared/detail'))
const Contact = dynamic(() => import('../shared/contact'))
const Appointment = dynamic(() => import('../shared/appointment'))
const Bill = dynamic(() => import('../shared/bill'))

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
        <Checking />
      )}

      {gContext.step === 5 && (
        <Report />
      )}

      {gContext.step === 6 && (
        <Detail />
      )}

      {gContext.step === 7 && (
        <Contact />
      )}

      {gContext.step === 8 && (
        <Appointment />
      )}

      {gContext.step === 9 && (
        <Bill />
      )}
    </>
  )
}

export default Home
