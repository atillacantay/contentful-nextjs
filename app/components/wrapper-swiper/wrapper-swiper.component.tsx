"use client";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperReact } from "swiper/react";

const WrapperSwiper = ({
  children,
  bgGradientStartColorInDarkMode = "#1e1e1e",
  props: [uniqueId] = ["swiper-" + Math.ceil(Math.random() * 1000000)],
  fromColor = "#fafafa",
}: {
  children?: JSX.Element | JSX.Element[];
  bgGradientStartColorInDarkMode?: string;
  props?: [string];
  fromColor?: string;
}) => {
  const isDevelopment =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";

  // basic rtl detect
  const isRTL = document?.documentElement?.querySelector("[dir='rtl']");

  const navigation = {
    nextEl: `#${uniqueId} .navigation-sub-${isRTL ? "prev" : "next"}`,
    prevEl: `#${uniqueId} .navigation-sub-${isRTL ? "next" : "prev"}`,
  };

  if (!isDevelopment) {
    new Swiper(`#${uniqueId}`, {
      slidesPerView: "auto",
      spaceBetween: 10,
      grabCursor: true,
      modules: [Navigation],
      navigation,
    });
  }

  return (
    <>
      {isDevelopment && (
        <SwiperReact
          className="w-full !pb-2"
          slidesPerView={"auto"}
          spaceBetween={16}
          grabCursor={true}
          modules={[Navigation]}
          navigation={navigation}
          id={uniqueId}
          style={
            {
              "--dark-bg-gradient-start-color": bgGradientStartColorInDarkMode,
              "--from-color": fromColor,
            } as React.CSSProperties
          }
        >
          {children}
          <div
            className={`navigation-sub-prev absolute top-0 z-10 left-0 h-full bg-gradient-to-r from-[color:var(--from-color)] dark:from-[color:var(--dark-bg-gradient-start-color)] pr-24 [&.swiper-button-disabled]:hidden hidden sm:flex justify-center items-center`}
          >
            <div className="relative w-10 h-10 bg-white dark:bg-goki_dark_card rounded-full border border-red-600 dark:border-primary_red_dark p-3 text-black font-[swiper-icons] p-5">
              <span className="absolute top-0 left-0 w-full h-full text-center flex justify-center items-center cursor-pointer select-none text-red-600  dark:text-primary_red_dark">
                prev
              </span>
            </div>
          </div>
          <div
            className={`navigation-sub-next absolute top-0 z-10 right-0 h-full bg-gradient-to-l from-[color:var(--from-color)] dark:from-[color:var(--dark-bg-gradient-start-color)] pl-24 [&.swiper-button-disabled]:hidden hidden sm:flex justify-center items-center`}
          >
            <div className="relative w-10 h-10 bg-white dark:bg-goki_dark_card rounded-full border border-red-600 dark:border-primary_red_dark p-3 text-black font-[swiper-icons] p-5">
              <span className="absolute top-0 left-0 w-full h-full text-center flex justify-center items-center cursor-pointer select-none text-red-600 dark:text-primary_red_dark">
                next
              </span>
            </div>
          </div>
        </SwiperReact>
      )}

      <div
        data-cmp="wrapper-slider"
        data-cmp-props={[uniqueId]}
        className="hidden"
      >
        {""}
      </div>
    </>
  );
};

export default WrapperSwiper;
