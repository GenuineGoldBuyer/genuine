import Nav from '../../../nav';
import Footer from '../../../footer';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import img from "../../../../public/img/GoldCubanLink/gold_cuban_link_1.png";

export default function Car({ category, items }) {
  return (
    <div className="bg-gray-900">
      <Nav />
      <Head>
        <title>
          {category} - {items}&nbsp; Car Auto Spare Parts Order Online in UAE -
          Best Prices
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={
            category +
            ' - ' +
            items +
            ' Car Auto Spare Parts in UAE - Best Prices | Emirates-car.com'
          }
        />
        <meta
          name="keywords"
          content={
            category +
            ' ' +
            items +
            ' spare parts,' +
            category +
            ' ' +
            items +
            ' car spare parts,' +
            items +
            ' auto parts,' +
            items +
            ' ' +
            ' spares,' +
            items +
            ' auto parts,' +
            items +
            ' auto parts in uae,' +
            category +
            ' ' +
            items +
            ' auto parts in uae'
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={
            'https://www.emirates-car.com/search-by-category/' +
            category +
            '/' +
            items
          }
        />
        <meta
          property="og:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your' +
            category +
            items +
            ' automobile spare parts needs - Car / Jeep / Van / Truck / Buses in Your city.'
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content={
            'https://www.emirates-car.com/search-by-category/' +
            category +
            '/' +
            items
          }
        />
        <meta
          property="twitter:title"
          content={
            category +
            ' - ' +
            items +
            ' Car Auto Spare Parts in UAE Order Online - Best Prices | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your ' +
            category +
            ' ' +
            items +
            ' automobile spare parts needs - Car / Jeep / Van / Truck / Buses in Your city.'
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
        <div className="w-3/4 2xs:w-full xs:w-full s:w-full sm:w-full xs:grid xs:grid-cols-1">

          <main className="xs:mx-auto 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 shadow-sm">
            <div>
              <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-yellow-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5">
                FILL OUT THE INQUIRY FOR
                <nobr className="text-yellow-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                  &nbsp;{category} - {items}{' '}
                </nobr>
                BELOW
              </div>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 underline pb-3">
                <nobr className="text-yellow-400 no-underline">
                  <i className="fal fa-car-garage"></i> Current
                  path:&nbsp;&nbsp;
                </nobr>
                index{'>>>'}
                {category}
                {'>>>'}
                {items}
              </p>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://genuineapi.vercel.app/api/Products`);
  const data = await res.json();
  const paths = data.map(post => ({
    params: { category: post.category.toString(), items: post.items.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { category, items } = params;
  const resp = await fetch(
    `https://genuineapi.vercel.app/api/Products/${category}/${items}`
  );
  const imgdata = await resp.json();
  const images = imgdata.map(i => i.map);
  console.log(images);
  return {
    props: { category, items }
  };
}
