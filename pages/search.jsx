import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import { Property, SearchFilters } from '../components';
import { noresult } from '../assets';
import { fetchBayutApi } from '../utils/fetchBayutApi';


const Search =({properties})=>{
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter()

   

    return(
       <Box
       minHeight='100vh'
       >
        <Flex
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
        onClick={()=> setSearchFilters((prev)=> !prev)}
        >
            <Text>Property By FIlters</Text>
            <Icon paddingLeft='2' w='7' as={BsFilter}/>

        </Flex>
        {searchFilters && <SearchFilters/>}
        <Text fontSize='2xl' p='4' fontWeight='bold' textTransform='uppercase'>
           {router.query.purpose}
        </Text>
        <Flex flexWrap="wrap" justifyContent="space-evenly" gap='20px' alignItems="center">
            {properties?.map((property, index) =>(
                 <Property key={index} 
                 
                 externalID={`propertyDetails/${property.externalID}`}
                 imgUrl={property.coverPhoto?.url}
                 avatarUrl={property.agency.logo.url}
                 housePrice={property.price}
                 bed={property.rooms}
                 bath={property.baths}
                 area={property.area}
                 description={property.title.slice(0, 30) + "..."}
                 isRent={property.rentFrequency && true}
                 
                 />))}
        </Flex>
        {properties?.length===0 &&(
            <Flex 
            height='500px'
            widht='500px'
            justifyContent='center' alignItems='center'
            flexDirection='column'
            >
                <Text
                fontSize='100px'
                color='blue.400'
                >No results</Text>
                <Image
                objectFit='cover' 
                alt='no result' src ={noresult}/>
            </Flex>
        )}
       </Box>
        
    )
}
export default Search


export async function getServerSideProps({query}){
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '6';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || 4

    const data = await fetchBayutApi(`/properties/list?locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&areaMax=${areaMax}&sort=${sort}&bathsMin=${bathsMin}&roomsMin=${roomsMin}&maxPrice=${maxPrice}&minPrice=${minPrice}&rentFrequency=${rentFrequency}&purpose=${purpose}`)

    return{
        props:{
         properties:data?.hits   
        }
    }
}