import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

interface Props extends ButtonProps {
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
}

const defaultStyles = makeStyles({
  root: {
    color: '#fff',
    boxShadow: 'none',

    borderRadius: '50px',
    padding: '12px 45px',

    fontWeight: '900',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.005em',
    textTransform: (props: Props) => props.textTransform ?? 'uppercase',

    '&:hover': {
      boxShadow: 'none'
    }
  }
})

const CusttomButton = ({ className, textTransform, ...props }: Props) => {
  const defaultClasses = defaultStyles({ textTransform })

  return (
    <Button
      className={clsx(defaultClasses.root, className)}
      {...props}
    />
  )
}

export default CusttomButton
