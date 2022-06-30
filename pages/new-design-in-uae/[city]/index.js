import Nav from '../../nav';
import Footer from '../../footer';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function City({ data, itemData }) {

  return (
    <div>
      <Nav />
      <Head>
        <title>
          New design in {data.city} (UAE) |
          Emirates-car.com
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content={
            'auto parts in ' +
            data.city +
            ', ' +
            'car parts ' +
            data.city +
            ', ' +
            'Spare parts in ' +
            data.city +
            ', auto spare parts sharjah'
          }
        />
        <meta
          property="og:title"
          content={
            'Quick Car Auto Spare Parts Order Online in ' +
            data.city +
            ' (UAE) | Emirates-car.com'
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={
            'https://www.emirates-car.com/search-by-cities-in-uae/' + data.city
          }
        />
        <meta
          property="og:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in ' +
            data.city
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
            'https://www.emirates-car.com/search-by-cities-in-uae/' + data.city
          }
        />
        <meta
          property="twitter:title"
          content={
            'Quick Car Auto Spare Parts Hunt in ' +
            data.city +
            ' (UAE) | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in ' +
            data.city
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full border border-1">
          <main className="mx-10 xs:ml-3  2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
            <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5">
              FILL OUT THE INQUIRY FOR PARTS IN
              <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                &nbsp;{data.city}{' '}
              </nobr>
              BELOW
            </div>
            <p className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 underline pb-3">
              <nobr className="text-blue-400 no-underline">
                <i className="fal fa-car-garage"></i> Current path:&nbsp;&nbsp;
              </nobr>
              index{'>>>'}
              <a>
                search-by-cities-in-uae{'/'}
                {data.city}
              </a>
              {'>>>'}
            </p>
            <p className="text-gray-500 font-semibold text-xl md:text-lg lg:text-2xl font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 pb-3">
              <a>{data.description}</a>
              {'>>>'}
            </p>
            <iframe
              src={data.link}
              height={300}
              width="100%"
              allowFullScreen="null"
              loading="lazy"
            ></iframe>
            <div className="grid grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1">
              <p className="text-base font-medium text-gray-500 xs:text-sm md:text-base p-5">
                <h1 className="text-md font-bold text-blue-500">
                  SEARCH YOUR PARTS IN
                  <nobr className="text-gray-500  text-2xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                    &nbsp;{data.city}.
                  </nobr>{' '}
                </h1>
              </p>
              <p className="text-base font-medium text-gray-500 xs:text-sm md:text-base p-5">
                To buy Auto spare parts online near {data.city}. , fill in the
                spare part forms below, get inquired through whatsapp and get
                quote for your spare parts and we also offer delivery to your
                convinient area.
              </p>
            </div>
            <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 mx-5">
              <h1 className="text-base font-medium text-gray-500 p-5">
                We deal with any country auto spare parts including japanese,
                american, german, chinese, indian, Korean, french, british in
                UAE. Looking for Auto spare parts in {data.city}?. We are
                dealing with auto spare parts for car, heavy truck, van, buses,
                coupe, SUV, prime, Petrol based vehicles, Diesel based vehicles,
                Used spare parts, After market parts, Genuine spare parts and
                New parts etc. Contact us for any inquiry. We also deal in
                brands such as{' '}
                {itemData.map((p) => (
                  <a key={p.id}>
                    {p.make}
                    {' in ' + data.city + ', '}
                  </a>
                ))}
                .<br />
                <br />
                We provide auto spare parts for any vehicles including :
                <ul className="list-disc">
                  <li>New auto spare parts in {data.city}</li>
                  <li>Used auto spare parts in {data.city}</li>
                  <li>Genuine auto spare parts in {data.city}</li>
                  <li>Aftermarket auto spare parts in {data.city}</li>
                </ul>
              </h1>
              <p className="text-base font-medium text-gray-500 p-5">
                UAE Automobile industry is slowly shifting towards a service
                oriented business model based on consumer data and customer
                experience. Now companies are trying to adapt to the current
                need of the trends Markets. They rely on consumer data for
                knowing the sale interest of the customers based on the
                experience through analytics software. Owners are now thinking
                ways to accommodate the market through the trends analytics in
                order to keep the company into their targetted level. Previously
                there were cars running on petrol in which UAE is one of the
                largest producer and diesel. Since the beginning era of electric
                vehicle have started, many people are opting for electric
                vehicles in spite of its shortcomings because it is more
                affordable comapared to vehicle running on diesel or petrol. By
                this transition there is no difference in usage of irreversible
                energy.
              </p>
            </div>
            <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs s:text-xs mx-10 my-10">
              SEARCH BY MAKE
            </h1>
            <div className="grid grid-cols-9 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              {itemData.map((makedata) => (
                <div key={makedata.id}>
                  <Link
                    href="/search-by-make/[make]"
                    as={'/search-by-make/' + makedata.category}
                  >
                    <a title={makedata.make + ' spare parts ' + data.city}>
                      <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                        <div className="flex justify-center">

                          <br />
                        </div>
                        <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                          {makedata.category.toUpperCase()}
                        </p>
                      </main>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </div>
        <div className="w-1/4 text-sm font-sans xs:w-full 2xs:w-full sm:w-full my-10">
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg 2xs:text-2xl px-5  font-sans">
            Gold IN {data.city}
          </div>


        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://genuineapi.vercel.app/api/cities`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { city: post.city },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { city } = params;

  const res = await fetch(`https://genuineapi.vercel.app/api/cities/${city}`);
  const data = await res.json();
  const response = await fetch(`https://genuineapi.vercel.app/api/Products`);
  const dat = await response.json();
  let uniqueMakeArray = [
    ...new Map(dat.map((item) => [item['category'], item])).values(),
  ];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data,  itemData: uniqueMakeArray },
  };
}
