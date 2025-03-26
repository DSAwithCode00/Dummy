import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 1 }
    );
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full h-[calc(100vh-80px)]">
      <div
        ref={textRef}
        className="flex flex-col items-center justify-center gap-3 p-4 md:w-1/2 text-center"
      >
        <h1 className="text-6xl font-medium text-gray-300 md:text-7xl">We don't</h1>
        <h1 className="text-6xl font-medium text-gray-300 md:text-7xl">just think.</h1>
        <h1 className="text-6xl font-medium text-black dark:text-white md:text-7xl">
          We do<span className="text-blue-500">.</span>
        </h1>
      </div>
      <button
        ref={buttonRef}
        className="bg-blue-500 py-3 px-6 rounded-full text-white mt-4 inline-flex items-center justify-center text-xl"
      >
        <NavLink to="/login"> Get Started</NavLink>
        <i className="bx bx-right-arrow-alt text-2xl rotate-[45deg] ml-2"></i>
      </button>
    </section>
  );
};

export default Hero;
