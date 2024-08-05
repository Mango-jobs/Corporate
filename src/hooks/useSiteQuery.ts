import { graphql, useStaticQuery } from 'gatsby'

export const useSiteQuery = () => {
    const {
        contentfulGlobalSite
    } = useStaticQuery(graphql`
        query {
            contentfulGlobalSite(id: {eq: "abeb1a84-a2c0-5e45-b8bd-79c8afe3ad58"}) {
                name
                id
                header {
                  title
                  slug
                }
            }
        }
    `)


    return contentfulGlobalSite
}
