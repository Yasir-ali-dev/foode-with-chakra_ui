import { Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Services = () => {
  return (
    <Stack display={"flex"} flexDirection={"row"} py={2} my={"3em"}>

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
            <Button borderRadius={"40px"} bg='#39DB4A' color={"white"} >Explore</Button>
        </div>

    </Stack>
  )
}

export default Services
