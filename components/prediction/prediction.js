import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import colours from '../../styles/colours';

const NewCarousel = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const Carousel = styled(Grid)`
  margin: 0 auto !important;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
`;

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
      return (
        <Slider {...settings}>
          <Img src="./images/0716/COVID-19 By July 16-00.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-01.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-02.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-03.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-04.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-05.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-06.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-07.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-08.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-09.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-10.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-11.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-12.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-13.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-14.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-15.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-17.jpg"></Img>
          <Img src="./images/0716/COVID-19 By July 16-17.jpg"></Img>
        </Slider>
      );
      break;

    case 'australia':
      return (
        <Slider {...settings}>
          <Img src="../images/0716/Australia.png"></Img>
          <Img src="../images/0716/COVID-19 By July 16-00.jpg"></Img>
          <Img src="../images/0716/COVID-19 By July 16-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'france':
      return (
        <Slider {...settings}>
          <Img src="../images/0716/France.png"></Img>
          <Img src="../images/0716/COVID-19 By July 16-00.jpg"></Img>
          <Img src="../images/0716/COVID-19 By July 16-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'usa':
      return (
        <Slider {...settings}>
          <Img src="../images/0716/USA.png"></Img>
          <Img src="../images/0716/COVID-19 By July 16-00.jpg"></Img>
          <Img src="../images/0716/COVID-19 By July 16-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'uk':
      return (
        <Slider {...settings}>
          <Img src="../images/0716/UK.png"></Img>
          <Img src="../images/0716/COVID-19 By July 16-00.jpg"></Img>
          <Img src="../images/0716/COVID-19 By July 16-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'canada':
      return (
        <Slider {...settings}>
          <Img src="../images/0716/Canada.png"></Img>
          <Img src="../images/0716/COVID-19 By July 16-00.jpg"></Img>
          <Img src="../images/0716/COVID-19 By July 16-01.jpg"></Img>
        </Slider>
      );
      break;
    default:
  }
};

class Prediction extends React.Component {
  render() {
    const {location} = this.props;
    return (
      <>
        <NewCarousel item xs={12} lg={12}>
          Yang's Prediction - By University of Wollongong Associate Prof.
          Shu-Qing Yang
          <br />- Updated July 16th
        </NewCarousel>
        <Carousel item xs={12} lg={6}>
          {getWorldPredict(location)}
        </Carousel>
      </>
    );
  }
}

export default Prediction;
