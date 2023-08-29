import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import { Container } from "@chakra-ui/react";
import Categories from "./components/Categories";

function App() {
  return (
    <Container maxW={"container.xl"}>
      <Header />
      <Landing />
      <Categories />
    </Container>
  );
}

export default App;
