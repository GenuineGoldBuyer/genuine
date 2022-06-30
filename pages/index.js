import React from 'react';
import Nav from './nav';
import Intro from './intro';
import Head from 'next/head';
import Details from './what-we-do';
import Benefit from './benefits';
import Footer from './footer';
import Testimonial from './testimonial';
import Link from 'next/link';
import Chennai from '../public/img/chennai.png';
import Image from 'next/image';
import Countup from './Countup';

export default function Home({ cities }) {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Buy and Sell Gold at Best Market Price in Chennai</title>
        <meta
          property="og:title"
          content="Quick Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta
          name="keywords"
          content="car parts, spare parts, auto spare parts online, best auto parts, auto spare parts in dubai, auto spare parts uae"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta property="og:url" content="https://www.emirates-car.com" />
        <meta
          property="og:description"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta property="twitter:url" content="https://www.emirates-car.com" />
        <meta
          property="twitter:title"
          content="Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta
          property="twitter:description"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <Nav />
      <Intro />
      <h1 className="text-3xl text-center lg:text-3xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg text-yellow-500 mx-auto font-extrabold font-sans py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <Image src={Chennai} height={70} width={70} />
        Sell your Gold at best Market rate in Chennai
      </h1>
      <Countup/>

      <h1 className="text-3xl text-center lg:text-3xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg text-yellow-500 mx-auto font-extrabold font-sans py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <Image src={Chennai} height={70} width={70} />
        Sell your Gold at your Location in Chennai
      </h1>

      <div className=" grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7  xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7 mx-auto">
        {cities.map(post => (
          <div key={post.id}>
            <Link
              href="/search-by-cities-in-uae/[city]"
              as={'/search-by-cities-in-uae/' + post.city}
            >
              <a>
                <main className="border h-full  hover:border-amber-600 py-3 bg-yellow-100">
                  <p className="text-center text-amber-500 hover:text-amber-300 hover:underline text-lg lg:text-lg xs:text-xs 2xs:text-xs s:text-xs sm:text-base font-heading font-mono font-medium   ">
                    <Image src={Chennai} height={30} width={30} />{' '}
                    {post.city.toUpperCase()}{' '}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}{' '}
      </div>
      <Details />
      <Benefit />
      <Testimonial />
      <Footer />
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
