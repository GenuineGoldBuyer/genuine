import Nav from './nav';
import React, { useState } from 'react';
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
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [Address, setAddress] = useState('');
  const [Code, setCode] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    const response = fetch(`/api/g_sheet`, {
      method: 'POST',
      body: JSON.stringify({
        Timestamp: dateTime,
        name: Name,
        contact: Code + Whatsappno,
        address: Address,
        email: Email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    alert('Form submitted. We will contact you shortly ;)');
    setCode('');
    setName('');
    setAddress('');
    setEmail('');
    setWhatsappno('');
  }
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
      <h1 className="text-6xl text-center lg:text-6xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg text-yellow-500 mx-auto font-extrabold font-sans py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
        <Image src={Chennai} height={70} width={70} />
        Sell your Gold at best Market rate in Chennai
      </h1>
      <Countup/>

      <h1 className="text-6xl text-center lg:text-6xl xs:text-xl 2xs:text-xl s:text-xl sm:text-lg text-yellow-500 mx-auto font-extrabold font-sans py-10 md:py-7 sm:py-10 xs:py-7 2xs:py-7 s:py-7">
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
      <div className="flex justify-center">
      <div className=" w-3/4 " id="formindex">
      <form
          id="myForm"
          className="w-full px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4 bg-white rounded-md"
          method="POST"
          onSubmit={handleSubmit}
          target="hidden_iframe"
        >
          <div className="flex flex-wrap mb-2">
            <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="model"
              >
                Name
              </label>
              <div className="relative">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleNameChange}
                  value={Name}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-2">
            <div className="w-2/5 px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                htmlFor="Code"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              >
                CODE
              </label>
              <input
                id="Code"
                name="entry.44547744"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                type="text"
                placeholder="Eg. +971, +27 ..."
                onChange={handleCodeChange}
                value={Code}
                required
              />
            </div>
            <div className="w-3/5 px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                htmlFor="whatsappno"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              >
                WhatsApp no
              </label>
              <input
                id="whatsappno"
                name="entry.902626710"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
                type="text"
                placeholder="WhatsApp No"
                onChange={handleWhatsAppNoChange}
                value={Whatsappno}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="city"
              >
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="city"
                type="text"
                placeholder="(Area, Chennai) or (City, Country)"
                onChange={handleAddressChange}
                value={Address}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="city"
                type="text"
                placeholder="Mail ID"
                onChange={handleEmailChange}
                value={Email}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-3 mb-6 xs:mb-0 mt-2">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap mb-2">


            <div className=" text-xs text-gray-400 mb-2">
            <Link href="./privacy-policy">
              <a href="./privacy-policy" className="underline" target="_newtab">
                Privacy policy
              </a>
            </Link>
            &nbsp;
            <Link href="./terms-and-condition">
              <a href="./privacy-policy" className="underline" target="_newtab">
                Terms and conditions
              </a>
            </Link>
          </div>

          <div className="text-xs text-yellow-600">
            100% secure and trusted
          </div>

          </div>

        </form>
      </div>
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
