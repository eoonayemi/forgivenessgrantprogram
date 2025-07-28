interface ProcessCardProps {
  step: string;
  process: string;
  description: string;
  cardStyles?: string;
  processStyles?: string;
  desStyles?: string;
}

const ProcessCard = ({
  step,
  process,
  description,
  cardStyles,
  processStyles,
  desStyles,
}: ProcessCardProps) => {
  return (
    <div
      className={`${cardStyles} h-fit flex flex-col text-left text-white gap-2 p-10 bg-dark_primary shadow-xl rounded-xl w-[20rem]`}
    >
      <h2 className={`uppercase text-sm font-bold text-secondary001`}>
        {step}
      </h2>
      <h1 className={`${processStyles} font-bold`}>{process}</h1>
      <p className={`${desStyles}`}>{description}</p>
    </div>
  );
};

export default ProcessCard;
