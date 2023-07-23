import { PrimaryButton, SecondaryButton } from "@/components/button/";
import { ProductImage, Rating } from "@/features/product/";

import { ReactComponent as ArchiveIcon } from '@/assets/icons/archive.svg';
import { Breadcrumb } from "@/features/breadcrumb/";
import { Color } from "@/features/color/";
import { InputNumberButton } from "@/components/InputNumberButton";
import { Navbar } from "@/components/Navbar";
import { ReactComponent as TruckIcon } from '@/assets/icons/truck.svg';

export const ProductPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />

        <div className="mt-6">
          <Breadcrumb />
        </div>

        <section className="py-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="pr-6">
              <ProductImage />
              <div className="grid mt-6 lg:grid-cols-4 lg:gap-4">
                {Array(4)
                  .fill(4)
                  .map((_, index) => (
                    <ProductImage key={index} />
                  ))}
              </div>
            </div>

            <div className="pl-10 pr-40 leading-snug">
              <h2 className="text-3xl font-semibold">Airpods- Max</h2>
              <p className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                tenetur fugit rem molestiae blanditiis!
              </p>

              <Rating />

              <div className="py-6 mt-6 border-t border-gray-200">
                <p className="text-xl font-medium">$549.00 or $99.99/month</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>

              <div className="py-6 border-t border-gray-200">
                <p className="text-lg font-medium">Choose a Color </p>
                <div className="flex items-center gap-4 mt-4">
                  <Color isActive />
                  <Color />
                  <Color />
                  <Color />
                  <Color />
                </div>
              </div>

              <div className="flex items-center gap-4 py-6 border-t border-gray-200">
                <InputNumberButton />

                <p className="text-sm">
                  Only{" "}
                  <span className="font-medium text-red-500">
                    12 Items left!
                  </span>
                  <br />
                  Don't miss it
                </p>
              </div>

              <div className="flex items-center gap-4 py-4">
                <PrimaryButton className="flex-1 p-3 px-8">
                  Buy Now
                </PrimaryButton>

                <SecondaryButton className="flex-1 p-3 px-6">
                  Add to Cart
                </SecondaryButton>
              </div>

              <div className="mt-6 leading-snug border rounded-lg divide-y">
                <div className="flex items-start gap-4 px-6 py-4">
                  <TruckIcon className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-semibold">Free Delivery</p>
                    <a className="underline text-sm" href="#">Enter your postal code for delivery availiability</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 px-6 py-4">
                  <ArchiveIcon className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-semibold">Return Delivery</p>
                    <p className="capitalize text-sm">
                      Free 30days delivery return. <a className="underline" href="#">Details</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
