import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import { Notifications } from "../components/Icon";
import Logo from "../components/Logo";
import Courses from "../components/Courses";
import Menu from "../components/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        Easing: Easing.in(),
        useNativeDriver: false,
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 0.6,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        Easing: Easing.out(),
        useNativeDriver: false,
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Image source={require("../assets/avatar.jpg")} />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>Geo</Name>
                <Notifications
                  style={{ position: "absolute", right: 20, top: 15 }}
                />
              </TitleBar>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => {
                  return (
                    <Logo image={logo.image} text={logo.text} key={index} />
                  );
                })}
              </ScrollView>
              <Subtitle>Continue learning</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 20 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        this.props.navigation.push("Section");
                      }}
                    >
                      <Card
                        title={card.title}
                        image={card.image}
                        logo={card.logo}
                        caption={card.caption}
                        subtitle={card.subtitle}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
              <Subtitle>Popular courses</Subtitle>
              <ScrollView>
                {courses.map((course, index) => {
                  return (
                    <Courses
                      key={index}
                      image={course.image}
                      logo={course.logo}
                      subtitle={course.subtitle}
                      title={course.title}
                      avatar={course.avatar}
                      caption={course.caption}
                      author={course.author}
                    />
                  );
                })}
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma",
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift",
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch",
  },
];

const cards = [
  {
    title: "React Native",
    image: require("../assets/background15.jpg"),
    caption: "React Native ",
    subtitle: "1 of 4 sections",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Swift",
    image: require("../assets/background12.jpg"),
    caption: "Swift ",
    subtitle: "2 of 4 sections",
    logo: require("../assets/logo-swift.png"),
  },
  {
    title: "Invision Studio",
    image: require("../assets/background13.jpg"),
    caption: "Studio",
    subtitle: "3 of 4 sections",
    logo: require("../assets/logo-studio.png"),
  },
  {
    title: "Sketch",
    image: require("../assets/background14.jpg"),
    caption: "Sketch",
    subtitle: "4 of 4 sections",
    logo: require("../assets/logo-sketch.png"),
  },
];

const Image = styled.Image`
  height: 40px;
  width: 40px;
  padding-left: 30px;
  border-radius: 22px;
`;

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Geo Mukkath",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers and Devs",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Geo Mukkath",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Geo Mukkath",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Geo Mukkath",
    avatar: require("../assets/avatar.jpg"),
    caption: "Complete guide to designing a site using a design tool",
  },
];

const Subtitle = styled.Text`
  font-weight: 600;
  color: #b8bebc;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bebc;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 10%;
  padding-left: 20%;
`;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
