// let canvas = document.querySelector('#canvas');
// let c = canvas.getContext('2d');

// let wave = {
//     y: canvas.height / 2,
//     length: 100,
//     amplitude: 100,
//     initialAngle: 0
// }

// let r = Math.random() * 255;
// let g = Math.random() * 255;
// let b = Math.random() * 255;

// let increment = 0;

// let animate = () => {
//     c.fillStyle = 'rgba(0, 0, 0, 0.05)'
//     c.fillRect(0, 0, canvas.width, canvas.height);

//     requestAnimationFrame(animate);

//     c.beginPath();
//     c.moveTo(0, canvas.height / 2);
//     for(let i = 0; i < canvas.width; i++){
//         c.lineTo(i, wave.y + Math.sin(i / wave.length + (wave.initialAngle + increment)) * wave.amplitude * Math.sin(increment));
//     }
//     c.strokeStyle = `hsl(10, 70%, 50%)`;
//     c.stroke();

//     increment += 0.02;
// }

// animate()


import React from "react";
class Canvas extends React.Component {
    componentDidMount() {
        let canvas = document.querySelector('canvas');
        canvas.height = window.innerHeight - 7;
        canvas.width = window.innerWidth - 8;
        let c = canvas.getContext('2d');
        
        let mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
        
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        })
        
        window.addEventListener('resize', () => {
            canvas.height = window.innerHeight - 7;
            canvas.width = window.innerWidth - 8;
            init();
        })
        
        
        function Collision(x, y, r, col) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.col = col;
            this.radians = Math.random() * Math.PI * 2;
            this.velocity = 0.05;
            this.distCentre = Math.random() * 40 + 70;
        
            this.lastCent = {
                x: x, y: y
            }
        
            this.draw = (x1, y1) => {
        
                c.beginPath();
                c.strokeStyle = this.col;
                c.lineWidth = this.r;
                c.moveTo(x1, y1);
                c.lineTo(this.x, this.y);
                c.stroke();
                c.closePath();
            }
        
            this.update = () => {
                this.lastCent.x += (mouse.x - this.lastCent.x) * 0.05;
                this.lastCent.y += (mouse.y - this.lastCent.y) * 0.05;
                this.radians += this.velocity;
                let x1 = this.x;
                let y1 = this.y;
                this.x = this.lastCent.x + Math.cos(this.radians) * this.distCentre;
                this.y = this.lastCent.y + Math.sin(this.radians) * this.distCentre;
        
        
                this.draw(x1, y1);
            }
        }
        
        function getDist(x1, y1, x2, y2) {
            let xDist = x1 - x2;
            let yDist = y1 - y2;
            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }
        
        let collide;
        function init() {
            collide = [];
            for (let i = 0; i < 50; i++) {
                let r = Math.random() * 255;
                let g = Math.random() * 255;
                let b = Math.random() * 255;
                let ra = Math.random() * 3 + 2;
                let x = Math.random() * (canvas.width - 2 * ra) + ra;
                let y = Math.random() * (canvas.height - 2 * ra) + ra;
                let color = `rgb(${r}, ${g}, ${b})`;
                collide.push(new Collision(canvas.width / 2, canvas.height / 2, ra, color));
            }
        }
        
        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = 'rgba(0,0,0,0.05)'
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            collide.forEach((element) => {
                element.update();
            });
        }
        init();
        animate();
    }
    render() {
      return(
        <div>
          <canvas ref="canvas" width={640} height={425} />
          {/* <img ref="image" src={cheese} className="hidden" /> */}
        </div>
      )
    }
  }
  export default Canvas