import { ReactComponent as ChevronDownIcon } from "@/assets/icons/chevron-down.svg";
import { Navbar } from "@/components/Navbar";
import { PrimaryButton } from "@/components/button";
import { Product } from "@/features/product/Product";
import { ReactComponent as SlidersIcon } from "@/assets/icons/sliders.svg";
import { Topbar } from "@/components/Topbar";

export const SearchPage = () => {
  return (
    <>
      <Topbar />

      <div className="container mx-auto">
        <Navbar />

        <div className="p-20 mt-4 space-y-6 bg-yellow-100 rounded">
          <h1 className="lg:text-4xl text-green-900 lg:leading-snug [text-wrap:balance] capitalize lg:w-1/3">
            Grab Upto 50% off on selected headphone
          </h1>
          <PrimaryButton className="p-3 px-8">Buy Now</PrimaryButton>
        </div>

        <div className="items-center gap-4 mt-12 text-black flex">
          <div className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full">
            <span className="text-sm font-medium capitalize">
              Headphone type
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          <div className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full">
            <span className="text-sm font-medium capitalize">Price</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          <div className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full">
            <span className="text-sm font-medium capitalize">Review</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          <div className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full">
            <span className="text-sm font-medium capitalize">Color</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full">
            <span className="text-sm font-medium capitalize">Material</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full">
            <span className="text-sm font-medium capitalize">Offer</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full">
            <span className="text-sm font-medium capitalize">All filters</span>
            <SlidersIcon className="w-4 h-4 rotate-90" />
          </div>

          <div className="inline-flex items-center gap-1 px-4 py-2 ml-auto border rounded-full">
            <span className="text-sm font-medium capitalize">Sort by</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
        </div>

        <section className="my-12">
          <h2 className="text-xl font-semibold capitalize">
            Headphones for you!
          </h2>

          <div className="grid mt-6 lg:grid-cols-4 lg:gap-6">
            {Array(8)
              .fill(2)
              .map((_, i: number) => (
                <Product key={i} />
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
