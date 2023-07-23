import { ReactComponent as ChevronDownIcon } from "@/assets/icons/chevron-down.svg";
import { Navbar } from "@/components/Navbar";
import { PrimaryButton } from "@/components/button";
import { Product } from "@/features/product/Product";
import { ReactComponent as SlidersIcon } from "@/assets/icons/sliders.svg";
import { Topbar } from "@/components/Topbar";

export const IndexPage = () => {
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

        <section className="my-16">
          <h2 className="text-xl font-semibold capitalize">
            Shop our top categories
          </h2>

          <div className="grid mt-6 lg:grid-cols-6 lg:gap-4">
            {Array(6)
              .fill(6)
              .map((_, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] text-center text-xl font-semibold bg-gray-600 rounded-lg text-white py-4"
                >
                  <span>Furniture</span>
                </div>
              ))}
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-xl font-semibold capitalize">
            Todays best deals for you!
          </h2>

          <div className="grid mt-6 lg:grid-cols-3 lg:gap-8">
            {Array(3)
              .fill(3)
              .map((_, i) => (
                <Product key={i} />
              ))}
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-xl font-semibold capitalize">Choose By Brand</h2>

          <div className="grid mt-6 lg:grid-cols-4 lg:gap-4">
            {Array(8)
              .fill(8)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-gray-200 rounded-lg"
                >
                  <div className="w-20 h-20 bg-red-500 rounded-full"></div>
                  <div className="text-black">
                    <span className="block text-lg font-semibold">Staples</span>
                    <span className="text-sm">Delivery with in 24 hours</span>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <div className="items-center hidden gap-4 mt-12 text-black flexs">
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

        <section className="my-16">
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

      <div className="px-40 py-16 mt-4 mb-8 bg-yellow-100 rounded">
        <p className="lg:text-6xl text-green-900 lg:leading-snug [text-wrap:balance] capitalize">
          Get 5% Cash Back
        </p>

        <p className="mt-6 text-xl">on shopcart.com</p>

        <PrimaryButton className="p-3 px-8 mt-8">Buy Now</PrimaryButton>
      </div>
    </>
  );
}
