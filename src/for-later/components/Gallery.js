import React from 'react'
import { arrayOf, string } from 'prop-types'

class Gallery extends React.Component {
  state = {
    loading: true,
  }

  renderImage(imageUrl, key) {
    return (
      <div key={key}>
        <img
          src={imageUrl}
          onLoad={this.handleStateChange}
          onError={this.handleStateChange}
          alt="Really"
        />
      </div>
    )
  }

  renderSpinner() {
    if (!this.state.loading) return null
    return <span className="spinner" />
  }

  handleStateChange = evt => {
    this.setState({
      loading: !evt.target.complete,
    })
  }

  render() {
    return (
      <div className="gallery">
        {this.renderSpinner()}
        <div className="images">
          {this.props.imageUrls.map((imageUrl, index) =>
            this.renderImage(imageUrl, index),
          )}
        </div>
      </div>
    )
  }
}

Gallery.propTypes = {
  imageUrls: arrayOf(string).isRequired,
}

export default Gallery
