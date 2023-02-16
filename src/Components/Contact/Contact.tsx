import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <ContactIcon>
              <Line></Line>
              <ContactText>Contact</ContactText>
              <Line></Line>
            </ContactIcon>
          </First>
          <Second>
            <h1>Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, tenetur. Velit optio, libero reiciendis nesciunt ex
              eius! Molestias, saepe rem.
            </p>
          </Second>

          <Address>
            <ul>
              <li>
                Address:
                <p>2345 Setwant natrer, 1234, Washing-ton. United States.</p>
              </li>
              <li>
                Phone: <p>(401) 1234 567</p>
              </li>
            </ul>
          </Address>
          <Form>
            <h2>Say Hello!</h2>
            <EmailandAddressHold>
              <Name placeholder="Name" />
              <Email placeholder="Email" />
            </EmailandAddressHold>

            <Subject placeholder="Subject" />

            <Message placeholder="Message" />

            <ButtonHold>
              <Button>Send Message</Button>
            </ButtonHold>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Contact;

const ButtonHold = styled.div`
  width: 73%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  height: 50px;
  width: 170px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 100px;
  background-color: #c41a1a;
  cursor: pointer;

  color: white;
  font-weight: 600;
  font-size: 17px;

  :hover {
    background-color: black;
    border: 1px solid #c41a1a;
    cursor: pointer;
  }
  border: none;

  @media screen and (max-width: 500px) {
    font-size: small;
  }
`;

const Message = styled.textarea`
  width: 85%;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
  height: 200px;
  padding-left: 20px;
  margin-right: 10px;
  background-color: black;
  outline: none;
  border: none;
  border-bottom: 1px solid #818181;
  resize: none;
`;

const Subject = styled.input`
  width: 80%;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: black;
  outline: none;
  border: none;
  border-bottom: 1px solid #818181;
  ::placeholder {
    color: #818181;
  }
`;

const Name = styled.input`
  padding: 10px 15px;
  width: 270px;
  background-color: black;
  outline: none;
  border: none;
  border-radius: 10px;
  border-bottom: 1px solid #818181;
  ::placeholder {
    color: #818181;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

const Email = styled.input`
  padding: 10px 15px;
  margin-left: 15px;
  border-radius: 10px;
  width: 270px;
  background-color: black;
  outline: none;
  border: none;
  border-bottom: 1px solid #818181;
  ::placeholder {
    color: #818181;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
    margin-left: 0px;
  }
`;

const EmailandAddressHold = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 80%;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Address = styled.div`
  ul {
    color: white;
    list-style: none;
    margin-right: 60px;
  }

  p {
    color: #818181;
  }
  margin-top: 40px;
  width: 65%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ContactText = styled.div`
  margin: 0px 20px 0px 20px;
  font-weight: 500;
`;

const Line = styled.div`
  height: 2px;
  width: 20px;
  background-color: #c41a1a;
`;

const ContactIcon = styled.div`
  color: #c41a1a;
  display: flex;
  align-items: center;
`;

const First = styled.div`
  margin-top: 50px;
`;

const Second = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    width: 50%;
    margin-top: 0px;
    color: #818181;
  }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

const Container = styled.div`
  background-color: black;
  width: 100%;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
