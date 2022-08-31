import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <Link to={'/'} className='navbar-brand'>
                Registro de Vagas</Link>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
