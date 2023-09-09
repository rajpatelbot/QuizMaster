import { BiSolidStopwatch } from "react-icons/bi";

interface TimeStampBadgeProps {
  time: string;
  className?: string;
}

const TimeStampBadge = ({ time, className }: TimeStampBadgeProps) => {
  return (
    <span className={`bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ${className}`}>
      <BiSolidStopwatch className="w-3 h-3 mr-1.5" />

      {new Date(time).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  );
};

export default TimeStampBadge;
