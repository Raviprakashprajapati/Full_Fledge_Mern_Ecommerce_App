import React, { useState } from "react";
import adminImage from "../assets/image/adminImage.png";
import adminImage02 from "../assets/image/adminImage02.png";
import { adminLogoutAPI } from "../components/api/adminApi";
import { useNavigate } from "react-router-dom";
function AdminProfileDesign({username,email}) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate("")

  const togglePasswordPopup = () => {
    setShowPassword(!showPassword);
  };

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


  return (
    <div>
      <br />
      <br />

      <div className="w-[93%] md:w-[80%] m-auto ">
        {/* profile header */}
        <div className="px-4 sm:px-0 ">
          <div className="bg-black p-2  rounded-lg flex justify-center items-center ">
            <img src={adminImage02} className='h-[4rem]'  alt="" />
            <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
              Admin Profile
            </h3>
          </div>

          <p className="mt-1 text-center  text-sm leading-6 text-gray-500">
            Admin details
          </p>
        </div>{" "}
        <br />
        <br />
        {/* profile photu */}
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={adminImage}
            alt="Woman's Face"
          />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">{username} </p>
              <p class="text-lg text-black font-semibold">{email} </p>
              <p class="text-slate-500 font-medium">Admin</p>
            </div>
          </div>
        </div>
       
      </div>

     

      {/* edit button */}
      <p className="mt-10 mb-7 mx-10 text-blue-600 font-semibold ">
        More Options
      </p>
      <div className="w-[93%] md:w-[80%] flex flex-col justify-center items-center gap-4 mb-10 ">
    

        <button onClick={handleAdminLogout} className="bg-red-500 p-2 font-semibold  w-40 text-black rounded-lg hover:bg-red-700">
          Logout
        </button>

      
      </div>
    </div>
  );
}

export default AdminProfileDesign;
