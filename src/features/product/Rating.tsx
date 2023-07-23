import { ReactComponent as StarIcon } from "@/assets/icons/star.svg";

export const Rating = () => {
  return (
    <>
      <div className="flex items-center gap-1 my-4">
        <StarIcon className="w-3 h-3 text-green-800" />
        <StarIcon className="w-3 h-3 text-green-800" />
        <StarIcon className="w-3 h-3 text-green-800" />
        <StarIcon className="w-3 h-3 text-green-800" />
        <StarIcon className="w-3 h-3 text-gray-400" />
        <span className="text-sm">(112)</span>
      </div>
    </>
  );
};
