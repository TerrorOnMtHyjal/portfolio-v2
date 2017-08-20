import React, { Component } from 'react';
import styled from 'styled-components';

const ScreenshotsW = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImgW = styled.div`
  position: relative;
  width: 25vw;
  transition: all 0.2s ease-in-out;
  margin-bottom: 3vh;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    position: absolute;
    font-size: 3em;
    content: ",";
    bottom: -0.1em;
    right: -0.3em;
  }
`;

const ImgFiller = styled.div`
  width: 25vw;
  height: 0;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

class Screenshots extends Component {

  generateScreenshots(imgs){
    let imgArray = imgs.map((img) => {
      return (
        <ImgW>
          <Img src={img} />
        </ImgW>
      )
    });

    imgArray.push(<ImgFiller/>,<ImgFiller/>);

    return imgArray;
  }

  render() {
    return (
      <ScreenshotsW>
        {this.generateScreenshots(this.props.imgs)} 
      </ScreenshotsW>
    );
  }
}

export default Screenshots;