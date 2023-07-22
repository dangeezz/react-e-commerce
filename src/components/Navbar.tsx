import { ReactComponent as ChevronDownIcon } from "../assets/icons/chevron-down.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as ShoppingCartIcon } from "../assets/icons/shopping-cart.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 py-6 font-semibold">
      <div className="mr-8 text-3xl">Branding</div>
      <div className="inline-flex items-center gap-1">
        <span>Cateogory</span>
        <ChevronDownIcon className="w-4 h-4" />
      </div>

      <ul className="flex items-center gap-6">
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">What's New</a>
        </li>

        <li>
          <a href="#">Delivery</a>
        </li>
      </ul>

      <div className="relative flex-1 mx-12 overflow-hidden font-normal bg-gray-100 rounded-full min-w-[180px]">
        <input
          type="text"
          className="w-full h-full px-4 py-3 bg-transparent focus:outline-0 placeholder:text-gray-500 placeholder:text-sm"
          placeholder="Search Product"
        />
        <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2">
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </span>
      </div>

      <div className="inline-flex items-center gap-2 ml-auto">
        <UserIcon className="w-6 h-6" />
        <span>Account</span>
      </div>

      <div className="inline-flex items-center gap-2">
        <ShoppingCartIcon className="w-6 h-6" />
        <span>Cart</span>
      </div>
    </nav>
  );
}
