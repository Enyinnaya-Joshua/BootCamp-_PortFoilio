import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>KB'S-AUTO</Logo>
          <Nav>
            <NavLinks>
              <NavLink
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#c01a1aed" : "",
                  borderRadius: "20px",
                  textDecoration: "none",
                })}
                to="/"
              >
                <Home>Home</Home>
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#c01a1a" : "",
                  borderRadius: "20px",
                  textDecoration: "none",
                })}
                to="/about"
              >
                <About>About</About>
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#c01a1a" : "",
                  borderRadius: "20px",
                  textDecoration: "none",
                })}
                to="/service"
              >
                <Service>Service</Service>
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#c01a1a" : "",
                  borderRadius: "20px",
                  textDecoration: "none",
                })}
                to="/work"
              >
                <Work>Work</Work>
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "white" : "",
                  textDecoration: "none",
                  border: isActive ? " 1px solid #c01a1a" : "",
                  color: isActive ? "#c01a1a" : "white",
                  borderRadius: "20px",
                })}
              >
                <Contact>Contact</Contact>
              </NavLink>
            </NavLinks>
            <Menu onClick={Toggle}>
              {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </Menu>
          </Nav>
        </Wrapper>
        {show ? (
          <Details>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <Home>Home</Home>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <About>About</About>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/service"
            >
              <Service>Service</Service>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/work"
            >
              <Work>Work</Work>
            </NavLink>
            <NavLink
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Contact>Contact</Contact>
            </NavLink>
          </Details>
        ) : null}
      </Container>
    </div>
  );
};

export default Header;

const Details = styled.div`
  color: white;
  background-color: black;
  transition: all 500ms;
  display: none;
  @media screen and (max-width: 960px) {
    position: absolute;
    z-index: 999;
    border-bottom: 1px solid rgba(129, 129, 129, 0.996);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 100%;
    color: white;
    font-size: large;
    font-weight: 700;
    right: 0;
    top: 10;
  }
`;

const Menu = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: block;
    color: white;
    font-size: 20px;
  }
`;

const About = styled.div`
  color: white;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: white;
    transform: scale(1.1);
    background-color: #c41a1a;
    border-radius: 20px;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
    :hover {
      color: #c41a1a;
      transform: scale(1.1);
      margin-right: 30px;
    }
  }
`;

const Service = styled.div`
  color: white;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: white;
    transform: scale(1.1);
    background-color: #c41a1a;
    border-radius: 20px;
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
    :hover {
      color: #c41a1a;
      transform: scale(1.1);
      margin-right: 30px;
    }
  }
`;

const Work = styled.div`
  cursor: pointer;
  color: white;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: white;
    transform: scale(1.1);
    background-color: #c41a1a;
    border-radius: 20px;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
    :hover {
      color: #c41a1a;
      transform: scale(1.1);
      margin-right: 30px;
    }
  }
`;

const Contact = styled.div`
  border: 1px solid white;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  border-radius: 20px;
  transition: all 390ms;
  :hover {
    border: 1px solid #c41a1a;
    background-color: white;
    color: #c41a1a;
    transform: scale(1.1);
  }

  @media screen and (max-width: 960px) {
    :hover {
      border: 1px solid #c41a1a;
      background-color: white;
      color: #c41a1a;
      transform: scale(1.1);
      margin-right: 30px;
    }
  }
`;

const Home = styled.div`
  color: white;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: white;
    transform: scale(1.1);
    background-color: #c41a1a;
    border-radius: 20px;
  }

  transition: all 390ms;

  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
    :hover {
      color: #c41a1a;
      transform: scale(1.1);
      margin-right: 30px;
    }
  }
`;

const Container = styled.div`
  display: fle;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  height: 70px;
  width: 100%;
  background-color: #1a1a1a;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  transition: all 500ms;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: large;
    width: 100%;
  }
`;

const Logo = styled.div`
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
`;

const Nav = styled.div`
  width: 55%;
  @media screen and (max-width: 960px) {
    display: flex;
    color: white;
    font-size: large;
    width: 50px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-left: 10px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
