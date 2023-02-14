import EditorsChoice from "@bit/farahnazihah.female-daily-component.editors-choice";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function Section({ children, hrefMore, title, subtitle }) {
  return (
    <div className="w-4/5 my-7">
      <div className="flex flex-row items-end justify-between my-3">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="text-lg font-medium text-gray-400">{subtitle}</h3>
        </div>
        {hrefMore && (
          <Link href={hrefMore}>
            <div className="flex flex-row items-center text-pink-600 font-medium">
              See More <AiOutlineRight />
            </div>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
