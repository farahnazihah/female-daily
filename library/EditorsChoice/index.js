import Product from "../Product";
import Image from "next/image";
import womanPic from "./image/woman-pic.jpg";

export default function EditorsChoice({ data }) {
  return (
    <div>
      <div className="flex flex-row px-3 relative top-2">
        <Image
          className="rounded-full mr-2"
          src={womanPic}
          alt="product"
          width="48"
          height="48"
        />
        <div>
          <p className="font-bold text-gray-700">{data.editor}</p>
          <p className="text-xs text-gray-400">{data.role}</p>
        </div>
      </div>
      <div className="border rounded-lg w-fit">
        <Product data={data.product} />
      </div>
    </div>
  );
}
