import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Menu = () => {
  return (
    <Stack my="2em" mb={"3.3em"} pb={"1em"} mx={"1em"}>
        <Text 
            textTransform={"uppercase"} 
            fontSize={"xl"} 
            color={"red.600"} 
            fontWeight={"bold"}

        >customer favourites</Text>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Text 
                textTransform={"uppercase"} 
                fontWeight={"bold"} 
                fontSize={"4xl"}
            >Standout dishes from our menu</Text>

            <ButtonGroup className='navigation' gap={5} marginLeft={"auto"}>
                <Button><ArrowBackIcon/></Button>
                <Button><ArrowForwardIcon/> </Button>
            </ButtonGroup>
        </Box>
        <Box 
            display={"grid"} 
            gridTemplateRows={"1fr"} 
            gridTemplateColumns={"repeat(3,1fr)"}
            gridColumnGap={"1.2em"}
            mt={"2.1em"}
        >
            <div className='menu-item'>
                <img src={require("../assets/heart.png")}  className='menu-heart' alt='_img'/>
                <img src={require("../assets/Fattoush_salad.png")} alt="burger" />
                <Text fontSize={"xl"} fontWeight={"bold"}>Fatoush Salad</Text>
                <Text fontSize={"md"}>Description of the item</Text>
                <div className="pricing">
                    <Text fontSize={"md"}>
                        <span>$</span>24.00
                    </Text>
                    <Text fontSize={"md"} >
                        <Img src={require("../assets/star.png")} display={"inline"}  alt="star" />{" "} 4.6
                    </Text>
                </div>
            </div>
            <div className='menu-item'>
                <img src={require("../assets/heart.png")}  className='menu-heart' alt='_img'/>
                <img src={require("../assets/Vegetable_salad.png")} alt="burger" />
                <Text fontSize={"xl"} fontWeight={"bold"}>Vegetable Salad</Text>
                <Text fontSize={"md"}>Description of the item</Text>
                <div className="pricing">
                    <Text fontSize={"md"}>
                        <span>$</span>34.00
                    </Text>
                    <Text fontSize={"md"} >
                        <Img src={require("../assets/star.png")} display={"inline"}  alt="star" />{" "} 5.0
                    </Text>
                </div>
            </div>
            <div className='menu-item'>
                <img src={require("../assets/heart.png")}  className='menu-heart' alt='_img'/>
                <img src={require("../assets/Fattoush_salad.png")} alt="burger" />
                <Text fontSize={"xl"} fontWeight={"bold"}>Egg Vegi Salad</Text>
                <Text fontSize={"md"}>Description of the item</Text>
                <div className="pricing">
                    <Text fontSize={"md"}>
                        <span>$</span>29.00
                    </Text>
                    <Text fontSize={"md"} >
                        <Img src={require("../assets/star.png")} display={"inline"}  alt="star" />{" "} 4.7
                    </Text>
                </div>
            </div>
        </Box>
        
    </Stack>
  )
}

export default Menu;