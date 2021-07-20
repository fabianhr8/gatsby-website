import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {

    const query = useStaticQuery(graphql`
    query getPosts {
      allMdx {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          id
          body
        }
      }
    }
  `);

    return (
      <Layout pageTitle="My Blog Posts">
        {
          query.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          ))
        }
      </Layout>
    )
  }
  export default BlogPage;