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
      seoDescription: {};
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
        description={seoDescription.seoDescription}
      />
      <div 
      style={{background : `linear-gradient(269deg, rgb(132 100 155), rgb(119 78 149) 80.1%, rgb(96 53 128) 100.98%, rgb(113 22 181))`}}
      //style={{background: `linear-gradient(rgba(0, 142, 99, 0.1), rgba(0, 0, 0, 0.1)), url(https://th.bing.com/th/id/R.5dc128d4ff082b92a9208670789ae6ab?rik=%2bJioYcZ9YFWHcQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f5KnwccW.jpg&ehk=rqBnvdCAZSRIFdR2nF067gQBHeiMGmFxjEBmNXXKAhw%3d&risl=&pid=ImgRaw&r=0) fixed center center`}}
      >
        {
          section.map((item, id) => {
            switch(item.key){
              case 'section-1':
                return <SectionHero data={item} key={id}/>
              case 'section-2':
                return <SectionText data={item} key={id}/>
              case 'section-3':
                return <SectionGrid data={item} key={id}/>
              // case 'section-4':
              //   return <TeamGrid data={item} key={id}/>
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

