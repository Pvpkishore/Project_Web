// src/components/AnimatedBackground.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to("body", {
      background: "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
      duration: 10,
      ease: "power1.inOut",
    })
      .to("body", {
        background: "radial-gradient(circle at -4% -12.9%, rgb(74, 98, 110) 0.3%, rgb(30, 33, 48) 90.2%)",
        duration:10,
        ease: "power1.inOut",
      });
  }, [1000]);

  return null;
};

export default AnimatedBackground;
