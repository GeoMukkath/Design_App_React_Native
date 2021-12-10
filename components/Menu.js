import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItems from "./MenuItems";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU",
      }),
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Geo Mukkath</Title>
          <SubTitle>Developer @ Maxwell GeoSystems</SubTitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{ position: "absolute", top: 120, left: "45%", zIndex: 20 }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => {
            return (
              <MenuItems
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </Content>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  position: absolute;
  background: #fff;
  height: 100%;
  width: 100%;
  z-index: 50;
`;

const AnimatedContainer = new Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
  padding: 80px;
`;

const CloseView = styled.View`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  font-size: 10px;
  color: white;
  margin-top: 10px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings",
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments",
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course",
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!",
  },
];

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
