import React from 'react'
import { StaticDatePicker, StaticDatePickerProps, PickersDay, PickersDayProps } from '@mui/lab'
import { styled } from '@mui/styles'
import { Theme } from '@mui/material'

const DIQPickersDay = styled(PickersDay)((theme: Theme) => ({
  fontSize: '14px',
  fontWeight: 500,
}))

const DIQStaticDatePicker = (props: StaticDatePickerProps<Date | null>) => {
  const { ...mainProps } = props

  const renderDay = (date: Date, selectedDates: Array<Date | null>, pickersDayProps: PickersDayProps<Date>) => {
    return <DIQPickersDay {...pickersDayProps} />
  }

  return <StaticDatePicker renderDay={renderDay} {...mainProps} />
}

export default DIQStaticDatePicker
