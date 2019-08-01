import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReactPlayer from 'react-player';
 
export default class extends React.Component {
  render() {
    var divStyle = {
        color: 'white',
        background: 'black',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
      };
      var sliderStyle = {
          height: 'auto'
      }
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={70}
        totalSlides={6}
        visibleSlides={3}
      >
        <Slider style={sliderStyle}>
        <Slide tabIndex={1} index={0}>
            <ReactPlayer width="85%" height="auto" url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>
          </Slide>
          <Slide tabIndex={2} index={1}>
            <ReactPlayer width="85%" height="auto" url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>
          </Slide>
          <Slide tabIndex={3} index={2}>
            <ReactPlayer width="85%" height="auto" url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>
          </Slide>
          <Slide tabIndex={4} index={3}>
            <ReactPlayer width="85%" height="auto" url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>
          </Slide>
          <Slide tabIndex={5} index={4}>
            <ReactPlayer width="85%" height="auto" url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>
          </Slide>
          <Slide tabIndex={6} index={5}>
            <ReactPlayer width="85%" height="auto" url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext style={divStyle} onClick={() => activateLasers()}>Next</ButtonNext>
      </CarouselProvider>
    );
  } 
}

function activateLasers(){
    alert("hello");
}