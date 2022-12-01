import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  imgUrl,
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  btnLink,
  btnText,
}) => {
  return (
    <Flex  flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imgUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium" textTransform='uppercase'>
          {purpose}
        </Text>

        <Text fontSize="3xl" fontWeight="bold" textTransform='capitalize'>
          {title1} <br /> {title2}
        </Text>

        <Text fontSize="lg" py="3" color="gray.700" textTransform='capitalize'>
          {desc1} <br /> {desc2}
        </Text>


        <Button fontSize="xl" textTransform='capitalize' bg="blue.300" color="white">
          <Link href={btnLink}>{btnText}</Link>
        </Button>
        
      </Box>
    </Flex>
  );
};

export default Banner;
