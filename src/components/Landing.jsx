import {  Box, Button, ButtonGroup, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
const Landing = () => {
  return( 
    <Stack flexDirection={"row"} display={"flex"} mb={"1.5em"} height={"100vh"} >
      <Box 
        flex={1} 

        p={".1em"}
        pt={"6em"}     
        className='information'
      >
        <Text fontSize={"4xl"}  fontWeight={"bold"} textTransform={"uppercase"}>
        Dive into Delights Of Delectable <span className='food'>Food </span>
        </Text>
        <Text fontSize={"lg"}>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
        </Text>
        <ButtonGroup  mt={"1.3em"} >
            <Button borderRadius={"40px"} bg='#39DB4A' color={"white"} >Order Now </Button>
            <Button variant={"ghost"} >Watch Now {" "} {" "}
              <AiFillPlayCircle  size="lg" color='grey'/>
            </Button>
        </ButtonGroup>
      </Box >  
      <Box display={"flex"} flex={1} position={"relative"}>
        <Box className='image-background' >
        </Box>
          <Image src={require("../assets/Intersect.png")} alt='photo' objectFit={"cover"} className='main-image'/>
      </Box>
    </Stack>
  )
}

export default Landing;