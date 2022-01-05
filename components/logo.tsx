import React from 'react'
import { Box, Typography } from '@mui/material'

const Logo = () => {
  return (
    <Box display='flex' alignItems='center' width='160px' justifyContent='space-between'>
      <img alt="Solar Company" src="logo.png" width='40px' height='40px' />
      <Typography
        variant='body1'
        style={{ fontSize: '14px', lineHeight: '16px', fontWeight: '900' }}
      >
        Solar Company
      </Typography>
    </Box>
  )
}

export default Logo
