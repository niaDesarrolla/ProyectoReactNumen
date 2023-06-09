import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../hojas-estilos/Formulario.css';

const Formulario = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm() 
    const customSubmit = (data) => {
        //console.log(data)
        alert("¡Validación exitosa!")
    }
  
    const [colorInput, setColorInput] = useState('#fff7f7')
    useEffect( ()=> {
        let words = watch('prueba')
        if(words === 'react'){setColorInput('#614ad3')}
    } )
    
    return (
        <form>
      <div className="formulario rounded mb-3 mx-auto "> 
          <h2>Formulario de Suscripción</h2>
          <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
              <p className='form-control'>
                  <label>Nombre</label>
                  <input type="text" {...register('Nombre',{
                      required:true,
                  })} />
                  {errors.Nombre?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
              
              </p>
  
              <p className='form-control'>
                  <label>Apellido</label>
                  <input type="text" {...register('Apellido',{ 
                      required:true,
                  })} />
                  {errors.Apellido?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
              </p>
  
              <p className='form-control'>
                  <label>Email</label>
                  <input type="text" {...register('Email', {
                      required: {
                          value:true,
                          message:"El campo no puede estar vacío"
                      }
                  })} />
                  {errors.Email && <small className='fail'>{errors.Email.message}</small>}
              </p>
               
              <br></br> 
              
              <button type='submit'>Registrarse</button>
          </form>
      </div>
      </form>
    )
  }
  
  export default Formulario;

