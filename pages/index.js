// import Image from "next/image"
import Link from "next/link"
import { Flex, Box, Text, Button ,Image , useBreakpointValue} from "@chakra-ui/react"
import { baseUrl, fetchApi } from "../Utils/FetchApi"
import Property from "../components/Property/Property"
// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs


export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => {

  return(
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center'   m={{md:'8'}}>
    <Image src={imageUrl} width={500} height={300}  />

    <Flex flexDirection={'column'} p='5' justifyContent={'center'}  alignContent={'center'}>

      <Text color='gray.500' fontSize={{base:'sm',md:'lg'}} fontWeight='medium'>{purpose}</Text>
      <Text fontSize={{base:"xl",md:'2xl'}} fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='' paddingTop='2' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize={{base:"2sm",md:'lg'}}>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Flex>
  </Flex>

)}



export default function Home({ propertyForRent, propertyForSale }) {
  
  return (
    <Box w={{base : 'fit-content'}} >

      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap={'wrap'} justifyContent= {{base : 'center' , lg: 'center'}} w={{base : 'fit-content'}}>
        {propertyForRent.map((property, i) => (
          <Property property={property} key={i} />


        ))}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />

      <Flex flexWrap={'wrap'} justifyContent='center' w={{base : 'fit-content'}}>
        {propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertyForSale: propertyForSale.hits,
      propertyForRent: propertyForRent.hits
    }
  }

}