import React from "react";
interface GraphCardProps {
  label: string;
  value: string;
}

const GraphCard = ({ label, value }: GraphCardProps) => {
  return (
    <div className="py-2 px-4 bg-muted rounded-lg">
      <p className="text-xs py-2 text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default GraphCard;
