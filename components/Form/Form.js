import React from 'react'
import { useForm } from "react-hook-form";

import { makeStyles } from '@material-ui/core/styles'


import Input from '../Input'

const useStyles = makeStyles(theme => ({
  submit: {
    background: theme.palette.info.main,
    color: theme.palette.primary.main,
    padding: '1rem',
    fontSize: '1.1rem', 
    fontWeight: '700',
    border: 0
  },
}))

const Form = () => {

  const classes = useStyles()

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '4rem' }}>
          <Input label="Nombre" name="name" defaultValue="test" ref={register} />
        </div>
        <div style={{ flex: 1 }}>
          <Input label="Apellido" name="surname" ref={register({ required: true })} />
        </div>
      </div>
      <div>
       <Input label="Email" name="email" defaultValue="test" ref={register} />
       <Input label="Asunto" name="subject" defaultValue="test" ref={register} />
       <Input type="textarea" label="Mensaje" name="message" defaultValue="test" ref={register} />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" className={classes.submit} value={'Enviar'}/>
    </form>
  )
}

export default Form