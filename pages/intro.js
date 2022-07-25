import React from 'react';
import Products from './Products';

export default function Intro() {
  return (
    <div>
      <div className="bg-gray-900 h-96 text-white grid grid-cols-1 place-items-center content-center py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <h1 className="text-3xl text-center lg:text-3xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg  text-yellow-500 mx-auto font-extrabold font-sans">
          Buy and Sell Gold at best Market Price
        </h1>
        <p className="flex justify-center w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
          We buy used Gold, scrap gold, second hand gold at best price Online.
          Our well experienced expert will weigh your gold, remove the stone and
          its impurities and quote the today's rate for the given commodities
          and then the instant cash is given in return.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ">
          Free Consultation
        </button>
      </div>
      <div className="bg-gray-900 h-100 text-white grid grid-cols-1 place-items-center content-center py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <h1 className="text-3xl text-center lg:text-3xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg  text-yellow-500 mx-auto font-extrabold font-sans">
          Buy Personalized Jewellery handcrafted by Our well-skilled Goldsmith
        </h1>
        <div className="flex justify-center w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
          <p>
            Get trending{' '}
            <a
              href="/jewellery"
              className="text-amber-500 hover:text-amber-300 hover:underline"
            >
              Jewel
            </a>{' '}
            design ideas from our website, Design your Customized jewellery and
            Submit your inquiry at the following form. Our expert will get back
            to you through whatsapp.
          </p>
        </div>
        <Products/>

      </div>
    </div>
  );
}
