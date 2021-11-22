import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './ipl.css';

const Ipl = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div>
      <button onClick={() => sliderRef.current.slickNext()}>next</button>
      <button onClick={() => sliderRef.current.slickPrev()}>prev</button>
      <div></div>
      <div>
        <Slider
          dots
          dotsClass='slick-dots line-indicator'
          ref={sliderRef}
          slidesToShow={1}
          slidesToScroll={1}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {Array(3)
            .fill('')
            .map(() => (
              <div>
                <img
                  style={{
                    width: '100%',
                    objectFit: 'contain',
                    borderRadius: 10,
                  }}
                  src='https://resources.platform.iplt20.com/photo-resources/2021/05/02/25eae35d-5165-4608-b666-a27501622f02/H4pPnjIC.jpg?width=390&height=219'
                  alt=''
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Ipl;
