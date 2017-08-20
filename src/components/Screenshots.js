import React, { Component } from 'react';
import styled from 'styled-components';

const ScreenshotsW = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Screenshot = styled.div`
  background-image: url('${props => props.img}');
  background-size: cover;
  width: 20vw;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

class Screenshots extends Component {

  generateScreenshots(imgs){
    console.log(imgs)
    return imgs.map((img) => {
      return <Screenshot img={img}/>
    });
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