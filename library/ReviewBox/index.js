import Rating from "../Rating";
import Image from "next/image";
import womanPic from "./image/woman-pic.jpg";
import Link from "next/link";

function Reviewer({ user, profile }) {
  return (
    <div className="px-5 flex flex-col items-center relative -top-5">
      <div>
        <Image
          className="rounded-full mr-2"
          src={womanPic}
          alt="product"
          width="48"
          height="48"
        />
      </div>
      <p className="font-bold text-gray-700">{user}</p>
      <p className="text-xs text-gray-400">{profile.join(", ")}</p>
    </div>
  );
}

function ProductReview({ product }) {
  return (
    <div className="flex flex-row px-2 items-center py-3">
      <Image
        className=" mr-3"
        loader={() => product.image}
        src={product.image}
        alt="product"
        width="48"
        height="48"
      />
      <div>
        <p className="font-bold text-gray-700">{product.name}</p>
        <p className="text-xs text-gray-400">{product.desc}</p>
      </div>
    </div>
  );
}

export default function ReviewBox({ reviewData }) {
  return (
    <div className=" w-80">
      <div className="divide-y p-3 border-2 rounded-lg">
        <ProductReview product={reviewData.product} />
        <div className="py-3">
          <div className="flex justify-between">
            <Rating rate={reviewData.star} />
            <p className="text-gray-400 text-xs my-2">2 hours ago</p>
          </div>
          <p className="text-xs my-2">
            {reviewData.comment}...{" "}
            <Link className="text-pink-500 font-semibold" href={"google.com"}>
              Read more
            </Link>
          </p>
        </div>
      </div>
      <Reviewer user={reviewData.user} profile={reviewData.profile} />
    </div>
  );
}
