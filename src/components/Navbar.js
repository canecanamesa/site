import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
import logo from '../img/caneca_na_mesa_logo3.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-background" />
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Caneca na Mesa" />
            {/* <img src={logo} alt="Kaldi" style={{ width: '129px' }} /> */}
          </figure>
        </Link>
      </div>
      <div className="navbar-start is-primary">
        {/* <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link> */}
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/sobre">
          Sobre
        </Link>
        {/* <Link className="navbar-item" to="/galeria">
          Galeria
        </Link> */}
        <Link className="navbar-item" to="/contato">
          Contato
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
