import React, { Component } from 'react'
import Gallery from '../../components/Gallery'
import Layout from '../../components/Layout'

const urls = [
  'https://images.unsplash.com/photo-1496482475496-a91f31e0386c?ixlib=rb-0.3.5&s=b46aed04c22fddb9abcdaf30fe57a499&auto=format&fit=crop&w=2850&q=80',
  'https://images.unsplash.com/photo-1490143921278-d853145e4977?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d770c170b58b9d0abacd519b79b28a13&auto=format&fit=crop&w=1949&q=80',
  'https://images.unsplash.com/photo-1440357740571-426c509b1775?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2f53f0aaa4f57c93dd960ac4e6634db&auto=format&fit=crop&w=2019&q=80',
  '',
]

class Index extends Component {
  render() {
    return <Layout><Gallery imageUrls={urls} /></Layout>
  }
}

export default Index
