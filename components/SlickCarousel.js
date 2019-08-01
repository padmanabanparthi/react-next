import React, { Component } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player';

class CustomSlide extends Component {

  render() {
    const { index, ...props } = this.props;
    const cur = this.props.currentSlide + 1;
    if (cur==index) {
      return(
        <div {...props} className={"slide"+index}>
          <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' playing width={300} controls="true"/>
        </div>
      );
    }
    else{
      return(
        <div {...props} className={"slide"+index}>
         Test Content
        </div>
      );
    }
  }
}

export default class SimpleSlider extends Component {
  state = {
    activeSlide: 0,
    activeSlide2: 0,
    currentslide:0
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode:true,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ currentslide: current })
    };
    return (
      <div>
        <h2>beforeChange and afterChange hooks</h2>
        <p>Current slide {this.state.currentslide}</p>
        <p>
          BeforeChange => activeSlide: <strong>{this.state.activeSlide}</strong>
        </p>
        <p>
          AfterChange => activeSlide: <strong>{this.state.activeSlide2}</strong>
        </p>
        <h2>Custom Slides</h2>
        <Slider {...settings}>
          <CustomSlide index={1} currentSlide={this.state.currentslide}/>
          <CustomSlide index={2} currentSlide={this.state.currentslide}/>
          <CustomSlide index={3} currentSlide={this.state.currentslide}/>
          <CustomSlide index={4} currentSlide={this.state.currentslide}/>
          <CustomSlide index={5} currentSlide={this.state.currentslide}/>
          <CustomSlide index={6} currentSlide={this.state.currentslide}/>
        </Slider>
      </div>
    );
  }
}