import React from "react";

function UpdateAvatar() {
  return (
    <div>
      {/* header */}
      <div className="flex justify-center items-center mt-4 mb-10">
        <h3 className="bg-slate-600 p-3 font-lg rounded-lg text-white font-semibold">
          Update Profile Avatar
        </h3>
      </div>

      <form class="w-[90%] md:w-[70%] mx-auto ">

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="user_avatar"
          >
            Upload new avatar
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            required
          />
          <div
            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            A profile picture is useful to confirm your are logged into your
            account
          </div>
        </div>

        <div class="flex items-start mb-5 mt-5 ">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I want to{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              update avatar
            </a>
          </label>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default UpdateAvatar;
