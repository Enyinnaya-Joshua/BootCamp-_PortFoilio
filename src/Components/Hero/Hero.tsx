import React from "react";
import styled from "styled-components";
import img1 from "../assets/1.png";
import img2 from "../assets/7.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Image src={img1} />
        <First>
          <ImageHold>
            <Image2 src={img2} />
            <Text>Hello</Text>
          </ImageHold>

          <h3>I’m Automotive Engineer.</h3>
          <h3>Repair and Service your automobiles and vehicles</h3>
          <p>
            According to the research firm Frost & Sullivan, the estimated size
            of the North American
          </p>
        </First>
      </Container>
    </div>
  );
};

export default Hero;

const Text = styled.h4`
  position: absolute;
  font-size: 20px;
`;

const ImageHold = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image2 = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const First = styled.div`
  height: 550px;
  width: 370px;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 40px;

  h3 {
    margin-bottom: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
`;

const Container = styled.div`
  height: 600px;
  width: 100%;
  position: relative;
`;
