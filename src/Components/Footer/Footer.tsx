import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>&copy; 2023 The Mechanic. All rights reserved</Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #0a0a0a;
  height: 70px;
  width: 100%;
  color: #818181;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    font-size: small;
  }
`;
