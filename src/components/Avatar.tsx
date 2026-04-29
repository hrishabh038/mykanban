import { twMerge } from "tailwind-merge";
import { useGetUser } from "../hooks/hooks";
import { getInitials } from "../utils/helpers/helpers";

interface AvatarProps {
  userId?: string;
  isFullnameVisible?: boolean;
  onClick?: () => void;
}

export const Avatar = ({ userId, onClick, isFullnameVisible }: AvatarProps) => {
  const user = useGetUser(userId!);
  return (
    <div className="flex items-center gap-2 font-semibold border-1 border-transparent p-2 rounded hover:bg-neutral-800 cursor-pointer">
      <AvatarCircle fullname={user?.fullname} />
      {isFullnameVisible && (
        <span className="text-sm tracking-wider">{user?.fullname}</span>
      )}
    </div>
  );
};

export const AvatarCircle = ({
  className,
  fullname,
}: {
  className?: string;
  fullname?: string;
}) => {
  const initials = getInitials(fullname!);
  return (
    <div
      className={twMerge(
        "w-8 h-8 rounded-full border-1 border-purple-800 bg-purple-950 flex items-center justify-center text-xs font-semibold text-white",
        className,
      )}
    >
      {initials}
    </div>
  );
};
