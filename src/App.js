import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import { Container } from "@chakra-ui/react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

function App() {
  return (
    <Container maxW={"container.xl"}>
      <Header />
      <Landing />
      <Categories />
      <Menu />
      <Testimonials />
      <Services />
    </Container>
  );
}

export default App;
