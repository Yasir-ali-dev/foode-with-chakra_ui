import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const ContactUs = () => {
  return (
    <Box className='contactUs' py={2} my={"3.5em"}>

      <div className="links">
        <Heading fontSize={"2xl"} >Foode</Heading>
        <Text>Savor the artistry where every dish is a culinary masterpiece</Text>
      </div>
      <div className="links">
        <Heading fontSize={"2xl"} >Useful Link</Heading>
        {["About","Events","Blogs","FAQs"].map(item =>{
            return <Text key={item} fontSize={"lg"}>{item}</Text> 
        })} 
      </div>
      <div className="links">
      <Heading fontSize={"2xl"} >Main Menu</Heading>
        {["Home","Offers","Menus","Reservation"].map(item =>{
            return <Text key={item} fontSize={"lg"}>{item}</Text> 
        })} 
      </div>
      <div className="links">
        <Heading fontSize={"2xl"} >Contact Us</Heading>
        {["ex@gmail.com","324 423 232 412","Social Media","Linked Inn"].map(item =>{
            return <Text key={item} fontSize={"lg"}>{item}</Text> 
        })} 
      </div>

    </Box>
  )
}

export default ContactUs;