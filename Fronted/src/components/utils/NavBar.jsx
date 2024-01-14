import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import "../../css/NavBar.css"
import { Sidebar } from "flowbite-react";
import logo from "../../assets/image/logo.png";
import birdImage from "../../assets/image/birdImage.png"
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

function NavBar() {
  const [sideBarToggle, setSidebarToggle] = useState(false);
  function sideBarToggleBtn() {
    console.log(sideBarToggle)
    setSidebarToggle(!sideBarToggle);
  }

  return (
    <>

    {/* ZERO SIDEBAR */}
      {sideBarToggle ? (
        <Sidebar
          aria-label="Sidebar with logo branding example"
          className=" fixed h-screen z-50  "
        >
          <Sidebar.Logo href="#" >
          <img
            src={logo}
            className="ml-[-15px]  w-40 sm:h-15"
            alt="Flowbite React Logo"
          />
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Profile
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Cart
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Orders
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Reviews
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                <span className="bg-green-300  p-3 rounded-lg font-bold "  >Login</span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                <span className="bg-green-300 p-3 rounded-lg font-bold" >Sign Up</span>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                <span className="bg-green-300  p-3 rounded-lg font-bold "  >Admin Login</span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      ) : null}


      {/* FIRST NAVBAR */}
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src={logo}
            className="mr-3  w-40 sm:h-15"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2  " onClick={sideBarToggleBtn}>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                
                rounded
                bordered
                color={"rgb(42 255 119 / 50%)"}
              />
            }
            
          >
            
           
          </Dropdown>
        </div>
          {/* <Navbar.Toggle /> */}
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* SECOND NAVBAR */}
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Clothing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
