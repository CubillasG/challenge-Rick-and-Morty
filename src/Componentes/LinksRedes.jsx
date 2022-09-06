import React from 'react'
import { Link } from 'react-router-dom'
import IconGit from '../assets/git.png'
import IconLin from '../assets/in.com'
import IconInst from '../assets/insta.png'
import './LinksRedes.css'

const LinksRedes = () => {
  return (
    <div className='class_redes'>
      <a href='https://www.linkedin.com/in/gonzalo-cubillas-a4a1791b6/' target='blank'>
        <img src={IconLin} className='class_imgRedes'/>
      </a>
      <a href='https://github.com/CubillasG' target='blank'>
        <img src={IconGit} className='class_imgRedes'/>
      </a>
      <a href='https://www.instagram.com/' target='blank'>
        <img src={IconInst} className='class_imgRedes'/>
      </a>
    </div>
  )
}

export default LinksRedes
