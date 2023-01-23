import React from "react";
import CoinSetContainer from "../CoinSetContainer";
import Container from "../Container";
import Header from "../Header";
import Hero from "../Hero";
import { Main } from "./index.styled";


const MainTag: React.FC = () => {
  return (
    <Main>
      <Header />
      <Container>
        <Hero />
        <CoinSetContainer />
      </Container>
    </Main>
  );
};

export default MainTag;
