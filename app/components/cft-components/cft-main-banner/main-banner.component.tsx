import ContentfulImage from "@/components/cft-components/cft-image";
import Button from "@/components/common/button";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import Certificate from "@/public/assets/icons/certificate.svg";
import Check from "@/public/assets/icons/check.svg";
import IconScroll from "@/public/assets/icons/chevron-down.svg";
import { clsxm } from "@/utils/twMerge.utils";
import { MainBanner as MainBannerType } from "lib/__generated/sdk";

interface MainBannerProps extends MainBannerType {
  className?: string;
}

const MainBanner = ({
  className,
  title,
  image,
  subtitle1,
  subtitle2,
  subtitle3,
}: MainBannerProps): JSX.Element => {
  return (
    <div className="md:container md:mx-auto lg:my-6">
      <div
        className={clsxm(
          "w-full bg-cover bg-center rounded-xl sm-layout-body-absolute h-[100vh] md:h-fit relative",
          className
        )}
      >
        <ContentfulImage
          src={image?.url || ""}
          alt={image?.title || image?.description || "Masterclass Main Banner"}
          fill
          loading="eager"
          className="object-center object-cover pointer-events-none rounded-xl"
        />
        <div className="cursor-default rounded-xl bg-black/40 py-8 md:py-20 w-full h-full flex justify-start relative z-[1]">
          <div className="md:grow-[0.5] md:max-w-[50%]">
            <div className="max-sm:mx-auto max-sm:mt-16 flex flex-col justify-center h-full w-full p-4 ltr:md:pl-16 rtl:md:pr-16 text-left">
              <div className="mt-4">
                <Header
                  as="h2"
                  weight="semibold"
                  color="white"
                  className="leading-normal rtl:text-right text-[2rem]"
                >
                  {title}
                </Header>
              </div>

              <div className="mt-4 mb-8 rtl:text-right">
                <div className="mt-2 flex items-start">
                  <span>
                    <Check
                      className="text-white self-center"
                      width={24}
                      height={24}
                    />
                  </span>

                  <Text
                    className="ltr:ml-2 rtl:mr-2"
                    color="white"
                    size="md"
                    weight="light"
                  >
                    {subtitle1}
                  </Text>
                </div>
                <div className="mt-2 flex items-start">
                  <span>
                    <Check
                      className="text-white self-center"
                      width={24}
                      height={24}
                    />
                  </span>

                  <Text
                    className="ltr:ml-2 rtl:mr-2"
                    color="white"
                    size="md"
                    weight="light"
                  >
                    {subtitle2}
                  </Text>
                </div>
                <div className="mt-2 flex items-start">
                  <span>
                    {" "}
                    <Certificate
                      className="self-center"
                      width={24}
                      height={24}
                    />
                  </span>

                  <Text
                    className="ltr:ml-2 rtl:mr-2"
                    color="white"
                    size="md"
                    weight="light"
                  >
                    {subtitle3}
                  </Text>
                </div>
              </div>

              <div className="mt-2 flex justify-between">
                <Button
                  as="a"
                  href="#"
                  variant="contained"
                  className="w-full md:w-fit py-4 md:px-6 bg-primary_red"
                >
                  Login/Register
                </Button>
              </div>
              <IconScroll
                className="text-white mx-auto my-6 md:hidden"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
