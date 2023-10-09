import React from 'react'
import './Formulario.css'
export const Formulario = () => {
  return (
    <section className='seccion'>
        <h1>Contactenos</h1>
        <form className='formulario' action="">
            <fieldset className='fieldset'>
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder='ej: Jose benitez' />
            </fieldset>
            <fieldset className='fieldset'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='ej: josebenitez@gmail.com' />
            </fieldset>
            <fieldset className='fieldset'>
                <label  htmlFor="">Mensaje</label>
                <textarea className='mensaje' name="" id="" cols="45" rows="10"></textarea>
            </fieldset>
            <button className='boton'>
                send
            </button>
        </form>
        

    </section>
  )
}
