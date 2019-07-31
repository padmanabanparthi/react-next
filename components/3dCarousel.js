import React,{Component} from 'react';
import {Carousel} from '3d-react-carousal';
import ReactPlayer from 'react-player';

class HeaderCarousel extends Component{
    constructor(props) {
        super(props)
        this.state = {
          ssrDone: false
        }
      }
    
      componentDidMount() {
        this.setState({ ssrDone: true, online: navigator.onLine })
      }
    
      render() {
        if(!this.state.ssrDone) {
          return (
            <div>loading...</div>
          )
        }
        let slides = [
            <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>,
            <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>,
            <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>,
            <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>  ];
            return(
                <Carousel slides={slides}/>
            );
      }
}

export default HeaderCarousel;