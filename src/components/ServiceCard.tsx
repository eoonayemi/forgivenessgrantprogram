import { ArrowRight } from "../assets/icons";

interface ServiceCardProps {
  name: string;
  description: string;
  cardStyles?: string;
  nameStyles?: string;
  desStyles?: string;
}

const ServiceCard = ({
  name,
  description,
  cardStyles,
  nameStyles,
  desStyles,
}: ServiceCardProps) => {
  return (
    <div
      className={`${cardStyles}h-fit md:h-[15rem] flex flex-col text-left text-my_black gap-2 p-10`}
    >
      <h2 className={`${nameStyles} text-xl font-semibold`}>{name}</h2>
      <p className={`${desStyles} text-gray-500`}>{description}</p>
      <button className="bg-secondary001 text-white p-2 self-end rounded-full mt-5">
        <ArrowRight className="text-lg font-extrabold" />
      </button>
    </div>
  );
};

export default ServiceCard;
