import React from 'react'
import { Button, Typography } from '@mui/material'
import GlobalContext from '../context/GlobalContext'

const Experience = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <>
      <Typography variant="h1">Experience</Typography>

      <Button onClick={() => gContext.setStep((prev) => prev - 1)}>Back</Button>

      <Button onClick={() => gContext.setStep((prev) => prev + 1)}>Next</Button>
    </>
  )
}

export default Experience
