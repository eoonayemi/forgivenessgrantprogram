import { useNavigate } from "react-router";
import { ArrowRight } from "../assets/icons";

interface ServiceCardProps {
  name: string;
  description: string;
  cardStyles?: string;
  nameStyles?: string;
  desStyles?: string;
  link: string;
}

const ServiceCard = ({
  name,
  description,
  cardStyles,
  nameStyles,
  desStyles,
  link,
}: ServiceCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${cardStyles} h-fit md:h-[20rem] flex flex-col text-left text-my_black gap-2 p-10 rounded-xl overflow-hidden`}
    >
      <h2 className={`${nameStyles} text-xl font-semibold`}>{name}</h2>
      <p className={`${desStyles} text-gray-500`}>{description}</p>
      <button className="bg-light_primary text-white p-2 self-end mt-auto rounded-full">
        <ArrowRight
          className="text-lg font-extrabold"
          onClick={() =>
            name.includes("business")
              ? navigate(link)
              : (window.location.href = link)
          }
        />
      </button>
    </div>
  );
};

export default ServiceCard;
