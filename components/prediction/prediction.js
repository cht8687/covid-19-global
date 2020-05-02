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
          <Img src="./images/0501/COVID-19 By May 1-00.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-01.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-02.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-03.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-04.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-05.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-06.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-07.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-08.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-09.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-10.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-11.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-12.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-13.jpg"></Img>
          <Img src="./images/0501/COVID-19 By May 1-14.jpg"></Img>
        </Slider>
      );
      break;

    case 'australia':
      return (
        <Slider {...settings}>
          <Img src="../images/0501/Australia.png"></Img>
          <Img src="../images/0501/COVID-19 By May 1-00.jpg"></Img>
          <Img src="../images/0501/COVID-19 By May 1-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'france':
      return (
        <Slider {...settings}>
          <Img src="../images/0501/France.png"></Img>
          <Img src="../images/0501/COVID-19 By May 1-00.jpg"></Img>
          <Img src="../images/0501/COVID-19 By May 1-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'usa':
      return (
        <Slider {...settings}>
          <Img src="../images/0501/USA.png"></Img>
          <Img src="../images/0501/COVID-19 By May 1-00.jpg"></Img>
          <Img src="../images/0501/COVID-19 By May 1-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'uk':
      return (
        <Slider {...settings}>
          <Img src="../images/0501/UK.png"></Img>
          <Img src="../images/0501/COVID-19 By May 1-00.jpg"></Img>
          <Img src="../images/0501/COVID-19 By May 1-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'canada':
      return (
        <Slider {...settings}>
          <Img src="../images/0501/Canada.png"></Img>
          <Img src="../images/0501/COVID-19 By May 1-00.jpg"></Img>
          <Img src="../images/0501/COVID-19 By May 1-01.jpg"></Img>
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
          <br />- Updated 01 May
        </NewCarousel>
        <Carousel item xs={12} lg={6}>
          {getWorldPredict(location)}
        </Carousel>
      </>
    );
  }
}

export default Prediction;
