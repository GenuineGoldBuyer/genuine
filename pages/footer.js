import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="py-6 bg-yellow-500">
      <div className="pb-6 xs:pb-3 p-2 sm:pb-3 2xs:pb-3">
        <h1 className="text-3xl xs:text-sm text-white uppercase text-center font-bold 2xs:text-base md:text-xl lg:text-2xl s:text-sm">
          COULD&apos;NT FIND YOUR DESIRED AUTO PARTS?{' '}
          <Link href="/contact">
            <a className="underline text-blue-900">CONTACT US NOW {'>>'}</a>
          </Link>
        </h1>
      </div>
      <div className=" bg-gray-900 py-10 xs:py-5 2xs:py-5 s:py-5 sm:py-5">
        <div className="grid grid-cols-3 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 ">
          <div className="text-center">
            <p className="pt-5 text-white font-extrabold">ABOUT Genuine Gold Buyer</p>
            <p className="text-sm xs:text-xs pt-5 m-1 text-center font-medium text-yellow-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="pt-10 xs:pt-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">SOCIAL LINKS</p>
            <p>
              <a
                className="text-xl leading-xl text-blue-900"
                href="https://www.facebook.com/Emirates-carcom-101113659165158/"
              >
                <i className="fab fa-2x fa-facebook"></i>
              </a>
              &nbsp;
              <a
                className="text-xl leading-xl text-purple-900"
                href="https://www.instagram.com/haksinterlance/"
              >
                <i className="fab fa-2x fa-instagram"></i>
              </a>
              &nbsp;
              <a
                className="text-xl leading-xl text-black"
                href="https://emirates-car.tumblr.com/"
              >
                <i className="fab fa-2x fa-tumblr"></i>
              </a>
              &nbsp;
              <a
                className="text-xl leading-xl text-blue-300"
                href="https://twitter.com/uaeautoparts"
              >
                <i className="fab fa-2x fa-twitter"></i>
              </a>
              &nbsp;
              <a
                className="text-xl leading-xl text-red-700"
                href="https://in.pinterest.com/emiratesautomobileparts/"
              >
                <i className="fab fa-2x fa-pinterest"></i>
              </a>
              &nbsp;
              <a
                className="text-xl leading-xl text-blue-500"
                href="https://in.pinterest.com/emiratesautomobileparts/"
              >
                <i className="fab fa-2x fa-linkedin"></i>
              </a>
            </p>
          </div>
          <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">SHORTCUT LINKS</p>
            <Link href="/search-by-part-name">
              <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                Search parts by part name in UAE
              </a>
            </Link>
            <br />
            <Link href="/search-by-make">
              <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                Search parts by Car make in UAE
              </a>
            </Link>
            <br />
            <Link href="/search-by-cities-in-uae">
              <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                Search parts by cities in UAE
              </a>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 ">
          <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">Email Address</p>
            <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
              emiratesautomobileparts@gmail.com
            </a>
          </div>
        </div>

        <div className="text-center text-purple-200 py-10">
          <a
            href="https://emirates-car.com"
            className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
          >
            <i className="fa fa-copyright" aria-hidden="true"></i>
            Copyright © 2022 Emirates-car. All rights reserved.
          </a>
        </div>
      </div>
    </div>
  );
}
