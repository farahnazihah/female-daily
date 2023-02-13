import Image from "next/image";
import womanPic from "./image/woman-pic.jpg";
import { BsPeopleFill, BsListUl } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";

export default function Group({ groupData }) {
  return (
    <>
      <div className="flex flex-col items-center w-64 border shadow-lg rounded-lg p-4">
        <Image
          className="rounded-full m-2"
          src={womanPic}
          alt="product"
          width="160"
          height="160"
        />
        <h3 className="text-xl font-bold">{groupData.name}</h3>
        <div className="w-full flex items-center place-content-evenly mt-5">
          <div className="flex items-center">
            <BsPeopleFill />-
          </div>
          <div className="flex items-center">
            <BsListUl />-
          </div>
          <div className="flex items-center">
            <MdOutlineInsertComment />-
          </div>
        </div>
        <p className="mb-5 text-center text-gray-500 text-md font-semibold">
          {groupData.desc}
        </p>
      </div>
    </>
  );
}
