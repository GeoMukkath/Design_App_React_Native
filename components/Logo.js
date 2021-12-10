import React from "react";
import styled from "styled-components";

const Logo = (props) => {
  return (
    <Container>
      <Image source={props.image} />
      <Text>{props.text}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  align-items: center;
  margin: 10px;
  margin-left: 20px;
`;

const Image = styled.Image`
  height: 36px;
  width: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;

export default Logo;
