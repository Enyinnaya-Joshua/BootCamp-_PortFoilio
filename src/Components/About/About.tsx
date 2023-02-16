import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../assets/6.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container>
        <Section1>
          <First>
            <ImageHold>
              <Image src={img1} />
              <IconHold>
                <BsFillPlayCircleFill />
              </IconHold>
            </ImageHold>
          </First>
          <Second>
            <AboutT>
              <Dash></Dash>
              <Text>About</Text>
            </AboutT>

            <h1>Who am I?</h1>

            <Des>
              <h2>Hi I’m Nikel Jack</h2>
              <p>
                Hi I’m Nikel Jack Augue quam. Primis facilisis quis magnis
                lacinia ac natoque nonummy non posuere neque diam per phasellus,
                eleifend potenti leo massa accumsan malesuada eget ridiculus,
                nostra erat apibus elit aliquam lorem arcu Neque elementum in
                sollicitudin eleifend natoque quisque cum dapibus primis dolor
                eget ipsum pretium. Nonummy hymenaeos Mi dolor. Conubia semper
                nisi conubia magnis magna duis scelerisque potenti elementum
                pharetra venenatis. Condimentum semper dictum praesent nam vel
                bendum elit nisl sagittis Eu iaculis enim aptent a aptent
                euismod posuere rutrum.
              </p>
            </Des>
          </Second>
        </Section1>
        <Section2>
          <Third>
            <Heading>
              <h2>Education and Experience</h2>
              <p>
                Magna metus metus auctor. Hymenaeos luctus tincidunt natoque
                quisque praesent class tempor metus pellentesque ullamcorper sem
                curae.
              </p>
              ;
            </Heading>
            <ExpandEdu>
              <Exp
                bg={show ? "#c41a1a" : "#1a1a1a"}
                onClick={() => setShow(true)}
              >
                Experience
              </Exp>
              ;
              <Edu
                bg={show ? "#1a1a1a" : "#c41a1a"}
                onClick={() => setShow(false)}
              >
                Education
              </Edu>
            </ExpandEdu>

            {show ? (
              <ExpandEduDetail>
                <Content1>
                  <SideBox>2008 - 2010</SideBox>
                  <Text1>
                    <h2>Upwork Market</h2>
                    <p>Jonior Harbad High School, Oraldo</p>

                    <Text1Sub>
                      <p>
                        Aenean metus quisque mauris quisque nascetur platea
                        aenean mattis, venenatis per sociis magna malesuada
                        natoque. Vehicula. Sociis vulputate elit. Eleifend
                        torquent. Ante senectus, sit vulputate elit etiam,
                        massa. Aliquet aliquet ornare penatibus vulputate
                        molestie mollis. Varius varius mus montes ullamcorper.
                      </p>
                    </Text1Sub>
                  </Text1>
                </Content1>
                <Content1>
                  <SideBox>2011 - 2015</SideBox>
                  <Text1>
                    <h2>W3 Schools</h2>
                    <p>Jonior Harbad High School, Oraldo</p>

                    <Text1Sub>
                      <p>
                        Aenean metus quisque mauris quisque nascetur platea
                        aenean mattis, venenatis per sociis magna malesuada
                        natoque. Vehicula. Sociis vulputate elit. Eleifend
                        torquent. Ante senectus, sit vulputate elit etiam,
                        massa. Aliquet aliquet ornare penatibus vulputate
                        molestie mollis. Varius varius mus montes ullamcorper.
                      </p>
                    </Text1Sub>
                  </Text1>
                </Content1>
                <Content1>
                  <SideBox>2016 - Still</SideBox>
                  <Text1>
                    <h2>Themeforest Market</h2>
                    <p>Jonior Harbad High School, Oraldo</p>

                    <Text1Sub>
                      <p>
                        Aenean metus quisque mauris quisque nascetur platea
                        aenean mattis, venenatis per sociis magna malesuada
                        natoque. Vehicula. Sociis vulputate elit. Eleifend
                        torquent. Ante senectus, sit vulputate elit etiam,
                        massa. Aliquet aliquet ornare penatibus vulputate
                        molestie mollis. Varius varius mus montes ullamcorper.
                      </p>
                    </Text1Sub>
                  </Text1>
                </Content1>
              </ExpandEduDetail>
            ) : (
              <ExpandEduDetail2>
                <Content2>
                  <SideBox>Jan 1996 - Feb</SideBox>
                  <Text1>
                    <h2>School Education</h2>
                    <p>Jonior Harbad High School, Oraldo</p>

                    <Text1Sub>
                      <p>
                        Aenean metus quisque mauris quisque nascetur platea
                        aenean mattis, venenatis per sociis magna malesuada
                        natoque. Vehicula. Sociis vulputate elit. Eleifend
                        torquent. Ante senectus, sit vulputate elit etiam,
                        massa. Aliquet aliquet ornare penatibus vulputate
                        molestie mollis. Varius varius mus montes ullamcorper.
                      </p>
                    </Text1Sub>
                  </Text1>
                </Content2>
                <Content2>
                  <SideBox>Jan 1996 - Feb</SideBox>
                  <Text1>
                    <h2>Electrical Engineering</h2>
                    <p>Jonior Harbad High School, Oraldo</p>

                    <Text1Sub>
                      <p>
                        Aenean metus quisque mauris quisque nascetur platea
                        aenean mattis, venenatis per sociis magna malesuada
                        natoque. Vehicula. Sociis vulputate elit. Eleifend
                        torquent. Ante senectus, sit vulputate elit etiam,
                        massa. Aliquet aliquet ornare penatibus vulputate
                        molestie mollis. Varius varius mus montes ullamcorper.
                      </p>
                    </Text1Sub>
                  </Text1>
                </Content2>
                <Content2>
                  <SideBox>Jan 1996 - Feb</SideBox>
                  <Text1>
                    <h2>Training Cource On Electrical</h2>
                    <p>Jonior Harbad High School, Oraldo</p>

                    <Text1Sub>
                      <p>
                        Aenean metus quisque mauris quisque nascetur platea
                        aenean mattis, venenatis per sociis magna malesuada
                        natoque. Vehicula. Sociis vulputate elit. Eleifend
                        torquent. Ante senectus, sit vulputate elit etiam,
                        massa. Aliquet aliquet ornare penatibus vulputate
                        molestie mollis. Varius varius mus montes ullamcorper.
                      </p>
                    </Text1Sub>
                  </Text1>
                </Content2>
              </ExpandEduDetail2>
            )}
          </Third>
        </Section2>
      </Container>
    </div>
  );
};

