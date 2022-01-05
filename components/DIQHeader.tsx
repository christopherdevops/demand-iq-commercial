import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'

const DIQHeader = () => {
  const visibleText = useMediaQuery('(min-width: 270px)')

  return (
    <Box width={1} height={80} py={2.5} px={{ xs: 2.5, sm: 3.75, md: 6.25}} display="flex" alignItems="center">
      <img src="/logo.png" alt="Solar Company Logo" style={{ maxWidth: 40 }} />

      {visibleText && (
        <Typography variant="body1" sx={{ paddingLeft: 2.5, fontWeight: 900 }}>Solar Company</Typography>
      )}
    </Box>
  )
}

export default DIQHeader
