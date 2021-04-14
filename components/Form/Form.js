import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import { init, sendForm } from 'emailjs-com'

import Input from '../Input'
init('user_Qb7VouW29dT11OD4oNWHe')

const useStyles = makeStyles(theme => ({
  formWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  nameInput: {
    flex: 1,
    marginRight: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0rem'
    }
  },
  submit: {
    background: theme.palette.info.main,
    color: theme.palette.primary.main,
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: '700',
    border: 0
  }
}))

const Form = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, errors, reset } = useForm()
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await sendForm('service_se5sv0g', 'template_xgbh9pj', '#contact-form')
    } catch (err) {
      console.log(err)
    } finally {
      reset()
      setLoading(false)
    }
  }

  return (
    <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formWrapper}>
        <div className={classes.nameInput}>
          <Input register={register} name="name" label="Nombre" required />
        </div>
        <div style={{ flex: 1 }}>
          <Input label="Apellido" name="surname" register={register} required />
        </div>
      </div>
      <div>
       <Input label="Email" name="email" register={register} required />
       <Input label="Asunto" name="subject" register={register} required />
       <Input type="textarea" label="Mensaje" name="message" register={register} required />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      {
        loading ? <CircularProgress color="secondary" /> : <input type="submit" className={classes.submit} value={'Enviar'}/>
      }

    </form>
  )
}

export default Form
