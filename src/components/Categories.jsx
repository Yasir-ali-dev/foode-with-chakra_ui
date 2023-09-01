import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const Categories = () => {
  return (
      <Stack mb={"3em"} pb={2}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Text 
            textTransform={"uppercase"} 
            fontSize={"xl"} color={"red.600"} 
            fontWeight={"bold"}

        >customer favourites</Text>
        <Text 
            textTransform={"uppercase"} 
            fontWeight={"bold"} 
            fontSize={"4xl"}
        >popular categories</Text>

        </Box>
        <Box 
            className='category-container'
            mt={"2.1em"}
        >
            <div className='category'>
                <div >
                    <img src={require("../assets/pngwing.png")} alt="burger" />
                </div>
                <Text fontSize={"xl"} fontWeight={"bold"}>Main Dish</Text>
                <Text fontSize={"lg"}>(86 dishes)</Text>
            </div>
            <div className='category'>
                <div >
                    <img src={require("../assets/pngwing6.png")} alt="burger" />
                </div>
                <Text fontSize={"xl"} fontWeight={"bold"}>Break Fast</Text>
                <Text fontSize={"lg"}>(12 dishes)</Text>
            </div>
            <div className='category'>
                <div >
                    <img src={require("../assets/pngwing3.png")} alt="burger" />
                </div>
                <Text fontSize={"xl"} fontWeight={"bold"}>Desert</Text>
                <Text fontSize={"lg"}>(23 deserts)</Text>
            </div>
            <div className='category'>
                <div >
                    <img src={require("../assets/pngwing7.png")} alt="burger" />
                </div>
                <Text fontSize={"xl"} fontWeight={"bold"}>Browse All</Text>
                <Text fontSize={"lg"}>(186+ items)</Text>
            </div>
            
        </Box>
    </Stack>
  )
}

export default Categories;
