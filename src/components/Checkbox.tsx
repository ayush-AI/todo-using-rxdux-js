import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onClick: () => void;
  onKeyUp: (e: React.KeyboardEvent) => void;
  onDelete: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onClick,
  onKeyUp,
  onDelete,
}) => {
  return (
    <div className="flex items-center mb-2 w-[100%] px-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        onKeyUp={onKeyUp}
        className="mr-2 h-5 w-5 text-blue-500"
      />
      <span className={`flex-1 ${checked ? "line-through text-gray-500" : ""}`}>
        {label}
      </span>
      <button
        onClick={onDelete}
        className="flex ml-2 w-5 h-5 items-center bg-[#c8c8c8] text-black justify-center "
      >
        x
      </button>
    </div>
  );
};

export default Checkbox;
