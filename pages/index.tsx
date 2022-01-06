import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import GlobalContext from '../context/GlobalContext'

const Start = dynamic(() => import('../shared/start'))
const Experience = dynamic(() => import('../shared/experience'))
const Confirm = dynamic(() => import('../shared/confirm'))
const Inform = dynamic(() => import('../shared/inform'))

const Home: NextPage = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <>
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
    </>
  )
}

export default Home
