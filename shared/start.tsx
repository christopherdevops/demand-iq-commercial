import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Logo from '../components/logo'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { makeStyles } from '@mui/styles'
import CustomButton from '../components/custom-button'
import GlobalContext from '../context/GlobalContext'

const useStyles = makeStyles({
  poweredBy: {
    marginLeft: '0.5rem',
    height: '1rem'
  }
})

const Start = () => {
  const gContext = React.useContext(GlobalContext)
  const classes = useStyles()
  const [learnMore, setLearnMore] = React.useState(false)
  React.useEffect(() => {
    if (learnMore) { window.scrollTo(0, document.body.scrollHeight) }
  }, [learnMore])

  return (
    <>
      <Box
        width={1}
        minWidth="600px"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box width={1} display="flex" flex="1 1 0">
          <Box width={{ md: 0.6, sm: 1, xs: 1 }} display="flex" flexDirection="column">
            <Box padding="20px 50px">
              <Logo />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              flex="1 1 0"
              pt={0}
              pb={14}
              pl={{ md: 14, sm: 7, xs: 7 }}
              pr={{ md: 0, sm: 7, xs: 7 }}
            >
              <Typography style={{fontSize: '64px', lineHeight: '100%', fontWeight: 'bold' }} pb={4}>
                Get an instant solar feasability analysis using Google
                satellites.
              </Typography>

              <Typography style={{ fontSize: '24px', lineHeight: '150%', fontWeight: 'bold' }} pb={4}>
                Discover your properties solar potential in seconds.
              </Typography>

              <Box width="80%">
                <Box display="flex" alignItems="center" pb={2}>
                  <HelpOutlineIcon width='20px' height='20px' />
                  <Typography style={{ fontSize: '12px' }} pl={1}>
                    Why we need your address
                  </Typography>
                </Box>

                <Box display="flex">
                  <Box pr={2.5} flex="1 1 0">
                    <TextField
                      label="Property address"
                      style={{ width: '100%' }}
                    />
                  </Box>
                  <CustomButton
                    textTransform='none'
                    variant='contained'
                    onClick={() => gContext.setStep(1)}
                  >
                    Start analysis
                  </CustomButton>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  mt={2}
                  alignItems="center"
                >
                  <Typography variant="caption" style={{ color: '#666666' }}>
                    Powered by
                  </Typography>
                  <img
                    className={classes.poweredBy}
                    src="/google-sunroof.png"
                    alt="Google Project Sunroof"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={0.4} display={{ md: 'flex', sm: 'none', xs: 'none' }}>
            <img src="/bg.png" style={{ width: '100%', height: '100%' }} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" width="100%" pb={4}>
          <Button
            style={{
              display: 'flex',
              fontSize: '12px',
              lineHeight: '16px',
              flexDirection: 'column',
              color: '#333',
              letterSpacing: '0.4px',
              textTransform: 'none'
            }}
            onClick={(value) => setLearnMore((prev) => !prev)}
          >
            {learnMore && <ArrowUpwardIcon width='16px' height='16px' />}
            <span style={{ paddingTop: '8px', paddingBottom: '8px' }}>Learn More</span>
            {!learnMore && <ArrowDownwardIcon width='16px' height='16px' />}
          </Button>
        </Box>
      </Box>

      {learnMore && <Box
        width={1}
        display="flex"
        flexWrap="wrap"
        pt={6}
        pr={12}
        pb={12}
        pl={12}
        bgcolor="#f1f0fe"
      >
        <Box width={{ md: 0.5, sm: 1, xs: 1 }} p={1} pb={6}>
          <Typography style={{ fontSize: '36px', lineHeight: '100%', fontWeight: 900 }} pb={5}>
            How solar works.
          </Typography>
          <Typography style={{ fontSize: '16px', lineHeight: '150%', fontWeight: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio
            ex, placerat et magna in, cursus imperdiet leo. Donec malesuada erat
            tempus sem ullamcorper, eget tincidunt neque rhoncus. Praesent
            vehicula ut risus et vehicula. Nam eget tortor elit. Proin tristique
            mi ex, at tempus mi fermentum at.
          </Typography>
        </Box>
        <Box width={{ md: 0.5, sm: 1, xs: 1 }} p={1} pb={6}>
          <Typography style={{ fontSize: '36px', lineHeight: '100%', fontWeight: 900 }} pb={5}>
            Incentives & benefits.
          </Typography>
          <Typography style={{ fontSize: '16px', lineHeight: '150%', fontWeight: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio
            ex, placerat et magna in, cursus imperdiet leo. Donec malesuada erat
            tempus sem ullamcorper, eget tincidunt neque rhoncus. Praesent
            vehicula ut risus et vehicula. Nam eget tortor elit. Proin tristique
            mi ex, at tempus mi fermentum at.
          </Typography>
        </Box>
      </Box>}
    </>
  )
}

export default Start
