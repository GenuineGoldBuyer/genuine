import React from 'react';
import Image from 'next/image';
export default function Products() {
  return (
    <div>
      <div className="grid grid-cols-6 xs:grid-cols-1 2xs:grid-cols-1 s:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 place-items-center mx-auto py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <div className="text-center m-5">
          <a
            href="/jewellery/Bangle"
            className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline"
          >
            <Image src="/img/icons/Bangle.png" height="80" width="80" />
            <p className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline">
              BANGLES
            </p>
          </a>
          <p className="text-white ">View Bangle designs {'>>'}</p>
        </div>
        <div className="text-center m-5">
          {' '}
          <a href="/jewellery/Bracelet">
            <Image src="/img/icons/Bracelet.png" height="80" width="80" />
            <p className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline">
              BRACELET
            </p>
            <p className="text-white ">View Bracelet designs {'>>'}</p>
          </a>
        </div>
        <div className="text-center m-5">
          <a href="/jewellery/Chain">
            <Image src="/img/icons/Chain.png" height="80" width="80" />
            <p className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline">
              CHAIN
            </p>
            <p className="text-white ">View Chain designs {'>>'}</p>
          </a>
        </div>
        <div className="text-center m-5">
          <a
            href="/jewellery/Earring"
            className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline"
          >
            <Image src="/img/icons/Earring.png" height="80" width="80" />
            <p className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline">
              EARRING
            </p>
            <p className="text-white ">View Earring designs {'>>'}</p>
          </a>
        </div>
        <div className="text-center m-5">
          <a href="/jewellery/Necklace">
            <Image src="/img/icons/Necklace.png" height="80" width="80" />
            <p className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline">
              NECKLACE
            </p>
          </a>
          <p className="text-white ">View Necklace designs {'>>'}</p>
        </div>
        <div className="text-center m-5">
          <a href="/jewellery/Ring">
            <Image
              src="/img/icons/Ring.png"
              className="shadow-lg"
              height="80"
              width="80"
            />
            <p className="text-center align-center text-amber-500 hover:text-amber-300 hover:underline">
              RING
            </p>
            <p className="text-white">View Ring designs {'>>'}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
