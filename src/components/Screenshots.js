import React, { Component } from 'react';
import styled from 'styled-components';

const ScreenshotsW = styled.div`
  position: relative;
  width: 100vw;
  left: -50vw;
  margin-left: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #222;
  background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  border-top: 2px solid silver;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const InnerW = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
`;

const ImgW = styled.div`
  position: relative;
  width: 30%;
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
  width: 30%;
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
        <InnerW>
          {this.generateScreenshots(this.props.imgs)}
        </InnerW>
      </ScreenshotsW>
    );
  }
}

export default Screenshots;