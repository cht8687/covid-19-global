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
        <Img src="./images/0412/COVID-19 By April 12-01.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-02.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-03.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-04.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-05.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-06.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-07.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-08.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-09.jpg"></Img>
        <Img src="./images/0412/COVID-19 By April 12-10.jpg"></Img>
      </Slider>
    );
  }
}

export default Prediction;
