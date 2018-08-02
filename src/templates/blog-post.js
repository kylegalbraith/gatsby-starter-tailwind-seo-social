import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Seo from '../components/Seo';
import Social from '../components/Social';
import config from '../config/config';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    const url = 'https://blog.kylegalbraith.com' + this.props.location.pathname;

    return (
      <div className="text-left p-4 bg-grey-lightest shadow-lg">
        <Seo data={post} />
        {
          post.frontmatter.cover &&
          <Img sizes={post.frontmatter.cover.childImageSharp.sizes} alt={post.frontmatter.title} className="w-full" />
        }
        <h1 className="text-3xl lg:text-5xl text-indigo-darker font-normal mt-6 mb-2">
          {post.frontmatter.title}
        </h1>
        <p className="block mb-8 pb-4 border-b-2">
          📅 {post.frontmatter.date} – {config.authorName}
        </p>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="mt-16 pt-8 social-content text-center border-t">
          <p className="font-light">Did you enjoy this post? Share the ❤️ with others.</p>
          <Social url={url} title={post.frontmatter.title} />
        </div>

        <ul
          className="mt-8 border-t-2 pt-4"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            paddingLeft: 0
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev" className="text-indigo-darker hover:text-indigo-lighter">
                ← {previous.frontmatter.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next" className="text-indigo-darker hover:text-indigo-lighter">
                {next.frontmatter.title} →
              </Link>
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 280)
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        cover {
          childImageSharp{
            sizes(maxWidth: 1140, maxHeight: 420) {
                ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`