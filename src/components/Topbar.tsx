import { ReactComponent as ChevronDownIcon } from "@/assets/icons/chevron-down.svg";
import { ReactComponent as PhoneIcon } from "@/assets/icons/phone.svg";

export const Topbar = () => {
  return (
    <div className="py-2 text-sm text-white bg-green-900">
      <div className="container flex items-center justify-between mx-auto">
        <div className="inline-flex items-center gap-1">
          <PhoneIcon className="w-4 h-4" />
          <span>+001234567890</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Get 50% off on Selected Items</span>
          <span>|</span>
          <span>Shop Now</span>
        </div>

        <div className="space-x-4">
          <div className="inline-flex items-center gap-1">
            <span>Eng</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="inline-flex items-center gap-1">
            <span>Location</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
