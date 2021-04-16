import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'

import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'

import { init, sendForm } from 'emailjs-com'

import Input from '../Input'
import clsx from 'clsx'
import { FormControlLabel } from '@material-ui/core'
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
    marginTop: theme.spacing(2),
    border: 0
  },
  disabled: {
    opacity: 0.2
  }
}))

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.info.main,
    '&$checked': {
      color: theme.palette.info.main
    }
  },
  checked: {}
}))((props) => <Checkbox color="default" {...props} />)

const Form = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false)

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

  const handleInputChange = (e) => {
    setAceptaPoliticas(e.target.checked)
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
      <FormControlLabel
          control={
            <CustomCheckbox
            checked={aceptaPoliticas}
            onChange={handleInputChange}
            name="checkedB"
            color="primary"
          />
          }
          label="He leído y acepto la política de privacidad"
        />
       {/* <label>
         <input
          type="checkbox"
          id="cbox1"
          checked={aceptaPoliticas}
          onChange={handleInputChange}
          >
            He leído y acepto la política de privacidad
         </input>
        </label> */}
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      {
        loading ? <CircularProgress color="secondary" /> : <input disabled={!aceptaPoliticas} type="submit" className={clsx(classes.submit, { [classes.disabled]: !aceptaPoliticas })} value={'Enviar'}/>
      }

    </form>
  )
}

export default Form
