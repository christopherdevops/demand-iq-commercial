import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import DIQHeader from '../components/DIQHeader'
import GlobalContext from '../context/GlobalContext'
import CusttomButton from '../components/custom-button'

const Contact = () => {
  const gContext = React.useContext(GlobalContext)

  return (
    <>
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
          <Box
            width={{ xs: 0.7, sm: 0.6, md: 0.5, lg: 0.4, xl: 0.3 }}
            height={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color="white" sx={{ fontWeight: 700, mt: 10.5, mb: 8 }}>
              How do we get in touch with you about finalizing your solar quote?
            </Typography>

            <Box width={1}>
              <Box
                mb={4}
                display="flex"
                flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
              >
                <TextField label="First name" sx={{ width: 1, mb: { xs: 4, sm: 4, md: 0 }, mr: { xs: 0, sm: 0, md: 3 } }} />

                <TextField label="Last name" sx={{ width: 1 }} />
              </Box>

              <TextField label="Company Name" sx={{ width: 1, mb: 4 }} />

              <TextField label="Email" sx={{ width: 1, mb: 4 }} />

              <TextField label="Phone" sx={{ width: 1, mb: 4 }} />
            </Box>

            <CusttomButton
              kind="secondary"
              sx={{ width: 'fit-content', mt: 3 }}
              onClick={() => gContext.setStep((prev) => prev + 1)}
            >
              Let's Chart!
            </CusttomButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Contact
