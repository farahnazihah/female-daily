import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Rating({ rate }) {
  const fill = rate | 0;
  const half = rate - fill > 0.1 ? 1 : 0;
  const empty = 5 - (fill + half);

  let stars = [];
  for (let i = 0; i < fill; i++) {
    stars.push(
      <BsStarFill className="text-pink-600  lg:mr-0.5" key={`fill-${i}`} />
    );
  }
  for (let i = 0; i < half; i++) {
    stars.push(
      <BsStarHalf className="text-pink-600  lg:mr-0.5" key={`half-${i}`} />
    );
  }
  for (let i = 0; i < empty; i++) {
    stars.push(
      <BsStar className="text-pink-600 lg:mr-0.5" key={`empty-${i}`} />
    );
  }

  return <div className="flex flex-row items-center">{stars}</div>;
}
