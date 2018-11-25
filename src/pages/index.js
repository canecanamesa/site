import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import imgTitle from '../img/subtitulos.jpg'

const monthNames = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="tile is-8 is-parent is-vertical">
          <div className="tile is-child">
            <div className="content home">
              <h1 className="has-text-weight-bold is-size-2">Últimas</h1>
              {posts.map(({ node: post }) => {
                const theDate = new Date(post.frontmatter.date)
                const ptDate = `${theDate.getDay()} ${monthNames[
                  theDate.getMonth()
                ].substring(0, 3)} ${theDate.getFullYear()}`
                const ptDate2 = `${theDate.getDay()} ${
                  monthNames[theDate.getMonth()]
                } ${theDate.getFullYear()}`
                return (
                  <div className="box" key={post.id}>
                    <Link className="title-link" to={post.fields.slug}>
                      <h2 className="title is-4">
                        {post.frontmatter.title}
                        <img src={imgTitle} alt="" role="presentation" />
                      </h2>
                    </Link>
                    {/* <small>{ptDate}</small> */}
                    <p className="post-info">{ptDate2}</p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Leia mais →
                      </Link>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="tile is-4 is-parent is-vertical">
          <Sidebar />
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
