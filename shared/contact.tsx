import React from 'react'
import { Box, TextField, TextFieldProps, Typography } from '@mui/material'
import DIQHeader from '../components/DIQHeader'
import DIQLiveHelp from '../components/DIQLiveHelp'
import DIQTextField from '../components/DIQTextField'
import DIQButton from '../components/DIQButton'
import GlobalContext from '../context/GlobalContext'
import { setValues } from '../api/me'

const ContactTextField = ({ sx, ...props }: TextFieldProps) => (
  <DIQTextField {...props} sx={{ width: 1, mb: 4, ...sx }} />
)

const Contact = () => {
  const gContext = React.useContext(GlobalContext)

  const handleChartBtnClick = () => {
    setValues({ step: gContext.step + 1 })
    gContext.setStep((prev) => prev + 1)
  }

  return (
    <>
      <Box width={1} height='100vh' display='flex' flexDirection='column' sx={{ minWidth: 200 }}>
        <DIQHeader />

        <Box
          width={1}
          bgcolor='primary.main'
          display='flex'
          flexDirection='column'
          alignItems='center'
          flex='1 1 0'
          p={10.5}
        >
          <Box
            width={{ xs: 0.7, sm: 0.6, md: 0.5, lg: 0.4, xl: 0.35 }}
            height={1}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
              How do we get in touch with you about finalizing your solar quote?
            </Typography>

            <Box width={1} pt={8} pb={4}>
              <Box display='flex' flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}>
                <ContactTextField placeholder='First name' sx={{ mr: { xs: 0, sm: 0, md: 3 } }} />

                <ContactTextField placeholder='Last name' />
              </Box>

              <ContactTextField placeholder='Company name' />

              <ContactTextField placeholder='Email' />

              <ContactTextField placeholder='Phone' />
            </Box>

            <DIQButton sx={{ width: 'fit-content' }} onClick={handleChartBtnClick}>
              Let's Chart!
            </DIQButton>
          </Box>
        </Box>

        <DIQLiveHelp />
      </Box>
    </>
  )
}

export default Contact
