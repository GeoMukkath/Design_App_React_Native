import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Logo source={props.logo} />
        <Wrapper>
          <Caption>{props.caption}</Caption>
          <Subtitle>{props.subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  width: 315px;
  height: 280px;
  border-radius: 14px;
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  height: 80px;
  align-items: center;
`;

const Logo = styled.Image`
  height: 40px;
  width: 40px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Caption = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bebc;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 4px;
`;

export default Card;
