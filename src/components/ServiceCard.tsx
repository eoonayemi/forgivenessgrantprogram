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
      className={`${cardStyles} h-fit md:h-[18rem] flex flex-col text-left text-my_black gap-2 p-10 rounded-xl`}
    >
      <h2 className={`${nameStyles} text-xl font-semibold`}>{name}</h2>
      <p className={`${desStyles} text-gray-500`}>{description}</p>
      <button className="bg-light_primary text-white p-2 self-end rounded-full mt-5">
        <ArrowRight className="text-lg font-extrabold" />
      </button>
    </div>
  );
};

export default ServiceCard;
