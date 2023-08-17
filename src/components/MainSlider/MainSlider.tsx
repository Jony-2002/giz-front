"use client";
import Carousel from 'react-bootstrap/Carousel';

import "./MainSlider.css"

export default function MainSlider() {
  return (
    <div className="px-28 pt-5 main-slider">
      <Carousel>
        <Carousel.Item>
          <div className='slider__main-1 w-full h-[500px]'></div>
          <Carousel.Caption>
            <div>
              <p>Social Development</p>
              <h3 className='font-bold'>Women promote peace</h3>
              <p className='text-sm'>An information network is supporting women activists to boost their participation in peace processes.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider__main-2 w-full h-[500px]'></div>
          <Carousel.Caption>
            <div>
              <p>Social Development</p>
              <h3 className='font-bold'>Women promote peace</h3>
              <p className='text-sm'>An information network is supporting women activists to boost their participation in peace processes.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider__main-3 w-full h-[500px]'></div>
          <Carousel.Caption>
            <div>
              <p>Social Development</p>
              <h3 className='font-bold'>Women promote peace</h3>
              <p className='text-sm'>An information network is supporting women activists to boost their participation in peace processes.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}