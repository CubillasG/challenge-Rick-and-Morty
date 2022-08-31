import React from 'react'
import { Link } from 'react-router-dom'
import IconGit from '../assets/git.png'
import IconLin from '../assets/in.com'
import IconInst from '../assets/insta.png'
import './LinksRedes.css'

const LinksRedes = () => {
  return (
    <div className='class_redes'>
      <Link to='https://www.linkedin.com/in/gonzalo-cubillas-a4a1791b6/'>
        <img src={IconLin}/>
      </Link>
      <Link to='https://github.com/CubillasG'>
        <img src={IconGit}/>
      </Link>
      <Link to='https://www.instagram.com/'>
        <img src={IconInst}/>
      </Link>
    </div>
  )
}

export default LinksRedes
