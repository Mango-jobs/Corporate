import { graphql } from "gatsby";

export const sectionHero = graphql`
  fragment sectionHero on Node {
    ... on ContentfulSectionHero {
      title
      key
      desktopImage {
        gatsbyImageData
      }
    }
  }
`

export const sectionText = graphql`
  fragment sectionText on Node {
    ... on ContentfulSectionContent {
      title
      key
      description {
        raw
      }
    }
  }
`

export const sectionTextWithImage = graphql`
  fragment sectionTextWithImage on Node {
    ... on ContentfulSectionTextWithImage {
      title
      key
      image{
        gatsbyImageData
      }
    }
  }
`

export const sectionGrid = graphql`
  fragment sectionGrid on Node {
    ... on ContentfulSectionGrid {
      name
      key
      title
      isAlternate
      type
      cards {
        __typename
        ... on ContentfulCards {
          title
          description {
            raw
          }
          image {
            gatsbyImageData
          }
        }
        ... on ContentfulSectionTextWithImage {
          title
          description {
            raw
          }
          image {
            gatsbyImageData
          }
        }
        ... on ContentfulSectionContent {
          title
          description {
            raw
          }
          image{
            gatsbyImageData
          }
        }
      }
    }
  }
`

