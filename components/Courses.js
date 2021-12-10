import React from "react";
import styled from "styled-components";

const Courses = (props) => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Logo source={props.logo} />
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
        <Wrapper>
          <Avatar source={props.avatar} />
          <Caption>{props.caption}</Caption>
          <Author>Taught by {props.author}</Author>
        </Wrapper>
      </Cover>
    </Container>
  );
};

const Container = styled.View`
  height: 355px;
  width: 355px;
  background-color: white;
  border-radius: 14px;
  margin: 20px;
`;

const Cover = styled.View`
  height: 260px;
  width: 355px;
`;

const Image = styled.Image`
  width: 355px;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Logo = styled.Image`
  height: 50px;
  width: 50px;
  margin-left: 150px;
  margin-top: 30px;
`;

const Subtitle = styled.Text`
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  margin-top: 4px;
  margin-left: 20px;
  margin-top: 60px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-left: 20px;
  margin-top: 10px;
  width: 250px;
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;

  position: relative;
  padding-top: 150px;
  height: 105px;
`;

const Avatar = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 22px;
  position: absolute;
  margin-left: 20px;
  margin-top: 50px;
`;

const Caption = styled.Text`
  color: black;
  font-size: 10px;
  font-weight: 600;
  position: absolute;
  width: 270px;
  position: absolute;
  margin-top: 50px;
  margin-left: 65px;
`;

const Author = styled.Text`
  color: lightgrey;
  font-size: 10px;
  font-weight: 600;
  position: absolute;
  width: 270px;
  margin-top: 65px;
  margin-left: 65px;
`;

export default Courses;
