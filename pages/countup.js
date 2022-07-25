import React from 'react';
import Image from 'next/image';

export default function Countup() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-gray-900 h-100 text-white  py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7 w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2">
          Send us inquiry through the <a
            href="#formindex"
            className="text-amber-500 hover:text-amber-300 hover:underline"
          >form below</a>. We contact you back through
          whatsapp or call you back. We come to your location to weigh your gold
          in front of you. Please note that the any stones or impurities in the
          gold will be removed before weighing. And the best market price will
          be quoted and instant cash is given on the spot. To read the
          credibility of our trusted dealer, see{' '}
          <a
            href="#credibility"
            className="text-amber-500 hover:text-amber-300 hover:underline"
          >
            Testimonial section.
          </a>{' '}
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 2xs:grid-cols-1 s:grid-cols-1 text-center xl:grid xl:grid-cols-3 lg:grid  xl:gap-3 gap-2 xs:grid  xs:gap-1 2xs:gap-1 2xs:text-sm  md:px-2  xs:pt-5 mx-8 2xs:mx-5 s:mx-4 xs:mx-5 py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <div className="font-extrabold uppercase bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-amber-800 lg:text-base  font-semibold font-mono">
            <i className="fab fa-wpforms fa-2x"></i>
          </h1>
          <p className="text-xl lg:text-base sm:text-xs xs:text-xs s:text-xs md:text-sm font-semibold font-mono py-3">
            STEP-1
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold p-1">
            Send Inquiries
          </h1>
        </div>
        <div className="font-extrabold  uppercase bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-amber-800 lg:text-base sm:text-xs md:text-sm font-extrabold">
            <i className="fas fa-phone fa-2x"></i>{' '}
          </h1>

          <p className="text-xl lg:text-base sm:text-xs xs:text-xs s:text-xs md:text-sm font-semibold font-mono py-3">
            STEP-2
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            Get a Callback
          </h1>
        </div>
        <div className="font-extrabold uppercase bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-amber-800 lg:text-base  font-semibold font-mono">
            <i className="fas fa-truck fa-2x"></i>
          </h1>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            STEP-3
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            We Come to your location
          </h1>
        </div>
        <div className="font-extrabold uppercase bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-amber-800 lg:text-base font-semibold">
            <i class="fas fa-3x fa-balance-scale"></i>
          </h1>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            STEP-4
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            Your Gold is weighed
          </h1>
        </div>
        <div className="font-extrabold uppercase bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-amber-800 lg:text-base font-semibold">
            <i className="fa fa-diamond fa-2x" aria-hidden="true"></i>
          </h1>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            STEP-5
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            Any stone or Impurities are removed
          </h1>
        </div>
        <div className="font-extrabold uppercase bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-amber-800 lg:text-base font-semibold">
            <i className="fas fa-3x fa-rupee-sign"></i>
          </h1>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            STEP-6
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            GET INSTANT CASH
          </h1>
        </div>
      </div>
    </div>
  );
}
