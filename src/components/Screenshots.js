import React, { Component } from 'react';
import styled from 'styled-components';

const ScreenshotsW = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #222;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 1em -50vw;
  padding: 0 5vw;
`;

const ImgW = styled.div`
  position: relative;
  width: 30vw;
  transition: all 0.2s ease-in-out;
  margin: 3em 0;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    position: absolute;
    font-size: 3em;
    content: ",";
    color: white;
    bottom: 0;
    right: -0.3em;
  }
`;

const ImgFiller = styled.div`
  width: 30vw;
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