import React from 'react';
import Nav from './nav';
import Intro from './intro';
import Head from 'next/head';
import Details from './what-we-do';
import Benefit from './benefits';
import Footer from './footer';
import Testimonial from './testimonial';

export default function Home() {
  return (
    <div>
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
      <Details />
      <Benefit/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
