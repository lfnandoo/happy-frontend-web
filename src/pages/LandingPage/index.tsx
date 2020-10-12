import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { Container, ContentWrapper, MainContent } from "./styles";

import logoImg from "../../images/logo.svg";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <MainContent>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </MainContent>

        <div>
          <strong>Belford Roxo</strong>
          <span>Rio de Janeiro</span>
        </div>

        <a href="/">
          <FiArrowRight size={26} color="rgba(0 , 0, 0, 0.6)" />
        </a>
      </ContentWrapper>
    </Container>
  );
};

export default LandingPage;
