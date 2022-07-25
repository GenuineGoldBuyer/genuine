import Nav from '../../nav';
import Link from 'next/link';
import Footer from '../../footer';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function Car({ car, category }) {
  return (
    <div>
      <Nav />
      <Head>
        <title>Gold</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={
            category +
            ' - Auto Spare Parts Order Online in UAE - Best Prices | Emirates-car.com'
          }
        />
        <meta
          name="keywords"
          content={
            category +
            ' spare parts,' +
            category +
            ' car spare parts,' +
            category +
            ' parts uae,' +
            category +
            ' ' +
            ' uae,' +
            category +
            ' parts,' +
            category +
            ' spare part prices in uae'
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={'https://www.emirates-car.com/jewellery/' + category}
        />
        <meta
          property="og:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your' +
            category +
            "'s needs - Car / Jeep / Van / Truck / Buses in Your city."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content={'https://www.emirates-car.com/jewellery/' + category}
        />
        <meta
          property="twitter:title"
          content={
            category +
            ' - Car Auto Spare Parts Order Online in UAE - Best Prices | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your' +
            category +
            "'s needs - Car / Jeep / Van / Truck / Buses in Your city."
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto bg-gray-900">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full">
          <main className="mx-10 xs:mx-4 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 shadow-sm">
            <article>
              Get Ideas from Gallery {'>>'} Personalize your own {category}{' '}
              {'>>'} Talk to our expert
              <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
                {car.map(post => (
                  <div key={post.id}>
                    <Link
                      href="/jewellery/[category]/[items]"
                      as={'/jewellery/' + post.category + '/' + post.items}
                    >
                      <a
                        title={
                          post.category + ' - ' + post.items + ' spare parts'
                        }
                      >
                        <main className="text-center xs:text-center font-mono text-yellow-500 underline hover:text-yellow-700 focus:text-yellow-700 h-100">
                          {post.items.replace('%2F', '/')}{' '}

                        </main>
                      </a>
                    </Link>
                  </div>
                ))}{' '}
              </div>
            </article>
            <div className="text-center mt-2 text-red-400 text-sm xs:text-xs">
              **Your desired design not found?
              <Link href="/get-in-touch">
                <a>
                  <nobr className="text-yellow-500 text-sm underline">
                    {' '}
                    Get in touch with us {'>>'}**
                  </nobr>
                </a>
              </Link>{' '}
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
    params: {
      category: post.category
    }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const res = await fetch(
    `https://genuineapi.vercel.app/api/Products/${category}`
  );
  const data = await res.json();
  let uniqueObjectArray = [
    ...new Map(data.map(item => [item['items'], item])).values()
  ];

  return {
    props: {
      car: uniqueObjectArray,
      category
    }
  };
}
