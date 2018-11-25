import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import backgroundImage from '../img/gplaypattern.png'

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet>
      <title>Caneca na Mesa</title>
      <body style={`background: url(${backgroundImage})`} />
    </Helmet>
    <Navbar />
    <div className="container">
      <div className="tile is-ancestor">{children}</div>
    </div>
  </div>
)

export default TemplateWrapper
