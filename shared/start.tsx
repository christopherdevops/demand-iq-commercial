import React from 'react'
import { Button, Typography } from '@mui/material'
import GlobalContext from '../context/GlobalContext'

const Start = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <>
      <Typography variant="h1">Start</Typography>

      <Button onClick={()=> gContext.setStep(1)}>Next</Button>
    </>
  )
}

export default Start
