import React from 'react';
import Carousel from 'better-react-carousel';

export default function Testimonial() {
  return (
    <div className="bg-gray-900" id="credibility">
      <h1 className="text-3xl text-center lg:text-3xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg  text-yellow-500 mx-auto font-extrabold font-sans">
        Testimonials
      </h1>
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <div className="bg-gray-900 h-96 text-white grid grid-cols-1 place-items-center content-center">

          <i className="fas fa-3x fa-quote-left"></i>
            <p className="flex justify-center w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-gray-900 h-96 text-white grid grid-cols-1 place-items-center content-center">
          <i className="fas fa-3x fa-quote-left"></i>
            <p className="flex justify-center w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-gray-900 h-96 text-white grid grid-cols-1 place-items-center content-center">
          <i className="fas fa-3x fa-quote-left"></i>
            <p className="flex justify-center w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
