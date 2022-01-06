import React from 'react'
import { Button } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const LiveHelp = () => {
  return (
    <Button
      variant='contained'
      sx={{ width: '75px', height: '75px', borderRadius: '100%', padding: '2px', display: 'flex', flexDirection: 'column' }}
    >
      <SupportAgentIcon />
      <span style={{ fontSize: '11px', lineHeight: '13px', textTransform: 'none', marginTop: '4px' }}>
        Live Help
      </span>
    </Button>
  )
}

export default LiveHelp
