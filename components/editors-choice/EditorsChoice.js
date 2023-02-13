import Product from "./Product";
import Image from "next/image";

export default function EditorsChoice({ data }) {
  const src =
    "https://image.femaledaily.com/dyn/80/images/user-pics/72acded3acd45e4c8b6ed680854b8ab1jxqnwq1669093826846.jpeg";

  return (
    <div className="w-full">
      <div className="flex flex-row px-3 relative top-2 flex-wrap-reverse justify-center">
        <Image
          className="rounded-full mr-2"
          loader={() => src}
          src={src}
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
