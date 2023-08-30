import { MoonIcon } from '@chakra-ui/icons';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
  return (
    <Tabs>
      <TabList display={"flex"} justifyContent={"center"} p={".31em"} gap={"1.5em"} >
          <Tab >Home</Tab>
          <Tab>Menu</Tab>
          <Tab>Services</Tab>
          <Tab>Offers</Tab>
          <Tab ml={"auto"}><MoonIcon/></Tab>
      </TabList>
    </Tabs>
  )
}

export default Header;