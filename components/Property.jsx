import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BsGridFill, BsPatchCheckFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { defaultHomeImg } from "../assets";
import millify from "millify";

const Property = ({
  externalID,
  imgUrl,
  avatarUrl,
  housePrice,
  bed,
  bath,
  area,
  description,
  isRent
}) => {
  return (
    <Link href={externalID} passHref>
      <Box
        flexDirection="column"
        background="blackAlpha.50"
        h="auto"
        minWidth={{ base: "320", md: "350", xl: "360" }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Images */}
        <Box
          position="relative"
          h="290px"
          overflow="hidden"
          minWidth={{ base: "320", md: "350", xl: "360" }}
        >
          <Image
            src={imgUrl ? imgUrl : defaultHomeImg}
            
            objectFit="cover"
            alt="home living room"
            layout="fill"
            quality={100}
          />
        </Box>
        {/* Text  */}
        <Box
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py="3"
          px="2"
        >
          {/* first text */}
          <Box justifyContent="space-between" display="flex">
            <Text
              fontSize={{ base: 18, md: 22 }}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              gap="2"
              fontWeight="bold"
            >
              <BsPatchCheckFill style={{ color: "#48BB78" }} />{" "}
              {millify(housePrice)} {isRent && "/monthly"}
            </Text>
            <Avatar size="md" src={avatarUrl} />
          </Box>

          {/* Icons */}
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {bed} <FaBed /> | {bath} <FaBath /> | {area}
            <BsGridFill />
          </Flex>

          {/* Second Text  */}
          <Text
            fontSize={{ base: 15, md: 18 }}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap="2"
            textTransform="capitalize"
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Property;
