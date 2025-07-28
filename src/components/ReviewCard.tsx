import { Comma } from "../assets/icons";

interface ReviewCardProps {
  name: string;
  title: string;
  image: string;
  review: string;
  cardStyles?: string;
  inlineStyles?: React.CSSProperties;
}

const ReviewCard = ({
  name,
  review,
  title,
  image,
  cardStyles,
  inlineStyles,
}: ReviewCardProps) => {
  return (
    <div
      className={`${cardStyles} h-[25rem] text-white bg-light_primary rounded-xl p-10 flex flex-col gap-10`}
    >
      <div
        style={inlineStyles}
        className="flex rotate-180 w-fit text-dark_primary"
      >
        <Comma className="text-3xl" />
        <Comma className="text-3xl -ml-3" />
      </div>

      <p>{review}</p>

      <div className="bg-white h-[0.5px] mt-auto"></div>

      <div className="flex gap-5 items-center">
        <img src={image} alt={title} className="rounded-full h-11 w-12" />
        <span className=" text-dark_primary">
          <p className="font-semibold">{name}</p>
          <p className="text-white text-sm">{title}</p>
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
