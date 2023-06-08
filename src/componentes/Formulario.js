import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../hojas-estilos/Formulario.css';


 const Formulario = () => {
  const { register, handleSubmit } = useForm() 
  const customSubmit = (data) => {
      console.log(data)
  }
  return (
    <>
        <h2>FORMULARIO DE INSCRIPCIÓN</h2>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Nombre</label>
                <input type="text" {...register('Nombre')} />
            </div>
            <div className='form-control'>
                <label>Apellido</label>
                <input type="text" {...register('Apellido')} />
            </div>

            <div className='form-control'>
                <label>Email</label>
                <input type="texto" {...register('Email')} />
            </div>
            <div className='form-control'>
                <label>Ciudad</label>
                <select name='Ciudad' {...register('Ciudad')}>
                    <option value="SEL">Seleccionar</option>
                    <option value="BA">Buenos Aires</option>
                    <option value="BAC">Ciudad Autónoma de Buenos Aires</option>
                    <option value="CAT">Catamarca</option>
                    <option value="CHA">Chaco</option>
                    <option value="CHU">Chubut</option>
                    <option value="COR">Córdoba</option>
                    <option value="CRR">Corrientes</option>
                    <option value="ER">Entre Ríos</option>
                    <option value="FOR">Formosa</option>
                    <option value="JU">Jujuy</option>
                    <option value="PAM">La Pampa</option>
                    <option value="LR">La Rioja</option>
                    <option value="MZ">Mendoza</option>
                    <option value="MI">Misiones</option>
                    <option value="NQ">Neuquén</option>
                    <option value="RN">Río Negro</option>
                    <option value="SAL">Salta</option>
                    <option value="SAJ">San Juan</option>
                    <option value="SAL">San Luis</option>
                    <option value="SAC">Santa Cruz</option>
                    <option value="SAF">Santa Fe</option>
                    <option value="SAE">Santiago del Estero</option>
                    <option value="TIF">Tierra Del Fuego</option>
                    <option value="TUC">Tucumán</option>


                </select>
                
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </>
  )
}

export default Formulario; 

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
      <div className="contenedor-form"> 
          <h2>Formulario de Suscripción</h2>
          <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
              <div className='form-control'>
                  <label>Nombre</label>
                  <input type="text" {...register('Nombre',{ 
                      required:true,
                  })} />
                  {errors.Nombre?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
              
              </div>
  
              <div className='form-control'>
                  <label>Apellido</label>
                  <input type="text" {...register('Apellido',{ 
                      required:true,
                  })} />
                  {errors.Apellido?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
              </div>
  
              <div className='form-control'>
                  <label>Email</label>
                  <input type="text" {...register('Email', {
                      required: {
                          value:true,
                          message:"El campo no puede estar vacío"
                      }
                  })} />
                  {errors.Email && <small className='fail'>{errors.Email.message}</small>}
              </div>
               
              <br></br> 
              
              <button type='submit'>Registrarse</button>
          </form>
      </div>
    )
  }
  
  export default Formulario;

