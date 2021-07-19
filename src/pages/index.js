import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>This is an example made from the Gatsby tutorial</p>
      <StaticImage 
        alt='A cat in a sofa'
        // src='https://live-production.wcms.abc-cdn.net.au/7a37d3659e19ded1fec899317b8c5c26?impolicy=wcms_crop_resize&cropH=1373&cropW=2441&xPos=0&yPos=0&width=862&height=485'
        src='../images/matilda.jpg'
      />
    </Layout>
  )
}

export default IndexPage;
