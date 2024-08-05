/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
const path = require(`path`)
const { flatten } = require('ramda')
const { pageNode, pageCustomNode } = require('./src/fragments/pageNodes')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions


  const pageQuery = await graphql(`{
    allContentfulHomePage {
        nodes {
            ${pageNode}
        }
      }
    }`
  )
 
const pages = flatten(
    Object.values(pageQuery.data).map(({ nodes }) => nodes)
)
pages.forEach(({ id, slug, contentful_id, __typename, node_locale, noIndex }) => {
  if (!slug) return
  const typename = __typename.replace('Contentful', '')
  createPage({
      path: slug,
      component: path.resolve(`./src/templates/${typename}.tsx`),
      context: {
          id,
          node_locale,
          contentful_id,
          noIndex  ,
          defer: true,
      }
  })
})}

