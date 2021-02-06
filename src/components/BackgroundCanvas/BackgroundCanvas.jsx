import React, { useEffect, useRef } from 'react';
import './BackgroundCanvas.css';

// Canvas code

const BackgroundCanvas = (props) => {
  const canvas = useRef(null);
  const contextRef = useRef(null);

  function Particle(x, y, xVel, yVel, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xVel = xVel;
    this.yVel = yVel;
    this.col = '#ffffff';

    this.draw = () => {
      contextRef.current.beginPath();
      contextRef.current.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      contextRef.current.fillStyle = this.col;
      contextRef.current.fill();
    };

    this.update = () => {
      this.x += this.xVel;
      this.y += this.yVel;

      if (
        this.x + this.xVel > canvas.current.width - this.r ||
        this.x + this.xVel < r
      ) {
        this.xVel = -this.xVel;
      }

      if (
        this.y + this.yVel > canvas.current.height - this.r ||
        this.y + this.yVel < r
      ) {
        this.yVel = -this.yVel;
      }
    };
  }

  useEffect(() => {
    if (contextRef.current) {
      canvas.current.style.width = '100%';
      canvas.current.style.height = '100%';
      canvas.current.width = canvas.current.offsetWidth;
      canvas.current.height = canvas.current.offsetHeight;

      const context = canvas.current.getContext('2d');
      contextRef.current = context;

      const Particles = [];
      const createNewParticle = () => {
        const amount = 30;
        for (let i = 0; i < amount; i++) {
          const r = Math.random() * 0.5 + 3;
          const x = Math.random() * (canvas.current.width - r * 2) + r;
          const y = Math.random() * (canvas.current.height - r * 2) + r;
          const xVel = (Math.random() - 0.2) * 6;
          const yVel = (Math.random() - 0.2) * 3;

          let newParticle = new Particle(x, y, xVel, yVel, r);
          Particles.push(newParticle);
        }
      };

      const animate = () => {
        requestAnimationFrame(animate);
        contextRef.current.clearRect(
          0,
          0,
          canvas.current.width,
          canvas.current.height
        );

        for (let i = 0; i < Particles.length; i++) {
          Particles[i].draw();
          Particles[i].update();
        }
      };

      createNewParticle();
      animate();
    }
  }, [canvas]);
  return <canvas className='BackgroundCanvas' ref={canvas} />;
};

export default BackgroundCanvas;
