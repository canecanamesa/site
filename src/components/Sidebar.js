import React from 'react'
import Facebook from '../img/icon-facebook-box.js'
import Twitter from '../img/icon-twitter-box.js'
import Youtube from '../img/icon-youtube.js'

const Sidebar = () => (
  <div className="content sidebar">
    <h2 className="title is-4">Busca</h2>
    <div className="box">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Texto para buscar..."
          />
        </div>
        <div className="control">
          <button className="button is-primary">Ok</button>
        </div>
      </div>
    </div>
    <h2 className="title is-4">Redes Sociais</h2>
    <div className="box">
      <div className="social-container">
        <div className="social-item">
          <a href="#">
            <Facebook width={'32px'} height={'32px'} />
          </a>
        </div>
        <div className="social-item">
          <a href="#">
            <Twitter width={'32px'} height={'32px'} />
          </a>
        </div>
        <div className="social-item">
          <a href="#">
            <Youtube width={'32px'} height={'32px'} />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Sidebar
