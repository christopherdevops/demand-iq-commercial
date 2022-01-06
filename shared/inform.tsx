import { Box, Button, MenuItem, Select, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import DIQHeader from '../components/DIQHeader'
import GlobalContext from '../context/GlobalContext'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

const Inform = () => {
  const gContext = React.useContext(GlobalContext)

  const isColumn = useMediaQuery('(max-width: 400px)')

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
            sx={{ gap: 2 }}
          >
            <Typography variant="h5" color="white" pb={1.5} sx={{ fontWeight: 700 }}>Great! This is what we gathered.</Typography>

            <Box display="flex" flexDirection={isColumn ? 'column' : 'row' } alignItems={!isColumn ? 'center' : 'flex-start' } sx={{ gap: 1 }}>
              <Typography variant="body1" color="white" sx={{ width: 150, fontWeight: 700 }}>Square Footage</Typography>

              <TextField variant="outlined" color="success" value="1028"/>
            </Box>

            <Box display="flex" flexDirection={isColumn ? 'column' : 'row' } alignItems={!isColumn ? 'center' : 'flex-start' } sx={{ gap: 1 }}>
              <Typography variant="body1" color="white" sx={{ width: 150, fontWeight: 700 }}>Business type</Typography>

              <Select
                value={10}
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Inform
