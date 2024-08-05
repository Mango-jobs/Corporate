import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import SectionHero from '../components/SectionHero/SectionHero'
import SectionText from '../components/SectionText/SectionText'
import SectionGrid from '../components/SectionGrid/SectionGrid'
import TeamGrid from '../components/TeamGrid/TeamGrid'
import ServiceGrid from '../components/ServiceGrid/ServiceGrid'
import ContactUs from '../components/ContactUs/ContactUs'

interface HomePageProps {
  data: {
    contentfulHomePage: {
      seoTitle: string;
      seoDescription: string;
      slug: string;
      section: Array<{
        key: string;
      }>;
    }
  }
}

const HomePage: React.FC<HomePageProps> = ({
  data: {
    contentfulHomePage: {
      seoTitle,
      seoDescription,
      section
    }
  }
}) => {
  console.log(section);
  
  return (
    <div>
      <Seo 
        title={seoTitle}
        description={seoDescription}
      />
      <div>
        {
          section.map((item, id) => {
            switch(item.key){
              case 'section-1':
                return <SectionHero data={item} key={id}/>
              case 'section-2':
                return <SectionText data={item} key={id}/>
              case 'section-3':
                return <SectionGrid data={item} key={id}/>
              case 'section-4':
                return <TeamGrid data={item} key={id}/>
              case 'section-5':
                return <SectionText data={item} key={id}/>
              case 'section-6':
                return <ServiceGrid data={item} key={id}/>
              case 'section-10':
                return <ContactUs data={item} key={id}/>
              default:
                return null;
            }
          })
        }
      </div>
    </div>
  )
}

export default HomePage

export const HomeQuery = graphql`
    query HomeQuery($id: String!){
      contentfulHomePage(id: {eq: $id}){
            seoTitle
            slug
            seoDescription {
                seoDescription
            }
            section {
              __typename
              ...sectionHero
              ...sectionText
              ...sectionGrid
              ...sectionTextWithImage
            }
        }
    }
`

