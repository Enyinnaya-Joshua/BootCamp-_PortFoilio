import React from "react";
import AllRouter from "../allRoutes/allRouters";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <AllRouter />
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
`;
