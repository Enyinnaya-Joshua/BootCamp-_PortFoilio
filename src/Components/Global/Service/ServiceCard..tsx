import React from "react";
import styled from "styled-components";
import img1 from "../../assets/2.png";
import img2 from "../../assets/3.png";

interface IService {
  icon: any;
  title: string;
}

const Service: React.FC<IService> = ({ icon, title }) => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Content1>
            <ImageHold>
              <Image id="Image" src={img1} />
              <Image1 id="Image1" src={img2} />
              <IconHold id="IconHold">{icon}</IconHold>
            </ImageHold>

            <Body>
              <h2>{title}</h2>

              <p>
                Magna metus metus auctor. Hymenaeos luctus tincidunt natoque
                quisq praesent class tempor metus pellentesque.
              </p>

              <Rtext id="Rtext">Read More</Rtext>
            </Body>
          </Content1>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Service;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 60px 0px;
  position: relative;
`;

const Body = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  h2 {
    color: white;
  }

  p {
    color: #8f8f8f;
    font-size: 18px;
    width: 100%;
    line-height: 30px;
  }
`;

const Rtext = styled.div`
  color: #c41a1a;
  font-size: 18px;
`;

const Image1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  display: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageHold = styled.div`
  width: 140px;
  height: 140px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const IconHold = styled.div`
  font-size: 40px;
  color: white;
  position: absolute;
`;

const Content1 = styled.div`
  height: 400px;
  width: 330px;
  background-color: #0b0b0b;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 900ms;

  :hover {
    background-color: #c41a1a;
    transition: all 1s;

    p {
      color: white;
      transition: all 900ms;
    }

    #Rtext {
      color: white;
      transition: all 900ms;
    }
  }

  :hover #IconHold {
    color: #c41a1a;
    transition: all 900ms;
  }

  :hover #Image {
    color: #c41a1a;
    transition: all 1s;

    display: none;
  }

  :hover #Image1 {
    color: #c41a1a;
    display: block;
    transition: all 900ms;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  flex-direction: column;
  margin-top: 30px;
`;
