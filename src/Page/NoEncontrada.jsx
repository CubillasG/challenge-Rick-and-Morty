import React from 'react'
import { NavLink } from 'react-router-dom'

const NoEncontrada = () => {
  return (
    <div>
      <h2>pagina no encontrada</h2>
      <button className='btn btn-primary'>
        <NavLink to='/'>Volver al inicio</NavLink>
      </button>
    </div>
  )
}

export default NoEncontrada
