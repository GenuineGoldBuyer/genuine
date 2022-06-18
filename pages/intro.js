import React from 'react';
import Image from 'next/image';
import Necklace from '../public/img/Necklace.png';

export default function Intro() {
  return (
    <div>
      <div className="bg-gray-900 h-96 text-white grid grid-cols-1 place-items-center content-center">
        <h1 className="text-3xl text-center lg:text-3xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg  text-yellow-500 mx-auto font-extrabold font-sans">
          Buy and Sell Gold at best Market Price
        </h1>
        <p className="flex justify-center w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s.
        </p>
        <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ">
          Free Consultation
        </button>
      </div>
      <div className=" bg-gray-900">
        <div className="grid grid-cols-2 place-items-center align-middle">
          <div className="w-2/3 text-center text-white items-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium ml-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div className="mr-auto">
            <Image src={Necklace} width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-96">
        <div className="flex justify-center  py-7 md:py-5 sm:py-7 xs:py-5 2xs:py-5 s:py-5">
          <div>
            <h2 className="text-3xl text-center lg:text-3xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg text-yellow-500 mx-auto font-extrabold font-sans">
              Lorem Ipsum
            </h2>
            <p className="flex justify-center xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl lg:text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium text-white py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-4 xs:grid-cols-2 2xs:grid-cols-2 s:grid-cols-2 sm:grid-cols-2 gap-4 place-content-center content-center mx-auto xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
          <div>
            <h2 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mx-auto font-extrabold font-sans">
              Heading
            </h2>
            <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h2 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mx-auto font-extrabold font-sans">
              Heading
            </h2>
            <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h2 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mx-auto font-extrabold font-sans">
              Heading
            </h2>
            <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h2 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mx-auto font-extrabold font-sans">
              Heading
            </h2>
            <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
