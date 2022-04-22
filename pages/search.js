import {useState} from 'react'
import { useRouter } from "next/router";
import Image from "next/image";
import { Box , Text ,Icon , Flex } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from '../components/searchFilters/SearchFilters';
import Property from '../components/Property/Property';
import noresult from '../assets/noresult.svg'
import { fetchApi , baseUrl } from '../Utils/FetchApi';
const Search = ({properties})=>{
    const [searchFilters, setsearchFilters] = useState(false)
    const router = useRouter();
    return(
 <Box>
     <Flex
      bg={'gray.100'}
      borderBottom={'1px'}
      borderColor='gray.200'
      p={'2'}
      fontSize='lg'
      fontWeight={'bold'}
      alignItems='center'
      justifyContent={'center'}
      cursor='pointer'
      onClick={()=> setsearchFilters((prevFilters) => !prevFilters)}
      >

     <Text> Search Property By Filters</Text>
     <Icon paddingLeft={'2'}  w={'7'} as={BsFilter} />
     </Flex>
     {searchFilters && <SearchFilters/>}
     <Text fontSize={'2xl'} fontWeight='bold' p={'4'}> Properties {router.query.purpose}</Text>
  <Flex flexWrap={'wrap'} justifyContent={'center'} >
{properties.map((property , i)=>(
 <Property property={property} key={i} />
))}
  </Flex>
  {properties.length === 0 &&(
<Flex flexDirection={'column'} alignItems={'center'} justifyContent='center' marginTop={'5'} marginBottom='5'>
<Image src={noresult} alt='noimage'/>
<Text fontSize={'2xl'} marginTop='3'> No Results Found</Text>
</Flex>
    )}
 
 
 
 </Box>
    )
}
export default Search;
export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data.hits,
    },
  };
}