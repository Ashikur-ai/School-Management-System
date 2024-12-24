import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='bg-base-200'>
      <div className="w-10/12 mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">
              <img src="https://res.cloudinary.com/deifi77os/image/upload/v1735062830/School%20Management%20System/public/zazgqwpyefxxs8bqjau8.png" alt="" />
            </a>

            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <BiCategoryAlt className='text-black text-2xl' />

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
          </div>
          <div className="navbar-end">
            <BsCart4 className='text-3xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;