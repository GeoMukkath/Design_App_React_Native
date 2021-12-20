import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo:
      
  };

  componentDidMount() {
    fetch("https://uifaces.co/api", {
      method: "GET",
      headers: {
        "X-API-KEY": "A5969C9E-E9E245E7-912C0173-C4802798",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          photo: response.photo,
        });
      });
  }
  
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

export default Avatar;
