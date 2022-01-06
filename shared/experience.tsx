import React from 'react'
import { Box, Button, Theme, Typography } from '@mui/material'
import DIQHeader from '../components/DIQHeader'
import { createStyles, makeStyles } from '@mui/styles'
import GlobalContext from '../context/GlobalContext'

const useStyles = makeStyles((theme : Theme) => createStyles({
  button: {
    border: '2px solid white',
    color: 'white',
    width: '150px',
    height: '120px',
    margin: '32px',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.primary.main
    }
  }
}))

const Experience = () => {
  const gContext = React.useContext(GlobalContext)
  const classes = useStyles()

  const handleBtnClick = () => {
    gContext.setStep((prev) => prev + 1)
  }

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
          height={1}
          bgcolor="primary.main"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            width={0.7}
            height={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color="white" py={8} sx={{ fontWeight: 700 }}>
              Tell us a bit more about your role so we can personalize your
              experience...
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: 1, gap: 2 }}>
              <Button className={classes.button} onClick={handleBtnClick}>Owner</Button>

              <Button className={classes.button} onClick={handleBtnClick}>Architect</Button>

              <Button className={classes.button} onClick={handleBtnClick}>Consultant</Button>

              <Button className={classes.button} onClick={handleBtnClick}>Facilities Manager</Button>

              <Button className={classes.button} onClick={handleBtnClick}>Other</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Experience
