import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const MenuItems = (props) => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={32} color="#546bfb" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Content>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
`;

const Content = styled.View`
  margin: 10px;
`;

const IconView = styled.View`
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  font-weight: 600;
`;

const Text = styled.Text`
  color: #b8bebc;
  font-weight: 600;
`;

export default MenuItems;
