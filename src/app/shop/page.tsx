import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Package, Sprout, Wheat, type LucideIcon } from "lucide-react";
import { WaitlistForm } from "@/components/shop/WaitlistForm";
import { Container } from "@/components/ui/Container";
import { shopCategories, type ShopCategoryIcon } from "@/data/shop";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "SAHUBio Store — Coming Soon",
  description:
    "A direct-to-consumer and B2B ordering portal for certified seeds, organic biofertilisers, processed grains, and biological farm inputs. Join the launch waitlist.",
};

const icons: Record<ShopCategoryIcon, LucideIcon> = {
  sprout: Sprout,
  leaf: Leaf,
  wheat: Wheat,
  package: Package,
};

export default function ShopPage() {
  return (
    <section className="bg-cream py-16 lg:pt-[71px] lg:pb-[72px]">
      <Container>
        <div className="text-center">
          <p className="inline-flex h-[36px] items-center rounded-full bg-accent px-[22px] text-[12px] leading-4 font-semibold text-heading uppercase">
            Shop Launching Soon
          </p>
          <h1 className="mx-auto mt-6 max-w-[1000px] text-[34px] leading-[1.15] font-bold text-heading sm:text-[44px] lg:mt-[28px] lg:text-[56px] lg:leading-[60px]">
            SAHUBio Store — Directly Sourced
            <br className="hidden lg:block" /> Agro-Inputs &amp; Biological Products
          </h1>
          <p className="mx-auto mt-6 max-w-[840px] text-[16px] leading-[1.7] text-body lg:mt-[29px] lg:text-[18px] lg:leading-[30px]">
            We are building a simple, direct-to-consumer and B2B ordering portal for certified
            seeds, organic biofertilisers, processed grains, and biological farm inputs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 lg:mt-[43px] lg:grid-cols-[262px_1fr_262px] lg:gap-9">
          <div className="relative hidden h-[440px] overflow-hidden rounded-[20px] lg:block">
            <Image
              src="/images/shop/seedlings.jpg"
              alt="Young maize seedlings growing in rich soil"
              fill
              sizes="262px"
              className="object-cover"
            />
          </div>
          <div className="rounded-[20px] border border-line bg-white p-6 sm:px-9 sm:pt-9 sm:pb-[32px]">
            <WaitlistForm />
          </div>
          <div className="relative hidden h-[440px] overflow-hidden rounded-[20px] lg:block">
            <Image
              src="/images/shop/grains.jpg"
              alt="Baskets of maize and beans at a local market"
              fill
              sizes="262px"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-[110px] lg:grid-cols-4">
          {shopCategories.map((category, index) => {
            const Icon = icons[category.icon];
            const featured = index === 0;
            return (
              <li
                key={category.title}
                className={cn(
                  "rounded-[20px] px-6 pt-[26px] pb-6 lg:min-h-[156px]",
                  featured ? "bg-brand-800" : "bg-white",
                )}
              >
                <Icon
                  aria-hidden
                  className={cn("size-7", featured ? "text-accent" : "text-ink")}
                  strokeWidth={1.4}
                />
                <h2
                  className={cn(
                    "mt-5 text-[19px] leading-7 font-semibold lg:text-[21px]",
                    featured ? "text-white" : "text-heading",
                  )}
                >
                  {category.title}
                </h2>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
