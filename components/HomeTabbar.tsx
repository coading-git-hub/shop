"use client";
import { productType } from "@/constants/data";
import Link from "next/link";
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 justify-between w-full px-2 md:px-4 lg:px-6 xl:px-8">
      <div className="flex flex-wrap items-center gap-2 sm:gap-1.5 text-sm font-semibold w-full sm:w-auto">
        <div className="flex flex-wrap items-center gap-2 sm:gap-1.5 md:gap-3 w-full sm:w-auto">
          {productType?.map((item) => (
            <button
              onClick={() => onTabSelect(item?.title)}
              key={item?.title}
              className={`border border-shop_light_green/30 px-3 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect text-xs sm:text-sm whitespace-nowrap ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/10"}`}
            >
              {item?.title}
            </button>
          ))}
        </div>
      </div>
      <Link
        href={"/shop"}
        className="border border-darkColor px-3 py-1.5 md:px-4 md:py-1 rounded-full hover:bg-shop_light_green hover:text-white hover:border-shop_light_green hoverEffect text-xs sm:text-sm w-full sm:w-auto text-center"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabbar;
