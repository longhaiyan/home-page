import React from 'react';
import styles from './index.css';

class Index extends React.Component {
  draw() {
    const canvas = document.getElementById("J_canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const goldPoiont = 889
      const width = document

      ctx.fillStyle = "#FFA500"
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(goldPoiont, 0);
      ctx.lineTo(1440 - goldPoiont, 789);
      ctx.lineTo(0, 789);
      ctx.fill();

      ctx.fillStyle = "#dd4a68"
      ctx.beginPath();
      ctx.moveTo(goldPoiont, 0);
      ctx.lineTo(1440, 0);
      ctx.lineTo(1440, 789);
      ctx.lineTo(1440 - goldPoiont, 789);
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
      <canvas id="J_canvas" width="1440px" height="789px"></canvas>
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
