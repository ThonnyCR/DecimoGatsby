// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Decimo Technology Solutions`,
    siteUrl: `http://localhost:8001/`,
    description: `Decimo site`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: `https://decimodrupal.lndo.site/`,
      apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      basicAuth:{
        username: process.env.DRUPAL_USERNAME,
        password: process.env.DRUPAL_PASSWORD
      },
    },
    includeRoutes:[
      '**/form',
      '**/form_submission',
    ],
  },
]
};