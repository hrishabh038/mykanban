import { ChevronDownIcon, ChevronRightIcon } from "../assets/icons/icons";
import { UniqueIdentifier } from "./components";

interface TextTypeAccordianProps {
  id: string;
  title: string;
  description?: string;
  isOpen: boolean;
  usingFor?: string;
  onToggle: (id: string) => void;
}

export const TextTypeAccordion = ({
  id,
  usingFor,
  title,
  description,
  isOpen,
  onToggle,
}: TextTypeAccordianProps) => {
  return (
    <div
      className={`flex flex-col gap-2 border ${isOpen ? "border-purple-800 bg-purple-950/15" : "border-transparent bg-neutral-900"}  rounded cursor-pointer p-3`}
    >
      {/* Head */}
      <div className="flex items-start gap-2" onClick={() => onToggle(id)}>
        {isOpen ? (
          <ChevronDownIcon size={18} />
        ) : (
          <ChevronRightIcon size={18} />
        )}

        <div className="font-semibold flex flex-col gap-1">
          <UniqueIdentifier
            className="text-[10px]"
            usingFor={usingFor || "item"}
            id={id}
          />
          {title}
        </div>
      </div>
      {/* Body */}
      {isOpen && (
        <div className="border-t border-neutral-800 text-neutral-300 pt-3">
          <p className="pl-[27px]">{description}</p>
        </div>
      )}
    </div>
  );
};
