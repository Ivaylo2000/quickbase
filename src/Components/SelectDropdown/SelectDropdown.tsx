import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./SelectDropdown.scss";

interface SelectDropdownProps {
  id: string;
  label: string;
  options: string[];
  Icon: LucideIcon;
}

const SelectDropdown = ({ id, label, options, Icon }: SelectDropdownProps) => {
  return (
    <div className="dropdown-container open">
      <button
        className="select"
        type="button"
        aria-expanded="true"
        aria-controls={id}
      >
        <Icon aria-hidden="true" />
        <span>{label}</span>
        <ChevronDown className="chevron" aria-hidden="true" />
      </button>

      <ul className="dropdown" id={id}>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input type="checkbox" />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDropdown;
