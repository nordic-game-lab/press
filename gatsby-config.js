require('dotenv').config();
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nordic Game Lab press`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `r1xsawdjymnz`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: CONTENTFUL_ACCESS_TOKEN,
    },
  },
  `gatsby-plugin-image`,
  "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

