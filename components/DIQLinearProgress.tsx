import React from 'react'
import { LinearProgress, LinearProgressProps, linearProgressClasses, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const defaultStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const secondaryStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#ec008c',
    },
  },
}))

interface BorderLinearProgressProps extends LinearProgressProps {
  kind?: 'default' | 'primary' | 'secondary' | null
}

const BorderLinearProgress = ({ className, kind, ...props }: BorderLinearProgressProps) => {
  const defaultClasses = defaultStyles()
  const secondaryClasses = secondaryStyles()

  let classes = defaultClasses

  switch (kind) {
    case 'secondary':
      classes = secondaryClasses
      break

    default:
  }
  return <LinearProgress className={clsx(classes.root, className)} {...props} />
}

export default BorderLinearProgress
