import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
const Img = styled.img``;

class Prediction extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <Img src="./images/0.jpeg"></Img>
        <Img src="./images/1.jpeg"></Img>
        <Img src="./images/2.jpeg"></Img>
        <Img src="./images/3.jpeg"></Img>
        <Img src="./images/4.jpeg"></Img>
        <Img src="./images/5.jpeg"></Img>
        <Img src="./images/6.jpeg"></Img>
        <Img src="./images/7.jpeg"></Img>
        <Img src="./images/8.jpeg"></Img>
      </Slider>
    );
  }
}

export default Prediction;
