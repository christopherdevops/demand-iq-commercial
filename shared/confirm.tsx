import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DIQHeader from '../components/DIQHeader'
import GlobalContext from '../context/GlobalContext'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

const Confirm = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <>
      <Box width={1} height="100vh" display="flex" flexDirection="column" sx={{ minWidth: 200 }}>
        <DIQHeader />

        <Box width={1} display="flex" flexGrow={1}>
          <Box width={0.45} display={{ xs: 'none', md: 'block' }} flexGrow={1}>
            <img src="/blockmap.png" alt="Blockmap" width="100%" height="100%" style={{ objectFit: 'cover' }} />
          </Box>

          <Box
            width={0.55}
            px={{ xs: 4, sm: 6, md: 8, lg: 12 }}
            py={{ xs: 4, sm: 6, md: 8, lg: 10 }}
            display="flex"
            flexDirection="column"
            flexGrow={1}
            bgcolor='primary.main'
          >
            <Typography variant="h5" color="white" pb={3.5} sx={{ fontWeight: 700 }}>Here’s what we located.</Typography>

            <Box display="flex" sx={{ gap: 1 }}>
              <FmdGoodOutlinedIcon fontSize="medium" sx={{ color: 'white' }} />

              <Typography variant="body1" color="white" pb={1}>1028 North Ave. Seattle, WA 98335 has been located.</Typography>
            </Box>

            <Typography variant="h5" color="white" pb={4} sx={{ fontWeight: 700 }}>Does this appear to be the right rooftop?</Typography>

            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
              <Button variant="outlined" sx={{ bgcolor: 'white', minWidth: 150 }} onClick={() => gContext.setStep((prev) => prev - 1)}>No</Button>

              <Button variant="outlined" sx={{ bgcolor: 'white', minWidth: 150 }} onClick={() => gContext.setStep((prev) => prev + 1)}>Yes</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Confirm
