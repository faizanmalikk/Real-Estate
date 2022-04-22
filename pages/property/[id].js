import { Box, Flex, Text, Avatar } from "@chakra-ui/react"
import { FaBed, FaBath } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import millify from "millify"
import { fetchApi, baseUrl } from "../../Utils/FetchApi"
import ImageScrollBar from "../../components/ImageScrollBar/ImageScrollBar"

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths,purpose ,area, agency, isVerfied, description, type, furnishingStatus, amenities, photos } }) => 
{
 
  return(
  <Box maxWidth={'1200px'} p='4' margin={'auto'}>
    {photos && <ImageScrollBar data={photos} />}
    <Box w={{base : 'fit-content' , md : 'full'}} p='6' >
      <Flex paddingTop={'2'} justifyContent='space-between' alignItems={'center'}>
        <Flex alignItems={'center'}>
          <Box paddingRight={'2'} color='green.400'> {isVerfied = true ? <GoVerified /> : ''}  </Box>
          <Text fontWeight={'bold'} fontSize='lg'> AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
        </Flex>
        <Box>
          <Avatar size={'sm'} src={agency.logo.url} />
        </Box>
      </Flex>
      <Flex alignItems={'center'} p='1' justifyContent={'space-between'} width='280px' color={'blue.400'}>
        {rooms}  <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
      <Box marginTop={'2'} >
      <Text fontSize={'lg'} fontWeight='bold' marginBottom={2}>
        {title}
      </Text>
        <Text lineHeight={2} fontSize={{base : 'sm'}} color='gray.600'>{description}</Text>

      </Box>
      <Flex flexWrap={'wrap'} justifyContent={'space-between'} marginTop='4' textTransform={'uppercase'}>
    <Flex justifyContent={'space-between'} width='400px'  p={3} borderBottom={'1px'} borderColor='gray.300'>
       <Text>Type</Text>
       <Text fontWeight={'bold'}>{type}</Text>
    </Flex>
    <Flex justifyContent={'space-between'} width='400px'  p={3} borderBottom={'1px'} borderColor='gray.300'>
       <Text>Purpose</Text>
       <Text fontWeight={'bold'}>{purpose}</Text>
    </Flex>
 
    {furnishingStatus && (
       <Flex justifyContent={'space-between'} width='400px' p={3}  borderBottom={'1px'} borderColor='gray.300'>
       <Text>Furnishing-Status</Text>
       <Text fontWeight={'bold'}>{furnishingStatus}</Text>
    </Flex>
    )}
 
      </Flex>
     
    
        {amenities.length != 0 ? (   <Box marginTop={'8'}> <Text marginBottom={1} fontSize={'2xl'} fontWeight='bold'>Amenities:</Text> 
        <Flex flexWrap={'wrap'}>
         {amenities.map((item)=>(
            item.amenities.map((amenity)=>(
               <Text 
               color={'blue.400'}
               bg='gray.200'
               margin={'1.5'}
               padding='2'
               fontWeight={'bold'}
               borderRadius='6px'
               key={amenity.text}>{amenity.text}</Text>
            ))
         ))}
        </Flex>
        
        
        </Box>
        ) : ''}
         
           
            
    </Box>
  </Box>
)}
export default PropertyDetails;


export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
