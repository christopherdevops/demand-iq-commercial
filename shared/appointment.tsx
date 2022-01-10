import React from 'react'
import GlobalContext from '../context/GlobalContext'
import { Box, Button, Divider, TextField, Theme, Typography } from '@mui/material'
import DIQHeader from '../components/DIQHeader'
import DIQLiveHelp from '../components/DIQLiveHelp'
import DIQButton from '../components/DIQButton'
import DIQStaticDatePicker from '../components/DIQStaticDatePicker'
import { makeStyles } from '@mui/styles'
import { setValues } from '../api/me'

const useStyles = makeStyles((theme: Theme) => ({
  Button: {
    border: '1px solid white',
    color: 'white',

    width: '150px',

    fontSize: '18px',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.primary.main,
    },
  },

  ButtonBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    '& *': {
      [theme.breakpoints.down('sm')]: {
        marginTop: '16px',
      },
    },
  },

  Divider: {
    border: '1px solid #ffffff33',
    margin: '0 64px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const Appointment = () => {
  const gContext = React.useContext(GlobalContext)
  const classes = useStyles()
  const [appointDate, setAppointDate] = React.useState<Date | null>(new Date())

  const handleConfirmBtnClick = () => {
    setValues({ step: gContext.step + 1 })
    gContext.setStep((prev) => prev + 1)
  }

  return (
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
        <Box width={{ xs: 0.9, sm: 0.9, md: 0.6 }} height={1} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
            When’s a good time to chat more about your project and ensure we have all of the details?
          </Typography>

          <Box
            width={1}
            py={6}
            display='flex'
            flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}
            justifyContent='center'
          >
            <DIQStaticDatePicker
              displayStaticWrapperAs='desktop'
              openTo='day'
              orientation='portrait'
              value={appointDate}
              onChange={(value) => {
                setAppointDate(value)
              }}
              renderInput={(params) => <TextField {...params} />}
            />

            <Divider orientation='vertical' className={classes.Divider} />

            <Box className={classes.ButtonBox}>
              <Button className={classes.Button}>8:00 am</Button>

              <Button className={classes.Button}>9:00 am</Button>

              <Button className={classes.Button}>10:00 am</Button>

              <Button className={classes.Button}>11:00 am</Button>

              <Button className={classes.Button}>12:00 am</Button>
            </Box>
          </Box>

          <DIQButton onClick={handleConfirmBtnClick}>Confirm Appointment</DIQButton>
        </Box>
      </Box>

      <DIQLiveHelp />
    </Box>
  )
}

export default Appointment
