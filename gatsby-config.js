/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Power to Connect | HR | India`,
    description: `Mangojobs Private Limited has been dedicated to matching top talent with leading companies`,
    author: `@akarsh`,
    siteUrl: `https://.mangojobs.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'ztppfajtivus',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'hLT_bMCU4ItWNr01MfWFZlFTSPUEiCX-qUeWLAD4kQs',
        environment: 'master',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fabicon.webp`, // This path is relative to the root of the site.
      },
    },
  ],
}
