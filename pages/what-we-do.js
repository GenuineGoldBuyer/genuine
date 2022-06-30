import React from 'react';

export default function Details(cities) {
  return (
    <div className="bg-gray-900 ">

      <div className="grid grid-cols-2 container mx-auto xs:grid-cols-1 2xs:grid-cols-1 s:grid-cols-1 sm:grid-cols-2  text-start sm:text-start xs:text-center 2xs:text-center s:text-center gap-4 rounded-4xl py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <div className="h-32 w-full bg-yellow-500"></div>
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
      <div className="grid grid-cols-2 container mx-auto xs:grid-cols-1 2xs:grid-cols-1 s:grid-cols-1 sm:grid-cols-2  text-end sm:text-end xs:text-center 2xs:text-center s:text-center gap-4 rounded-4xl py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <div>
          <h2 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mx-auto font-extrabold font-sans">
            Heading
          </h2>
          <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="h-32 w-full bg-yellow-500"></div>
      </div>
    </div>
  );
}

