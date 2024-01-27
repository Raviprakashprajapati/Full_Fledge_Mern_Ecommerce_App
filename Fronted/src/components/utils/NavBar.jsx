import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import "../../css/NavBar.css";
import { Sidebar } from "flowbite-react";
import logo from "../../assets/image/logo.png";
import sidebarImage from "../../assets/image/sidebarImage.png";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/redux-features/userSlice";
import { logoutAPI } from "../api/userApi";
import boy from "../../assets/image/boy.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./CustomToast";
import { selectCurrentAdmin } from "../store/redux-features/adminSlice";
import adminImage02 from "../../assets/image/adminImage02.png";
import { adminLogoutAPI } from "../api/adminApi";
import logoR from "../../assets/image/logoR.png"

function NavBar() {
  const notify = () => toast("Login First 😊");

  const [sideBarToggle, setSidebarToggle] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const admin = useSelector(selectCurrentAdmin);
  const [adminIsOpen, setadminIsOpen] = useState(false);

  function sideBarToggleBtn() {
    setSidebarToggle(!sideBarToggle);
  }

  function handleLogout() {
    logoutAPI()
      .then((data) => {
        console.log(data);
        localStorage.clear();

        window.location.reload();
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }

  function handleAdminLogout() {
    adminLogoutAPI()
      .then((data) => {
        console.log(data);
        localStorage.clear();
        navigate("/")
        window.location.reload();

      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }


  const admintoggleSidebar = () => {
    setadminIsOpen(!adminIsOpen);
  };



  return (
    <>
      {/* ZERO SIDEBAR */}
      {sideBarToggle ? (
        <Sidebar
          aria-label="Sidebar with logo branding example"
          className=" fixed h-screen z-50  border-2 border-black "
        >
          <Sidebar.Logo
            className="hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              className="ml-[-15px]  w-[9rem] sm:h-15"
              alt="Flowbite React Logo"
            />
          </Sidebar.Logo>

          <Sidebar.Items  >
            <Sidebar.ItemGroup>
              <div
                className="flex items-center justify-start "
                onClick={() => setSidebarToggle(!sideBarToggle)}
              >
                <Sidebar.Item href="#" icon={HiChartPie}></Sidebar.Item>

                {user ? (
                  <Link to="/profile">
                    <p className="text-black hover:cursor-pointer font-semibold ml-[-17px] ">
                      Profile
                    </p>
                  </Link>
                ) : (
                  <p
                    className="text-black hover:cursor-pointer font-semibold ml-[-17px] "
                    onClick={notify}
                  >
                    Profile
                  </p>
                )}
              </div>

              <div
                className="flex items-center justify-start "
                onClick={() => setSidebarToggle(!sideBarToggle)}
              >
                <Sidebar.Item href="#" icon={HiViewBoards}></Sidebar.Item>
                {user ? (
                  <Link to="/cart">
                    <p className="text-black hover:cursor-pointer font-semibold ml-[-17px] ">
                      Cart
                    </p>
                  </Link>
                ) : (
                  <p
                    className="text-black hover:cursor-pointer font-semibold ml-[-17px] "
                    onClick={notify}
                  >
                    Cart
                  </p>
                )}
              </div>

              <div
                className="flex items-center justify-start "
                onClick={() => setSidebarToggle(!sideBarToggle)}
              >
                <Sidebar.Item href="#" icon={HiInbox}></Sidebar.Item>
                {user ? (
                  <Link to="/order">
                    <p className="text-black hover:cursor-pointer font-semibold ml-[-17px] ">
                      Orders
                    </p>
                  </Link>
                ) : (
                  <p
                    onClick={notify}
                    className="text-black hover:cursor-pointer font-semibold ml-[-17px] "
                  >
                    Orders
                  </p>
                )}
              </div>

              <div
                className="flex items-center justify-start "
                onClick={() => setSidebarToggle(!sideBarToggle)}
              >
                <Sidebar.Item href="#" icon={HiUser}></Sidebar.Item>
                {user ? (
                  <Link to="/myreviews">
                    <p className="text-black hover:cursor-pointer font-semibold ml-[-17px] ">
                      Reviews
                    </p>
                  </Link>
                ) : (
                  <p
                    onClick={notify}
                    className="text-black hover:cursor-pointer font-semibold ml-[-17px] "
                  >
                    Reviews
                  </p>
                )}
              </div>

              <div
                className="flex items-center justify-start "
                onClick={() => setSidebarToggle(!sideBarToggle)}
              >
                <Sidebar.Item href="#" icon={HiShoppingBag}></Sidebar.Item>
                {user ? (
                  <Link to="/order">
                    <p className="text-black hover:cursor-pointer font-semibold ml-[-17px] ">
                      Products
                    </p>
                  </Link>
                ) : (
                  <p
                    onClick={notify}
                    className="text-black hover:cursor-pointer font-semibold ml-[-17px] "
                  >
                    Products
                  </p>
                )}
              </div>

              {user ? (
                <div
                  className="flex items-center justify-start "
                  onClick={() => setSidebarToggle(!sideBarToggle)}
                >
                  <Sidebar.Item href="#" icon={HiArrowSmRight}></Sidebar.Item>
                  <Link to="/">
                    <p
                      className="text-white text-sm font-semibold ml-[-17px] bg-red-600 p-3 rounded-lg "
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </Link>
                </div>
              ) : (
                <div
                  className="flex items-center justify-start "
                  onClick={() => setSidebarToggle(!sideBarToggle)}
                >
                  <Sidebar.Item href="#" icon={HiArrowSmRight}></Sidebar.Item>
                  <Link to="/login">
                    <p className="text-white text-sm font-semibold ml-[-17px] bg-slate-600 p-3 rounded-lg ">
                      Login
                    </p>
                  </Link>
                </div>
              )}

              <div
                className="flex items-center justify-start "
                onClick={() => setSidebarToggle(!sideBarToggle)}
              >
                <Sidebar.Item href="#" icon={HiTable}></Sidebar.Item>
                <Link to="/sign-up">
                  <p className="text-white text-sm font-semibold ml-[-17px] bg-slate-600 p-3 rounded-lg ">
                    Sign-Up
                  </p>
                </Link>
              </div>

              {admin ? (
                <div
                  className="flex items-center justify-start "
                  onClick={() => setSidebarToggle(!sideBarToggle)}
                >
                  <Sidebar.Item href="#" icon={HiArrowSmRight}></Sidebar.Item>
                  <Link>
                    <p
                      className="text-white text-sm font-semibold ml-[-17px] bg-red-600 p-3 rounded-lg "
                      onClick={handleAdminLogout}
                    >
                      Admin Logout
                    </p>
                  </Link>
                </div>
              ) : (
                <div
                  className="flex items-center justify-start "
                  onClick={() => setSidebarToggle(!sideBarToggle)}
                >
                  <Sidebar.Item href="#" icon={HiArrowSmRight}></Sidebar.Item>
                  <Link to="/admin/login">
                    <p className="text-white text-sm font-semibold ml-[-17px] bg-slate-600 p-3 rounded-lg ">
                      Admin Login
                    </p>
                  </Link>
                </div>
              )}

              <div className="ml-10 ">
                <Link
                  to="/about"
                  onClick={() => setSidebarToggle(!sideBarToggle)}
                >
                  {" "}
                  <p className="text-black text-sm mt-5 font-serif font-semibold ">
                    About
                  </p>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setSidebarToggle(!sideBarToggle)}
                >
                  <p className="text-black text-sm mt-2 font-serif font-semibold ">
                    Contact
                  </p>
                </Link>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      ) : null}


    


      {/* FIRST NAVBAR */}
      <Navbar fluid rounded>
        <Navbar.Brand
          onClick={() => navigate(admin?"/admin/profile":"/")}
          className="hover:cursor-pointer"
        >
          <img
            src={logo}
            className="mr-3  w-[8rem] sm:h-15"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2  " onClick={ admin?admintoggleSidebar:sideBarToggleBtn}   >
          <Dropdown
            arrowIcon={false}
            inline
            label={
              user ? (
                <Avatar
                  alt="User settings"
                  img={user?.profileImage ? user.profileImage : boy}
                  className="border rounded-full   hover:border-yellow-300 hover:border-2"
                />
              ) : (
                <>
                  {admin ? (
                    <Avatar alt="User settings" img={adminImage02} />
                  ) : (
                    <Avatar
                      alt="User settings"
                      img={sidebarImage}
                      className="border rounded-full  border-black hover:border-white"
                    />
                  )}
                </>
              )
            }
          ></Dropdown>
        </div>
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "font-bold " : "text-black"} `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "font-bold  " : "text-black"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "font-bold  " : "text-black"}`
            }
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>



      {/* admin */}
      <div className={`fixed top-0 h-full z-50 bg-gray-800 text-white w-${adminIsOpen ? '40' : '0'} `}>
          
            {/* Your admin features or navigation items go here */}
            {
              adminIsOpen?
              <>
              <nav className="p-4" onClick={()=>setadminIsOpen(!adminIsOpen)}  >
                <ul>
                <li className="mb-3 bg-slate-400 " >
                  <Link to="/"><img src={logoR} alt="" /></Link>
                  </li><br />
                  <li className="mb-3 hover:text-slate-400 "><Link to="/admin/profile" >Profile</Link></li>
                <li className="mb-3 hover:text-slate-400 " ><Link to="/admin/dashboard" >Dashboard</Link></li>
               
                <li className="mb-3 hover:text-slate-400 "><Link to="/admin/products" >Products</Link></li>
                <li className="mb-3 hover:text-slate-400 "><Link to="/admin/users" >Users</Link></li>
                <li className="mb-3 hover:text-slate-400 "><Link to="/admin/orders" >Orders</Link></li>
                <li className="mb-3 hover:text-slate-400 "><Link to="/admin/feedback" >Feedbacks</Link></li>
                <li className="mb-3 hover:text-slate-400 "><Link to="/admin/add-product" >Add-Product</Link></li><br /><br />
                <li className="mb-2 bg-red-600 p-2 rounded-lg hover:bg-red-400 text-center "  onClick={handleAdminLogout} >Logout</li>
                {/* Add more features as needed */}
                </ul>
            </nav>
              </>:null
            }
            </div>
   



      {/* toasts */}
      <CustomToast />
    </>
  );
}

export default NavBar;
