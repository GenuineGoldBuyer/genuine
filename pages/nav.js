import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="bg-gray-800">
      <nav className="flex relative flex-wrap items-center justify-center px-2 py-2 bg-gray-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <a
            className="text-3xl text-white xs:text-lg md:text-2xl font-sans font-medium font-heading  mx-auto"
            href="#spare_parts"
          >
            Genuine Gold Buyer
          </a>
        </div>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <ul className="flex flex-col xl:flex-row lg:flex-row md:flex-row xs:flex-row 2xs:flex-row s:flex-row list-none xl:mx-auto 2xs:mx-auto xs:mx-auto">
            <li className="nav-item">
              <Link href="https://www.facebook.com/emirates.auto.parts/">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  href="https://www.facebook.com/emirates.auto.parts/"
                >
                  <i className="fab fa-facebook ml-2 text-xl leading-xl text-white opacity-75"></i>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://www.instagram.com/emiratescar_parts/">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  href="https://www.instagram.com/emiratescar_parts/"
                >
                  <i className="fab fa-instagram ml-2 text-xl leading-xl text-white opacity-75 "></i>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://twitter.com/uaeautoparts">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  href="https://twitter.com/uaeautoparts"
                >
                  <i className="fab fa-twitter ml-2 text-xl leading-xl text-white opacity-75 "></i>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://emirates-car.tumblr.com/">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  href="https://emirates-car.tumblr.com/"
                >
                  <i className="fab fa-tumblr ml-2 text-xl leading-xl text-white opacity-75"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full flex justify-center ">
          <ul className="flex flex-row xl:hidden lg:hidden md:hidden list-none ">
            <li className="nav-item text-center">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span className="ml-1 text-white" style={{ fontSize: '8px' }}>
                  <i className="fas fa-bars"></i>
                  <br />
                  Menus
                </span>
              </a>
            </li>
            <li className="nav-item text-center">
              <Link href="/">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span
                    className="ml-1  text-white"
                    style={{ fontSize: '8px' }}
                  >
                    <i className="fas fa-home"></i>
                    <br />
                    Home
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/blog">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span
                    className="ml-1  text-white"
                    style={{ fontSize: '8px' }}
                  >
                    <i className="fa-solid fa-circle-info"></i>
                    <br />
                    About
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/contact">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span
                    className="ml-1  text-white"
                    style={{ fontSize: '8px' }}
                  >
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <br />
                    Services
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/search-by-make">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-1 text-white" style={{ fontSize: '8px' }}>
                    <i className="fa-solid fa-signal"></i>
                    <br />
                    Contact
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/search-by-cities-in-uae">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-1 text-white" style={{ fontSize: '8px' }}>
                    <i className="fa-brands fa-blogger"></i>
                    <br />
                    Blog
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={
            'xl:flex flex-grow items-center lg:flex md:flex 2xl:flex' +
            (navbarOpen ? 'flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex  flex-col xl:flex-row lg:flex-row md:flex-row list-none xl:mx-auto 2xs:mx-auto xs:mx-auto ">
            <li className="nav-item xs:mx-auto 2xs:mx-auto s:mx-auto xl:border-0 2xl:border-0 lg: md:border-0 sm:border-0 xs:border-b-2 2xs:border-b-2 s:border-b-2">
              <Link href="/">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base  leading-xl text-white opacity-75">
                    Home
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item xs:mx-auto 2xs:mx-auto s:mx-auto xl:border-0 2xl:border-0 lg: md:border-0 sm:border-0 xs:border-b-2 2xs:border-b-2 s:border-b-2">
              <Link href="/blog">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    About
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item xs:mx-auto 2xs:mx-auto s:mx-auto xl:border-0 2xl:border-0 lg: md:border-0 sm:border-0 xs:border-b-2 2xs:border-b-2 s:border-b-2">
              <Link href="/contact">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Services
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item xs:mx-auto 2xs:mx-auto s:mx-auto xl:border-0 2xl:border-0 lg: md:border-0 sm:border-0 xs:border-b-2 2xs:border-b-2 s:border-b-2">
              <Link href="/search-by-make">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Contact
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item xs:mx-auto 2xs:mx-auto s:mx-auto xl:border-0 2xl:border-0 lg: md:border-0 sm:border-0 xs:border-b-2 2xs:border-b-2 s:border-b-2">
              <Link href="/search-by-cities-in-uae">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Blog
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
