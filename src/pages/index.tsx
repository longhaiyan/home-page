import React from 'react';
import styles from './index.css';

class Index extends React.Component {
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

      // ctx.beginPath();
      // ctx.moveTo(0, 0);
      // ctx.lineTo(100, 0);
      // ctx.lineTo(100, 25);
      // ctx.fill();
    }
  }
  componentDidMount() {
    console.log("画")
    this.draw()
  }
  render() {
    return (
    <div>
      <canvas id="J_canvas" width={ this.state.width+'px'} height={ this.state.height + 'px'}></canvas>
    </div>
    );
  }
}

export default Index
// export default function() {

//   draw() {
//     const canvas = document.getElementById("J_canvas");
//     if (canvas.getContext) {
//       const ctx = canvas.getContext("2d");

//       ctx.fillStyle = "rgb(200,0,0)";
//       ctx.fillRect (10, 10, 55, 50);

//       ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//       ctx.fillRect (30, 30, 55, 50);
//     }
//   }
//   this.draw()
//   return (
//     <div>
//       <canvas id="J_canvas" width="100%" height="100%"></canvas>
//     </div>
//   );
// }
