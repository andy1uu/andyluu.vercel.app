import React from "react";

const Chip = ({ text }: { text: string }) => (
  <div className="bg-primary text-md rounded-full px-2 py-1 font-medium">
    {text}
  </div>
);

export default Chip;
