import React from 'react';
import styles from './index.css';

class Index extends React.Component {
  draw() {
    const canvas = document.getElementById("J_canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (10, 10, 55, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (30, 30, 55, 50);
    }
  }
  render() {
    this.draw()
    return (
    <div>
      <canvas id="J_canvas" width="500px" height="500px"></canvas>
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
