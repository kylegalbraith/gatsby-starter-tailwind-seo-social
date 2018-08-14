import React from "react";
import Seo from "../components/Seo";
import get from 'lodash/get'
import Link from "gatsby-link";
import Layout from '../components/layout';
import { graphql } from 'gatsby';

class BlogIndexPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    return (
      <Layout>
        <div className="text-left p-4 bg-grey-lightest">
          <Seo data="" />
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug} className="text-grey-darkest pb-4 pt-4">
                <p className="inline-block bg-purple-darker text-purple-lightest mb-2 font-normal p-2 text-xs rounded">
                  {node.frontmatter.date}
                </p>
                <h3 className="mb-2 font-normal">
                  <Link className="text-2xl text-indigo-darker hover:text-indigo-lighter" to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </Layout>
    );
  }
}

export default BlogIndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            cover {
              childImageSharp{
                sizes(maxWidth: 630) {
                    ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
