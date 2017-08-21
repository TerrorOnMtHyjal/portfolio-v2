import React, { Component } from 'react';
import styled from 'styled-components';

const ScreenshotsW = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: auto;
  // background-color: #222;
  // background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  // border-top: 2px solid silver;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const ImgW = styled.div`
  position: relative;
  width: 40%;
  transition: all 0.2s ease-in-out;
  margin: 2em 0;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    position: absolute;
    font-size: 2em;
    content: ",";
    color: white;
    bottom: 0;
    right: -0.3em;
  }
`;

const ImgFiller = styled.div`
  width: 40%;
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

    imgArray.push(<ImgFiller/>, <ImgFiller/>);

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