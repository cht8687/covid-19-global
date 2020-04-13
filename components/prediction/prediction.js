import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
const Img = styled.img``;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const getWorldPredict = location => {
  switch (location) {
    case 'world':
      // code block
      return (
        <Slider {...settings}>
          <Img src="./images/0412/COVID-19 By April 12-00.jpg"></Img>
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
      break;

    case 'australia':
      return (
        <Slider {...settings}>
          <Img src="../images/0412/Aus.png"></Img>
          <Img src="../images/0412/COVID-19 By April 12-00.jpg"></Img>
          <Img src="../images/0412/COVID-19 By April 12-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'france':
      return (
        <Slider {...settings}>
          <Img src="../images/0412/France.png"></Img>
          <Img src="../images/0412/COVID-19 By April 12-00.jpg"></Img>
          <Img src="../images/0412/COVID-19 By April 12-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'usa':
      return (
        <Slider {...settings}>
          <Img src="../images/0412/US.png"></Img>
          <Img src="../images/0412/COVID-19 By April 12-00.jpg"></Img>
          <Img src="../images/0412/COVID-19 By April 12-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'uk':
      return (
        <Slider {...settings}>
          <Img src="../images/0412/UK.png"></Img>
          <Img src="../images/0412/COVID-19 By April 12-00.jpg"></Img>
          <Img src="../images/0412/COVID-19 By April 12-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'canada':
      return (
        <Slider {...settings}>
          <Img src="../images/0412/Canada.png"></Img>
          <Img src="../images/0412/COVID-19 By April 12-00.jpg"></Img>
          <Img src="../images/0412/COVID-19 By April 12-01.jpg"></Img>
        </Slider>
      );
      break;
    default:
  }
};

class Prediction extends React.Component {
  render() {
    const {location} = this.props;
    return <div>{getWorldPredict(location)}</div>;
  }
}

export default Prediction;
