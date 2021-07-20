import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = () => {
    
    const query =  useStaticQuery(graphql`
        query {
            allFile {
                nodes {
                    name
                }
            }
        }
    `);
    console.log(query)

    return (
      <Layout pageTitle="My Blog Posts">
        <ul>
        {
            query.allFile.nodes.map(node => (
                <li key={node.name}>
                    {node.name}
                </li>
            ))
        }
        </ul>
      </Layout>
    )
}

export default BlogPage;