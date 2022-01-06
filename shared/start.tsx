import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Logo from '../components/logo'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { makeStyles } from '@mui/styles'
import CustomButton from '../components/custom-button'
import GlobalContext from '../context/GlobalContext'
import LiveHelp from '../components/live-help'

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
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box width={1} height={0} display="flex" flex="1 1 0">
          <Box sx={{ width: { lg: 0.6, xs: 1 } }} display="flex" flexDirection="column">
            <Box padding="20px 50px">
              <Logo />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              flex="1 1 0"
              py={4}
              px={{ sm: 14, xs: 6 }}
            >
              <Typography sx={{ fontSize: { md: '64px', sm: '56px', xs: '48px' }, lineHeight: '100%', fontWeight: 'bold' }} pb={4}>
                Get an instant solar feasability analysis using Google
                satellites.
              </Typography>

              <Typography style={{ fontSize: '24px', lineHeight: '150%', fontWeight: 'bold' }} pb={4}>
                Discover your properties solar potential in seconds.
              </Typography>

              <Box display="grid" gap={2}>
                <Box display="flex" alignItems="center">
                  <HelpOutlineIcon width='20px' height='20px' />
                  <Typography style={{ fontSize: '12px' }} pl={1}>
                    Why we need your address
                  </Typography>
                </Box>

                <Box sx={{ display: { sm: 'flex', xs: 'grid' } }} gap={2}>
                  <Box flex="1 1 0" mr={{ sm: 2, xs: 0 }} height='48px' >
                    <TextField
                      label="Property address"
                      sx={{ width: 1, height: 1 }}
                    />
                  </Box>
                  <CustomButton
                    textTransform='none'
                    variant='contained'
                    sx={{ height: '48px' }}
                    onClick={() => gContext.setStep(1)}
                  >
                    Start analysis
                  </CustomButton>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
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
          <Box sx={{ width: { lg: 0.4, xs: 0 }, height: 1 }}>
            <img src="/bg.png" style={{ width: '100%', height: '100%' }} />
          </Box>
        </Box>

        <Button
          sx={{ color: '#33333399', display: 'flex', flexDirection: 'column', p: 2 }}
          onClick={() => setLearnMore(prev => !prev)}
        >
          {learnMore && <ArrowUpwardIcon />}
          <Typography fontSize={12} letterSpacing={0.4} my={1}>Learn More</Typography>
          {!learnMore && <ArrowDownwardIcon />}
        </Button>
      </Box>

      {learnMore && <Box
        width={1}
        display="flex"
        flexWrap="wrap"
        bgcolor="#f1f0fe"
        px={{ sm: 12, xs: 6 }}
        py={6}
      >
        <Box sx={{ width: { md: 0.5, xs: 1 } }} pb={5}>
          <Typography whiteSpace='nowrap' style={{ fontSize: '36px', lineHeight: '100%', fontWeight: 900}} pb={5}>
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
        <Box sx={{ width: { md: 0.5, xs: 1 } }} pb={5}>
          <Typography whiteSpace='nowrap' style={{ fontSize: '36px', lineHeight: '100%', fontWeight: 900 }} pb={5}>
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