export default About;

const ExpandEduDetail2 = styled.div``;

const Content2 = styled.div`
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const Text1Sub = styled.div`
  p {
    width: 100%;
    color: #627f76;
  }
`;

const Text1 = styled.div`
  h2 {
    margin-top: 0px;
    margin-bottom: 5px;
    color: white;
  }

  p {
    margin-top: 0px;
    color: #627f76;
  }

  width: 55%;
`;

const SideBox = styled.div`
  /* height: 50px;
  width: 250px; */
  background-color: #c41a1a;
  color: white;
  font-size: 19px;
  font-weight: 500;
  padding: 10px 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content1 = styled.div`
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const ExpandEduDetail = styled.div``;

const Heading = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: white;
    font-size: 30px;
    margin-top: 30px;
  }

  p {
    color: #627f76;
    width: 50%;
    margin-top: 0px;
  }
`;

const Edu = styled.div<{ bg: string }>`
  cursor: pointer;
  height: 70px;
  width: 200px;
  background-color: ${(props) => props.bg};
  margin-right: 5px;
  border-radius: 0px 50px 50px 0px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  font-weight: 500;
`;

const Exp = styled.div<{ bg: string }>`
  cursor: pointer;
  height: 70px;
  width: 200px;
  background-color: ${(props) => props.bg};
  border-radius: 50px 0px 0px 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  font-weight: 500;
`;

const ExpandEdu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
`;

const Third = styled.div`
  width: 100%;
`;

const Section2 = styled.div`
  width: 100%;
`;

const Section1 = styled.div`
  width: 100%;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  margin-bottom: 70px;
`;

const IconHold = styled.div`
  color: #c41a1a;
  border: 3px solid white;
  width: 100px;
  font-size: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: white;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ImageHold = styled.div`
  width: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const Des = styled.div`
  h2 {
    color: #c41a1a;
  }

  p {
    color: #627f76;
  }
`;

const Dash = styled.div`
  height: 3px;
  width: 20px;
  background-color: #c41a1a;
  margin-right: 5px;
`;

const AboutT = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c41a1a; ;
`;

const Text = styled.p`
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-bottom: 70px;
`;

const First = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Second = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  padding-left: 30px;

  p {
    width: 90%;
  }

  h1 {
    margin-top: 0px;
  }
`;
