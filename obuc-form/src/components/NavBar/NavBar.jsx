import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="" >
        <div className="container">
            <Link to={'/'} className='h2 text-decoration-none fw-semi-bold' >
              <i className='fa-solid fa-list'/>  Registro de <span className='fw-bold'>Vagas</span></Link>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
