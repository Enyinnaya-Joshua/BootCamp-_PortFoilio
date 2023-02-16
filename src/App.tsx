import React from "react";
import styled from "styled-components";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <HomeScreen />
        <Footer />
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
`;
