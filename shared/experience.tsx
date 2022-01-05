import React from 'react'
import { Button, Typography } from '@mui/material'
import GlobalContext from '../context/GlobalContext'

const Experience = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <>
      <Typography variant="h1">Experience</Typography>

      <Button onClick={()=> gContext.setStep(0)}>Back</Button>
    </>
  )
}

export default Experience
