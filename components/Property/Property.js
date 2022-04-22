import Image from "next/image"
import Link from "next/link"
import { Center, Flex, Text, Avatar ,Box} from "@chakra-ui/react"
import { FaBed, FaBath } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import millify from "millify"
import DefaultImage from '../../assets/house.jpeg'


const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerfied, externalID } }) => {
  

    return (

        <Box   >
            <Link href={`/property/${externalID}`} passHref>
                <Flex flexWrap={'wrap'} w={'420px'} p={5} marginLeft={0} paddingTop={0} cursor={"pointer"} justifyContent='center' >
                    <Box>
                        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} height={'260px'} width={'400px'} />
                    </Box>
                    <Box w={'full'}>
                        <Flex paddingTop={'2'} justifyContent='space-between' alignItems={'center'}>
                            <Flex alignItems={'center'}>
                                <Box paddingRight={'2'} color='green.400'> {isVerfied=true ?  <GoVerified /> : ''}  </Box>
                                <Text fontWeight={'bold'} fontSize='lg'> AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
                            </Flex>
                            <Box>
                                <Avatar size={'sm'} src={agency.logo.url} />
                            </Box>
                        </Flex>
                        <Flex alignItems={'center'} p='1' justifyContent={'space-between'} width='280px' color={'blue.400'}>
                           {rooms}  <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
                        </Flex>
                        <Text fontSize={'lg'}>
                     {title.length > 30 ? `${title.substring(0,30)}...` : title}
                        </Text>
                    </Box>
                </Flex>
            </Link>
        </Box>

    )
}




export default Property