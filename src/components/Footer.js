import Button from "@bit/farahnazihah.female-daily-component.button";
import Image from "next/image";

export default function Footer() {
  const src =
    "https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/ic-fd.svg";
  return (
    <div className="border-t-2 flex flex-col w-full gap-5 pt-5">
      <div className="font-bold grid grid-cols-4">
        <div>
          <Button type={"ghost"}>About Us</Button>
          <Button type={"ghost"}>Feedback</Button>
          <Button type={"ghost"}>Contact</Button>
        </div>
        <div>
          <Button type={"ghost"}>Terms & Conditions</Button>
          <Button type={"ghost"}>Privacy Policy</Button>
          <Button type={"ghost"}>Help</Button>
        </div>
        <div>
          <Button type={"ghost"}>Awards</Button>
          <Button type={"ghost"}>Newsletter</Button>
        </div>
        <div>
          <Button type={"ghost"}>Download Our Mobile App</Button>
        </div>
      </div>
      <div className="h-16 mt-5">
        <Image
          loader={() => src}
          src={src}
          alt="product"
          width="0"
          height="0"
          className="w-auto h-2/4"
        />
        <p className="text-gray-600 mt-3">
          Copyright @ 2015 -2017 Female Daily NetworkㆍAll rights reserved
        </p>
      </div>
    </div>
  );
}
