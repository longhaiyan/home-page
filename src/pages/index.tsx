import React from 'react';
import styles from './index.css';

class Canvas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      width:document.body.clientWidth,
      height:document.body.clientHeight,
    }
  }
  draw() {
    const canvas = document.getElementById("J_canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const goldPoiont = parseInt(this.state.width * 0.618, 10)

      // 左边
      ctx.fillStyle = "#b8cccd"
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(goldPoiont, 0);
      ctx.lineTo(this.state.width - goldPoiont, this.state.height);
      ctx.lineTo(0, this.state.height);
      ctx.fill();

      // 右边
      ctx.fillStyle = "#c4d0b8"
      ctx.beginPath();
      ctx.moveTo(goldPoiont, 0);
      ctx.lineTo(this.state.width, 0);
      ctx.lineTo(this.state.width, this.state.height);
      ctx.lineTo(this.state.width - goldPoiont, this.state.height);
      ctx.fill();

    }
  }
  drawLeft(){
    const canvas = document.getElementById("J_canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const goldPoiont = parseInt(this.state.width * 0.618, 10)
      const add = 10;
      let i = 0
      const timer = setInterval(() => {
        ctx.fillStyle = "#b8cccd"
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(goldPoiont + (add * i), 0);
          ctx.lineTo(this.state.width - goldPoiont + (add * i), this.state.height);
          ctx.lineTo(0, this.state.height);
          ctx.fill();
        if((this.state.width - goldPoiont + (add * i)) > this.state.width){
          clearInterval(timer)
        } else {
          i++;
        }
        
      }, 10)

    }
  }

  drawRight(){
    const canvas = document.getElementById("J_canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const goldPoiont = parseInt(this.state.width * 0.618, 10)
      const add = 10;
      let i = 0
      const timer = setInterval(() => {
        ctx.fillStyle = "#c4d0b8"
        ctx.beginPath();
        ctx.moveTo(goldPoiont - (add * i), 0);
        ctx.lineTo(this.state.width, 0);
        ctx.lineTo(this.state.width, this.state.height);
        ctx.lineTo(this.state.width - goldPoiont - (add * i), this.state.height);
        ctx.fill();

        if(goldPoiont - (add * i) < 0){
          clearInterval(timer)
        } else {
          i++;
        }
        
      }, 10)

    }
  }

  componentDidMount() {
    this.draw()
  }

  handleMouseDown(e) {
    console.log('isLeft :', this.isLeft(e));
    if(this.isLeft(e)){
      this.drawLeft()
    } else {
      this.drawRight()
    }
    
  }

  isLeft({clientX, clientY}){
    let width = this.state.width
    let height = this.state.height
    let target = (height - clientY) * width * (0.618 * 2 -1) / height + width * (1 - 0.618)

    return clientX < target
  }

  render() {
    return (
    <>
      <canvas id="J_canvas" onMouseDown={(e)=>this.handleMouseDown(e)} width={ this.state.width+'px'} height={ this.state.height + 'px'}></canvas>
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