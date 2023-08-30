import { Button, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Services = () => {
  return (
    <Stack display={"flex"} flexDirection={"row"} gap={3} py={3} my={"4em"} >
        <div className='services-left'>
            <Text textTransform={"uppercase"} fontSize={"xl"} color={"red.600"} >our story and services</Text>
            <Text
                textTransform={"capitalize"} 
                fontSize={"5xl"}
                fontWeight={"bold"}
            >Our Culinary Journey And Services</Text>
            <Text fontSize={"md"}>
                Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
            </Text>
            <Button borderRadius={"40px"} mt={3} bg='#39DB4A' color={"white"} >Explore</Button>
        </div>
        <div className="services-right">
            <div className="service">
                <Image src={require("../assets/fi-rr-gift.png")} alt="image"/>
                <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"xl"} color={"#39DB4A"} >catering</Text>
            
                <Text textTransform={"capitalize"} fontSize={"md"} color={"#39DB4A"} >
                    Delight your guests with our flavors and  presentation
                </Text>
            </div>
            <div className="service">
                <Image src={require("../assets/fi-rr-salad.png")} alt="image"/>
                <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"xl"} color={"#39DB4A"} >gift cards</Text>
            
                <Text textTransform={"capitalize"}  fontSize={"md"} color={"#39DB4A"} >
                    Delight your guests with our flavors and  presentation
                </Text>
            </div>
            <div className="service">
                <Image  src={require("../assets/fi-rr-time-fast.png")} alt="image"/>
                <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"xl"} color={"#39DB4A"} >fast delivery</Text>
            
                <Text textTransform={"capitalize"} fontSize={"md"} color={"#39DB4A"} >
                    Delight your guests with our flavors and  presentation
                </Text>
            </div>
            <div className="service">
                <Image  src={require("../assets/fi-rr-shopping-cart-check.png")} alt="image"/>
                <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"xl"} color={"#39DB4A"} >online order</Text>
            
                <Text textTransform={"capitalize"} fontSize={"md"} color={"#39DB4A"} >
                    Delight your guests with our flavors and  presentation
                </Text>
            </div>

        </div>
    </Stack>
  )
}

export default Services
