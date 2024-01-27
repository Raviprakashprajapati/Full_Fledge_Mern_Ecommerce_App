import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchAllProduct } from "../api/searchApi";
import { allProductsAPI } from "../api/productApi";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (inputSearch === "") {
    } else {
      navigate(`/searchbar/${inputSearch}`);
      setInputSearch("")
    }
  }

  useEffect(() => {
    allProductsAPI()
      .then((data) => {
        console.log("data by write ", data);
        if (data) {
          setProduct(data?.data);
        }
      })
      .catch((err) => {
        console.log("err in search bar ", err);
      });
  }, []);

  return (
    <div className="mb-2">
      {/* searchbar */}
      <div className="w-[80%] md:w-[70%] m-auto">
        <form class="relative">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>

          <div class="flex items-center">
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search products, phone..."
                required
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
              />

              {/* <button
                type="submit"
                class="text-white absolute top-0 right-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-[0.6rem] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}
              >
                Search
              </button> */}
            </div>
          </div>

          {/* Display search results */}
          {inputSearch === "" ? null : (
            <div className="mt-1 w-[80%] md:w-[70%] max-h-40 fixed z-50 bg-slate-600 text-white overflow-y-auto">
              {product ? (
                <>
                  {product
                    ?.filter( (i) =>
                        i?.name.toLowerCase().includes(inputSearch) ||
                        i?.brand.toLowerCase().includes(inputSearch) ||
                        i?.stock.toLowerCase().includes(inputSearch) ||
                        i?.age.toLowerCase().includes(inputSearch) ||
                        i?.keywords.toLowerCase().includes(inputSearch) ||
                        i?.features.toLowerCase().includes(inputSearch) ||
                        i?.price.toLowerCase().includes(inputSearch) ||
                        i?.subCategory.toLowerCase().includes(inputSearch) ||
                        String(i?.raiting).includes(inputSearch) 
                    )

                    ?.map((result, index) => (
                      <Link
                        onClick={() => setInputSearch("")}
                        key={index}
                        to={`/product-details/${result?._id}`}
                        className="p-2 border-b block"
                      >
                        {result?.name}
                      </Link>
                    ))}
                </>
              ) : (
                <div
                  role="status"
                  class="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
