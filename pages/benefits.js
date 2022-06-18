import React from 'react';

export default function Benefit() {
  return (
    <div className="bg-gray-900 py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
      <div className="grid grid-cols-3 xs:grid-cols-1 2xs:grid-cols-1 s:grid-cols-1 sm:grid-cols-3 container mx-auto py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <div className="flex justify-center">
          <div className="h-full w-full rounded-l-lg bg-yellow-500 mx-3"></div>
          <div>
            <div>
              <h4 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mr-auto font-extrabold font-sans py-2">
                Heading2
              </h4>
            </div>
            <div>
              <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-full w-full rounded-l-lg bg-yellow-500 mx-3"></div>
          <div>
            <div>
              <h4 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mr-auto font-extrabold font-sans py-2">
                Heading3
              </h4>
            </div>
            <div>
              <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-full w-full rounded-l-lg bg-yellow-500 mx-3"></div>
          <div>
            <div>
              <h4 className="w-2/3 text-xl lg:text-xl xs:text-sm 2xs:text-sm s:text-sm text-yellow-500 mr-auto font-extrabold font-sans py-2">
                Heading1
              </h4>
            </div>
            <div>
              <p className="text-base xs:text-xs 2xs:text-xs s:text-xs sm:text-base  text-gray-400">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
