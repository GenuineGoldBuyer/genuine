import React from 'react';
import Image from 'next/image';
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
        <p className="flex justify-center w-2/3 xs:mx-3 2xs:mx-3 sm:mx-5 s:mx-2 text-center text-xl xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
          <div>
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
          </div>
        </p>
        <Products/>
        <div className="grid grid-cols-6 xs:grid-cols-1 2xs:grid-cols-1 s:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 place-items-center mx-auto py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
          <div className="text-center">
            <a
              href="/jewellery/Bangle"
              className="text-center text-amber-500 hover:text-amber-300 hover:underline"
            >
              <Image src="/img/icons/Bangle.png" height="80" width="80" />
              <p className="text-center text-amber-500 hover:text-amber-300 hover:underline">
                BANGLES
              </p>
            </a>
            <p className="text-white ">View Bangle designs {'>>'}</p>
          </div>
          <div className="text-center">
            {' '}
            <a href="/jewellery/Bracelet">
              <Image src="/img/icons/Bracelet.png" height="80" width="80" />
              <p className="text-center text-amber-500 hover:text-amber-300 hover:underline">
                BRACELET
              </p>
              <p className="text-white ">View Bracelet designs {'>>'}</p>
            </a>
          </div>
          <div className="text-center">
            <a href="/jewellery/Chain">
              <Image src="/img/icons/Chain.png" height="80" width="80" />
              <p className="text-center text-amber-500 hover:text-amber-300 hover:underline">
                CHAIN
              </p>
              <p className="text-white ">View Chain designs {'>>'}</p>
            </a>
          </div>
          <div className="text-center">
            <a
              href="/jewellery/Earring"
              className="text-center text-amber-500 hover:text-amber-300 hover:underline"
            >
              <Image src="/img/icons/Earring.png" height="80" width="80" />
              <p className="text-center text-amber-500 hover:text-amber-300 hover:underline">
                EARRING
              </p>
              <p className="text-white ">View Earring designs {'>>'}</p>
            </a>
          </div>
          <div className="text-center">
            <a href="/jewellery/Necklace">
              <Image src="/img/icons/Necklace.png" height="80" width="80" />
              <p className="text-center text-amber-500 hover:text-amber-300 hover:underline">
                NECKLACE
              </p>
            </a>
            <p className="text-white ">View Necklace designs {'>>'}</p>
          </div>
          <div className="text-center">
            <a href="/jewellery/Ring">
              <Image
                src="/img/icons/Ring.png"
                className="shadow-lg"
                height="80"
                width="80"
              />
              <p className="text-center text-amber-500 hover:text-amber-300 hover:underline">
                RING
              </p>
              <p className="text-white ">View Ring designs {'>>'}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  // forms

  const cityresponse = await fetch(`https://genuineapi.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  return {
    props: {
      cities
    }
  };
}
