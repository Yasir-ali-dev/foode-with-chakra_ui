import { Stack, Image, Text, Box, AvatarGroup, Avatar } from '@chakra-ui/react';
import React from 'react';

const Testimonials = () => {
  return (
    <Stack display={"flex"} flexDirection={"row"} pb={1} mb={"2.5em"}>
        <div className="image-container">
            <Image src={require("../assets/cook_background.png")} alt="back" className='background'/>
            <Image src={require("../assets/cook.png")} alt="cook_img" position={"relative"}/>
        </div>

        <div className="testimonial-info">
            <Text textTransform={"uppercase"} fontSize={"xl"} color={"red.600"} >Testimonial</Text>
            <Text
                textTransform={"capitalize"} 
                fontSize={"5xl"}
                fontWeight={"bold"}
            >What our customer says about us</Text>
            <Text fontSize={"md"}>
                “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
            </Text>
            <Box  display={"flex"} alignItems={"center"}>
                <AvatarGroup size='lg' max={3}>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                </AvatarGroup>
                <Box marginLeft={"4em"}>
                    <Text textTransform={"capitalize"} fontSize={"xl"} fontWeight={"bold"}  >customer feedback</Text>
                    <Text fontSize={"xl"} >
                        <Image src={require("../assets/star.png")} display={"inline"} alt='stae'/>{" "} 4.9
                        (18.6k Reviews)
                    </Text>
                </Box>
                
            </Box>
        </div>
    </Stack>
  )
}

export default Testimonials;

