import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { Banner, Property } from "../components";


import {  fetchBayutApi } from "../utils/fetchBayutApi";

export default function Home({ propertiesForSale, propertiesForRent }) {
  
  return (
    <div>
     

      <Banner
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, builder floors, "
        desc2="villas
       and more"
        btnLink="/search?purpose=for-rent"
        btnText="Explore Renting"
      />

<Flex flexWrap="wrap" justifyContent="center" gap='20px' alignItems="center">
        {propertiesForRent.map((property, index) => (
          <Property

            key={index}
            externalID={`/propertyDetails/${property.externalID}`}
            imgUrl={property.coverPhoto.url}
            avatarUrl={property.agency.logo.url}
            housePrice={property.price + '/monthly'}
            bed={property.rooms}
            bath={property.baths}
            area={property.area}
            description={property.title.slice(0, 30) + "..."}
            isRent={true}
          />
        ))}
      </Flex>

      <Banner
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        purpose="Buy A HOME"
        title1="Find, Buy & own your"
        title2="dream house"
        desc1="Explore Apartments, builder floors, "
        desc2="villas
       and more"
        btnLink="/search?purpose=for-sale"
        btnText="Explore Buying"
      />
      <Flex flexWrap="wrap" justifyContent="center" gap='20px' alignItems="center">
        {propertiesForSale.map((property, index) => (
          <Property
            key={index}
            externalID={`/propertyDetails/${property.externalID}`}
            imgUrl={property.coverPhoto.url}
            avatarUrl={property.agency.logo.url}
            housePrice={property.price}
            bed={property.rooms}
            bath={property.baths}
            area={property.area}
            description={property.title.slice(0, 30) + "..."}
            isRent={false}
          />
        ))}
      </Flex>
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchBayutApi(
    `/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchBayutApi(
    `/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
