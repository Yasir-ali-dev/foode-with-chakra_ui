import { MoonIcon } from '@chakra-ui/icons';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
  return (
    <Tabs>
    <TabList display={"flex"} justifyContent={"center"} p={".31em"} gap={"1.5em"} >
        <Tab>Home</Tab>
        <Tab>Blog</Tab>
        <Tab>Contact Us</Tab>
        <Tab>About Us</Tab>
        <Tab ml={"auto"} mr={"1.5em"}><MoonIcon/></Tab>
    </TabList>
    </Tabs>
  )
}

export default Header;