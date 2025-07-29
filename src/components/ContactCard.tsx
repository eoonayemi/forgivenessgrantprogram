import type { IconType } from "react-icons";

interface ContactCardProps {
  Icon: IconType;
  name: string;
  contact: string;
}

const ContactCard = ({ Icon, name, contact }: ContactCardProps) => {
  return (
    <div className="flex gap-5 items-center">
      <div className="bg-light_primary text-white p-4 h-14 w-14 rounded-full flex items-center justify-center">
        <Icon />
      </div>
      <div>
        <p className="text-slate-400">{name}</p>
        <p className="font-bold">{contact}</p>
      </div>
    </div>
  );
};

export default ContactCard;
