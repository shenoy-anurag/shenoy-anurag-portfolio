import React from "react"
import Fade from "react-reveal/Fade"
import { StaticQuery, graphql, Link } from 'gatsby'

import BlogCard from "./atoms/BlogCard"
// import data from "../yourdata"

const limitedMarkdownPagesQuery = graphql`
  query limitedMarkdownPagesQuery {
    allMarkdownRemark {
      sum(field: timeToRead)
      totalCount
      nodes {
        id
        frontmatter {
          title
          layout
          published
          description
          author
          date
          slug
          img
          keywords
          tags
        }
        wordCount {
          paragraphs
          sentences
          words
        }
        timeToRead
      }
    }
  }
`

const LimitedBlogPosts = props => {
  let mdPages = []
  for (let i = 0; i < props.data.allMarkdownRemark.nodes.length; i++) {
    if (props.data.allMarkdownRemark.nodes[i].frontmatter.published) {
      mdPages.push(props.data.allMarkdownRemark.nodes[i])
    }
  }

  mdPages = mdPages.sort((a, b) => {
    if (a.frontmatter.date > b.frontmatter.date) {
      return -1;
    }
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
  let topPages = mdPages.slice(1, 6)

  return (
    <div className="section" id="blog">
      <div className="container">
        <div className="blog-wrapper">
          <Fade bottom>
            <h1>Blog Posts</h1>
          </Fade>

          <div>
            {topPages.map((node, index) => (
              <BlogCard
                key={index}
                heading={node.frontmatter.title}
                date={node.frontmatter.date}
                paragraph={node.frontmatter.description}
                imgUrl={node.frontmatter.img}
                projectLink={node.frontmatter.slug}
              ></BlogCard>
            ))}
          </div>
          <Link to="/blog" className="btn heavy">All Blog Posts</Link>
        </div>
      </div>
    </div>
  )
}

export const LimitedBlog = props => {
  return (
    <StaticQuery
      query={limitedMarkdownPagesQuery}
      render={nodes => <LimitedBlogPosts data={nodes} {...props} />}
    />
  );
};

export default LimitedBlog
