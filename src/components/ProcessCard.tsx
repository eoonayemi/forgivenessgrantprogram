import { ArrowRight } from "@/assets/icons";

interface ProcessCardProps {
  step: string;
  process: string;
  description: string;
  cardStyles?: string;
  processStyles?: string;
  desStyles?: string;
  hasButton?: boolean;
}

const ProcessCard = ({
  step,
  process,
  description,
  cardStyles,
  processStyles,
  desStyles,
  hasButton,
}: ProcessCardProps) => {
  return (
    <div
      className={`${cardStyles} h-fit flex flex-col text-left text-white gap-2 p-10 bg-dark_primary shadow-xl rounded-xl w-[20rem]`}
    >
      <h2 className={`uppercase text-sm font-bold text-light_primary`}>
        {step}
      </h2>
      <h1 className={`${processStyles} font-bold`}>{process}</h1>
      <p className={`${desStyles}`}>{description}</p>
      {hasButton && (
        <button className="bg-light_primary text-white p-2 self-end mt-5 rounded-full">
          <ArrowRight className="text-lg font-extrabold" />
        </button>
      )}
    </div>
  );
};

export default ProcessCard;
