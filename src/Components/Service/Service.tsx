import React from "react";
import styled from "styled-components";
import ServiceCard from "../Global/Service/ServiceCard.";
import { BsGearWideConnected } from "react-icons/bs";
import { FaKeycdn } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <Container>
        <Title>
          <TitleCon>
            <Text1>
              <Line></Line>
              <SText>Service</SText>
            </Text1>
            <h1>What I Do</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
          </TitleCon>
        </Title>
        <Wrapper>
          <ServiceCard
            title="Automobile Service"
            icon={<BsGearWideConnected />}
          />
          <ServiceCard title="Engine Repeiar" icon={<BsGearWideConnected />} />
          <ServiceCard title="Car Upgradation" icon={<BsGearWideConnected />} />
          <ServiceCard title="Design Vehicles" icon={<BsGearWideConnected />} />
          <ServiceCard title="Engine Repeiar" icon={<BsGearWideConnected />} />
          <ServiceCard title="Car Upgradation" icon={<FaKeycdn />} />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Service;

const TitleCon = styled.div`
  width: 70%;
`;

const SText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Line = styled.div`
  height: 5px;
  width: 27px;
  background-color: #c41a1a;
`;

const Text1 = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-top: 70px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }

  p {
    color: #898989;
    width: 70%;
    font-size: larger;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  margin-top: 10px;
  position: relative;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  flex-direction: column;
  background-color: black;
`;
