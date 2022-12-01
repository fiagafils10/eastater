import {  Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsHeart } from 'react-icons/bs'

const Footer = () => {
  return (
    <Flex 
    justifyContent='center' alignItems='center' gap='1' fontSize='18' mt='4' py='4' bg='gray.100' fontWeight='bold'>
Made with <BsHeart style={{color:'red'}}/> by <Text color='blue.400'>Fiaga Fils </Text>

    </Flex>
  )
}

export default Footer