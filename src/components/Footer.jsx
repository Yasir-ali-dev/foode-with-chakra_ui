import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillFacebook,AiFillInstagram,AiFillGitlab,AiFillGift } from "react-icons/ai";
const Footer = () => {
  return (
    <Stack display={"flex"} mt={"2em"} py={".41em"}  justifyContent={"space-between"} flexDirection={"row"}>
      <Box display={"flex"} flexDirection={"row"} className='group-links' gap={2}>
        <Button>
            <AiFillFacebook size={"3em"} />
        </Button>
        <Button>
            <AiFillGift size={"3em"}/>
        </Button>
        <Button>
            <AiFillGitlab size={"3em"}/>
        </Button>
        <Button>
            <AiFillInstagram size={"3em"}/>
        </Button>
      </Box>
      <Text fontSize={"xl"}>Copyright @ 2023 Decode | All Rights Reserved </Text>
    </Stack>
  )
}

export default Footer
