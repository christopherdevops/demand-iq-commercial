import React from 'react'
import GlobalContext from '../context/GlobalContext'
import { Box, Button, Typography } from '@mui/material'
import DIQHeader from '../components/DIQHeader'

const Appointment = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <Box
      width={1}
      height="100vh"
      display="flex"
      flexDirection="column"
      sx={{ minWidth: 200 }}
    >
      <DIQHeader />

      <Box
        width={1}
        bgcolor="primary.main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        flex="1 1 0"
      >
        <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
          <Typography variant="h5" color="white">Appointment</Typography>
        </Box>

        <Box display="flex">
          <Button variant="contained" onClick={() => gContext.setStep((prev) => prev - 1)}>Back</Button>
          <Button variant="contained" onClick={() => gContext.setStep((prev) => prev + 1)}>Next</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Appointment
