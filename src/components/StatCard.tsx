import type { IconType } from "react-icons";

interface StatCardProps {
  label: string;
  value: string;
  Icon: IconType;
}

const StatCard = ({ label, value, Icon }: StatCardProps) => {
  return (
    <div className="bg-white p-10 flex flex-col items-center justify-center gap-2 w-72 rounded-xl">
      <div>
        <Icon className="text-5xl text-light_primary" />
      </div>
      <div className="text-3xl font-bold text-dark_primary">{value}</div>
      <div className="text-slate-500">{label}</div>
    </div>
  );
};

export default StatCard;
