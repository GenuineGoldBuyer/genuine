import Nav from '../nav';
import Footer from '../footer';
import Link from "next/link";
import React from 'react';
import Head from 'next/head';

export default function City({ cities }) {
  return (
    <div>
      <Head>
        <title>Gold</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta
          name="keywords"
          content="car parts in uae, spare parts in dubai, spare parts sharjah"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/search-by-cities-in-uae/"
        />
        <meta
          property="og:description"
          content="Online Car Auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Dubai, Ajman, Abu Dhabi, Jumeirah, Ajman, Al Quoz."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/search-by-cities-in-uae/"
        />
        <meta
          property="twitter:title"
          content="Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <Nav />
      <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
        {cities.map(post => (
          <div key={post.id}>
            <Link
              href="/search-by-cities-in-uae/[city]"
              as={'/search-by-cities-in-uae/' + post.city}
            >
              <a title={'car spare parts in ' + post.city}>
                <main className="text-center text-base xs:text-xs xs:text-center font-mono text-blue-500 underline hover:text-blue-700 focus:text-blue-700 border border-gray-100">
                  {post.city}
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const cityresponse = await fetch(`https://genuineapi.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  if (!cities) {
    return {
      notFound: true
    };
  }

  return {
    props: { cities }
  };
}
