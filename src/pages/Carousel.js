import React, { useState, useEffect, useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';
import styled from './Carousel.module.css';

const colors = [
  'https://images.unsplash.com/photo-1553882951-9c3dab4a50cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1597571063304-81f081944ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
];
const delay = 2500;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <div>
      <div className={styled.slideshow}>
        <div
          className={styled.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((img, index) => (
            <img key={index} className={styled.slide} src={img}></img>
          ))}
        </div>

        <div className={styled.slideshowDots}>
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`${styled.slideshowDot} ${
                index === idx ? styled.active : ''
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
