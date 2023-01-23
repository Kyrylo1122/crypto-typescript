import React from "react";
import CoinSetContainer from "../CoinSetContainer";
import Container from "../Container";
import Header from "../Header";
import Hero from "../Hero";

const MainTag: React.FC = () => {
  return (
    <main>
      <Header />
      <Container>
        <Hero />
        <CoinSetContainer />
      </Container>
    </main>
  );
};

export default MainTag;
