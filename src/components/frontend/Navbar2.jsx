import React from 'react';
import { BsCart4 } from 'react-icons/bs';

const Navbar2 = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2 hidden lg:block">
          <ul className="menu menu-horizontal px-1  text-lg ">

            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2 w-52 bg-themeBlue text-white">
                  <li><a>Kids</a></li>
                  <li><a>Web Development</a></li>
                  <li><a>Programming</a></li>
                  <li><a>Technology</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 w-52 bg-themeBlue text-white">
                  <li><a>Kids</a></li>
                  <li><a>Web Development</a></li>
                  <li><a>Programming</a></li>
                  <li><a>Technology</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Elements</summary>
                <ul className="p-2 w-52 bg-themeBlue text-white">
                  <li><a>Kids</a></li>
                  <li><a>Web Development</a></li>
                  <li><a>Programming</a></li>
                  <li><a>Technology</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Courses</summary>
                <ul className="p-2 w-52 bg-themeBlue text-white">
                  <li><a>Kids</a></li>
                  <li><a>Web Development</a></li>
                  <li><a>Programming</a></li>
                  <li><a>Technology</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Research</summary>
                <ul className="p-2 w-52 bg-themeBlue text-white">
                  <li><a>Kids</a></li>
                  <li><a>Web Development</a></li>
                  <li><a>Programming</a></li>
                  <li><a>Technology</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>News</summary>
                <ul className="p-2 w-52 bg-themeBlue text-white">
                  <li><a>Kids</a></li>
                  <li><a>Web Development</a></li>
                  <li><a>Programming</a></li>
                  <li><a>Technology</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Contact</summary>
                <ul className="p-2 w-52 bg-themeBlue text-white">
                  <li><a>Kids</a></li>
                  <li><a>Web Development</a></li>
                  <li><a>Programming</a></li>
                  <li><a>Technology</a></li>
                </ul>
              </details>
            </li>

          </ul>
          {/* Cart Icon */}
          <BsCart4 className="text-2xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;