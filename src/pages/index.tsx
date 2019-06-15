import React from 'react';
import styles from './index.css';

class Canvas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      width:document.body.clientWidth,
      height:document.body.clientHeight
    }
  }
  draw() {
    const canvas = document.getElementById("J_canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const goldPoiont = parseInt(this.state.width * 0.618, 10)
      

      ctx.fillStyle = "#FFA500"
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(goldPoiont, 0);
      ctx.lineTo(this.state.width - goldPoiont, this.state.height);
      ctx.lineTo(0, this.state.height);
      ctx.fill();

      ctx.fillStyle = "#dd4a68"
      ctx.beginPath();
      ctx.moveTo(goldPoiont, 0);
      ctx.lineTo(this.state.width, 0);
      ctx.lineTo(this.state.width, this.state.height);
      ctx.lineTo(this.state.width - goldPoiont, this.state.height);
      ctx.fill();

    }
  }
  componentDidMount() {
    this.draw()
  }
  render() {
    return (
    <>
      <canvas id="J_canvas" width={ this.state.width+'px'} height={ this.state.height + 'px'}></canvas>
    </>
    );
  }
}

class Avatar extends React.Component {
  render (){
    return (
      <div className={styles.avatar}></div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
    <div>
      <Avatar/>
      <Canvas/>
    </div>
    );
  }
}

export default Index