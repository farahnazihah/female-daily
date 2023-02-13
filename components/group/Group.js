import Image from "next/image";
import { BsPeopleFill, BsListUl } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";

const src =
  "https://image.femaledaily.com/dyn/80/images/user-pics/72acded3acd45e4c8b6ed680854b8ab1jxqnwq1669093826846.jpeg";

export default function Group({ groupData }) {
  return (
    <>
      <div className="flex flex-col w-full items-center border shadow-lg rounded-lg p-5">
        <Image
          className="rounded-full m-2"
          loader={() => src}
          src={src}
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
