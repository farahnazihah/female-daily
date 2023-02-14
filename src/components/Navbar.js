import { HiMenu } from "react-icons/hi";
import { SlUserFemale } from "react-icons/sl";
import Image from "next/image";
import Button from "@bit/farahnazihah.female-daily-component.button";

function SearchBar() {
  const src =
    "https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/ic-fd.svg";
  return (
    <div className="border-b-2 flex pl-5 w-full gap-5">
      <div className=" flex h-16 py-3 w-full gap-5 items-center">
        <HiMenu className="w-8 h-8 text-gray-600" />
        <Image
          loader={() => src}
          src={src}
          alt="product"
          width="0"
          height="0"
          className="w-auto h-3/4"
        />

        <form className="w-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Search products, articles, topics, brands, etc."
              required
            />
          </div>
        </form>
      </div>
      <Button type="solid">
        <SlUserFemale className="mr-3" />
        LOGIN/SIGNUP
      </Button>
    </div>
  );
}

function Navigation() {
  return (
    <div className="border-b-2 flex h-12 py-3 w-full gap-1 items-center font-bold justify-center">
      <Button type={"ghost"}>SKINCARE</Button>
      <Button type={"ghost"}>MAKE UP</Button>
      <Button type={"ghost"}>BODY</Button>
      <Button type={"ghost"}>HAIR</Button>
      <Button type={"ghost"}>FRAGRANCE</Button>
      <Button type={"ghost"}>NAILS</Button>
      <Button type={"ghost"}>TOOLS</Button>
      <Button type={"ghost"}>BRANDS</Button>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <SearchBar />
      <Navigation />
    </>
  );
}
