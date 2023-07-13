import { FaStar, FaStarHalf } from "react-icons/fa";
interface Props {
  rating: number;
  testimony: string;
  avatar: string;
  name: string;
  location: string;
}

export const UITestimony = (props: Props) => {
  const { avatar, location, name, rating, testimony } = props;
  return (
    <div className="flex flex-col gap-5 text-start text-xl w-full md:w-[30%]">
      <div className="flex flex-row">
        {Array.from(Array(Math.floor(rating))).map((value) => (
          <FaStar color="#00c2c5" key={Math.random()} />
        ))}
        {rating % Math.round(rating) !== 0 && <FaStarHalf color="#00c2c5" />}
      </div>
      <p className="italic">{testimony}</p>
      <div className="flex flex-row gap-5">
        <img src={avatar} width={50} />
        <div className="flex flex-col text-start">
          <p className="text-lg not-italic font-semibold">{name}</p>
          <p className="text-sm not-italic ">{location}</p>
        </div>
      </div>
    </div>
  );
};
