import React from 'react'
import { useForm } from 'react-hook-form'

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
                <select>
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

export default Formulario