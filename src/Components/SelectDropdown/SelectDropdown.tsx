import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./SelectDropdown.scss";

interface SelectDropdownProps {
  id: string;
  label: string;
  options: string[];
  selectedOptions: string[];
  Icon: LucideIcon;
  onOptionToggle: (option: string) => void;
}

const SelectDropdown = ({
  id,
  label,
  options,
  selectedOptions,
  Icon,
  onOptionToggle,
}: SelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown-container${isOpen ? " open" : ""}`}>
      <button
        className="select"
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <Icon aria-hidden="true" />
        <span>{label}</span>
        <ChevronDown className="chevron" aria-hidden="true" />
      </button>

      <ul className="dropdown" id={id}>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => onOptionToggle(option)}
              />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDropdown;
