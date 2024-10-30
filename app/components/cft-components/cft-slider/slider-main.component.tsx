"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import Text from "@/components/common/typography/text";

import ContentfulImage from "@/components/cft-components/cft-image";
import { EventKeys, pushEventToDataLayer } from "@/utils/event-utils";
import type { SliderItem } from "lib/__generated/sdk";
import { useTranslations } from "next-intl";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// docs https://swiperjs.com/react

const useTimerCalculator = (
  nextDate: string
): [number, number, number, number] => {
  const [now, setNow] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [now]);

  const rest = new Date(nextDate).getTime() - now;

  if (rest <= 0) return [0, 0, 0, 0];

  const days = Math.floor(rest / (1000 * 60 * 60 * 24));
  const hours = Math.floor((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((rest % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const TimerDisplay = React.memo<{ date: string }>(({ date }) => {
  const [days, hours, minutes, seconds] = useTimerCalculator(date);
  const t = useTranslations("common");
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      className="sm:gap-4"
    >
      <Stack
        direction="col"
        alignItems="center"
        justifyContent="center"
        className="bg-white/40 py-3 px-2 sm:px-4 rounded-xl"
      >
        <Text className="text-base sm:text-3xl" weight="semibold" color="white">
          {days}
        </Text>
        <Text className="text-sm sm:text-md" color="white">
          {t("days")}
        </Text>
      </Stack>
      <Stack
        direction="col"
        alignItems="center"
        justifyContent="center"
        className="bg-white/40 py-3 px-2 sm:px-4 rounded-xl"
      >
        <Text className="text-base sm:text-3xl" weight="semibold" color="white">
          {hours}
        </Text>
        <Text className="text-sm sm:text-md" color="white">
          {t("hours")}
        </Text>
      </Stack>
      <Stack
        direction="col"
        alignItems="center"
        justifyContent="center"
        className="bg-white/40 py-3 px-2 sm:px-4 rounded-xl"
      >
        <Text className="text-base sm:text-3xl" weight="semibold" color="white">
          {minutes}
        </Text>
        <Text className="text-sm sm:text-md" color="white">
          {t("minutes")}
        </Text>
      </Stack>
      <Stack
        direction="col"
        alignItems="center"
        justifyContent="center"
        className="bg-white/40 py-3 px-2 sm:px-4 rounded-xl"
      >
        <Text className="text-base sm:text-3xl" weight="semibold" color="white">
          {seconds}
        </Text>
        <Text className="text-sm sm:text-md" color="white">
          {t("seconds")}
        </Text>
      </Stack>
    </Stack>
  );
});

const Slider = ({ slides }: { slides?: SliderItem[] }): JSX.Element => {
  const handleEvent = (
    event: React.MouseEvent<HTMLElement>,
    bannerLink: string
  ) => {
    event.preventDefault();

    const data = {
      banner_url: bannerLink,
    };

    pushEventToDataLayer(EventKeys.BANNER_CLICKED, data);
    window.location.href = bannerLink;
  };

  const adjustAspectRatio = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = e.currentTarget;
    const parent = img.parentNode as HTMLElement;
    const aspectRatio = (img.naturalHeight / img.naturalWidth) * 100;
    parent.style.paddingTop = `${aspectRatio}%`;
  };

  return (
    <div data-cmp="slider-main">
      <Swiper
        autoHeight={true}
        rewind={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
        }}
      >
        {slides?.map((slide, index): JSX.Element => {
          const loadingType = index !== 0 ? "lazy" : "eager";
          if (slide.type === "banner")
            return (
              <SwiperSlide
                key={index}
                {...(slide.link
                  ? {
                      tag: "a",
                      href: slide.link,
                      onClick: (e) => handleEvent(e, slide.link || ""),
                    }
                  : {})}
              >
                {/** Hero banner example */}
                <div className="relative w-full pt-[56.25%]">
                  <ContentfulImage
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={slide.image?.url || ""}
                    width={slide.image?.width}
                    height={slide.image?.height}
                    alt={slide.image?.description}
                    sizes="(min-width: 1024px) 1280px, 100vw"
                    fetchPriority="high"
                    loading={loadingType}
                    onLoad={adjustAspectRatio}
                  />
                  <div className="absolute inset-0 bg-black/10 w-full h-full">
                    <Stack
                      direction="col"
                      alignItems="center"
                      justifyContent="center"
                      className="md:w-3/4 lg:w-2/4 mx-auto h-full  mb-[1.5rem] px-[1.5rem]"
                    >
                      <Text color="white" size="lg">
                        {slide.title}
                      </Text>
                      <Text
                        color="white"
                        weight="bold"
                        className="text-center text-xl sm:text-3xl md:text-5xl font-['FocoTrial-Bold']"
                      >
                        {slide.subtitle}
                      </Text>
                      {slide.buttonText ? (
                        <Button
                          type="button"
                          title={slide.buttonText}
                          fullWidth={true}
                          className="bg-red-600 w-60  text-white mt-3"
                        >
                          {slide.buttonText}
                        </Button>
                      ) : undefined}
                    </Stack>
                  </div>
                </div>
              </SwiperSlide>
            );

          if (slide.type === "timer") {
            return (
              <SwiperSlide
                key={index}
                {...(slide.link
                  ? {
                      tag: "a",
                      href: slide.link,
                      onClick: (e) => handleEvent(e, slide.link || ""),
                    }
                  : {})}
              >
                <div className="relative w-full pt-[56.25%]">
                  <ContentfulImage
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={slide.image?.url || ""}
                    width={slide.image?.width}
                    height={slide.image?.height}
                    alt={slide.image?.description}
                    sizes="(min-width: 1024px) 1280px, 100vw"
                    fetchPriority="high"
                    loading={loadingType}
                    onLoad={adjustAspectRatio}
                  />
                  <Stack
                    direction="col"
                    alignItems="center"
                    className="absolute gap-1 sm:gap-4 inset-0 bg-black/10 justify-around sm:justify-center max-sm:pb-[1.5rem] px-[1.5rem]"
                  >
                    <Text
                      color="white"
                      weight="semibold"
                      className="text-md sm:text-lg text-center"
                    >
                      {slide.title}
                    </Text>
                    <TimerDisplay date={slide.timerDate as string} />
                    <Button
                      type="button"
                      title={slide.buttonText}
                      fullWidth={true}
                      className="bg-red-600 w-fit text-xs sm:w-96 sm:text-base text-white"
                    >
                      {slide.buttonText}
                    </Button>
                  </Stack>
                </div>
              </SwiperSlide>
            );
          }

          return <></>;
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
