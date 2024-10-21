import Stack from "@/components/common/stack/index";
import { Header, Text } from "@/components/common/typography";
import ShareSocialMedia from "@/components/share-social-media";
import { IShareSocialMedia } from "@/components/share-social-media/share-social-media.component";
import ChevronDown from "@/public/assets/icons/chevron-down-outline.svg";
import GlobeIcon from "@/public/assets/icons/globe.svg";
import type { Maybe } from "graphql/jsutils/Maybe";
import type {
  Footer as FooterType,
  NavigationLinkItem,
} from "lib/__generated/sdk";

const Footer = (props: Maybe<FooterType> | undefined) => {
  const navigationLinks =
    props?.navigationLinks?.navigationLinkItemCollection?.items;
  const socialItems = props?.socialItemsCollection?.items;
  const followLabel = props?.followLabel;

  const renderNavigationLinks = (
    links: Maybe<NavigationLinkItem>[]
  ): JSX.Element[] => {
    return links
      .map((link, idx) => {
        if (!link) return null;
        return (
          <li key={idx}>
            <a
              href={link.url || ""}
              className="block pt-3 text-white/80 dark:text-white/80"
            >
              {link.title}
            </a>
            {link.navigationLinkItemCollection && (
              <ul className="pl-4">
                {renderNavigationLinks(link.navigationLinkItemCollection.items)}
              </ul>
            )}
          </li>
        );
      })
      .filter(Boolean) as JSX.Element[];
  };

  const renderFooter = () => {
    return navigationLinks
      ?.map((menu, idx) => {
        if (!menu) return null;
        return (
          <Stack direction="col" key={idx}>
            <details className="w-full md:hidden">
              <summary className="relative flex w-full justify-between items-center cursor-pointer max-sm:gap-4">
                <a href={menu.url || ""} target="_self">
                  <Header
                    as="h3"
                    weight="medium"
                    isCapitalize
                    color="white"
                    size="md"
                    className="py-3 md:text-white/80 md:dark:text-white/80"
                  >
                    {menu.title}
                  </Header>
                </a>
                <ChevronDown className="size-4 ltr:float-right rtl:float-left" />
              </summary>
              <ul>
                {renderNavigationLinks(
                  menu.navigationLinkItemCollection?.items || []
                )}
              </ul>
            </details>
            <div className="hidden md:flex flex-col items-stretch justify-start max-sm:gap-4">
              <a href={menu.url || ""} target="_self">
                <Header
                  as="h3"
                  weight="medium"
                  isCapitalize
                  color="white"
                  size="md"
                  className="py-3 md:text-white/80 md:dark:text-white/80"
                >
                  {menu.title}
                </Header>
              </a>
              <ul>
                {renderNavigationLinks(
                  menu.navigationLinkItemCollection?.items || []
                )}
              </ul>
            </div>
          </Stack>
        );
      })
      .filter(Boolean) as JSX.Element[];
  };

  const icons = socialItems
    ?.map((socialItem) => socialItem?.key)
    .filter(Boolean) as IShareSocialMedia["icons"];
  const shareURL =
    socialItems?.reduce((acc, socialItem) => {
      if (socialItem?.key && socialItem?.url) {
        acc[socialItem.key] = socialItem.url;
      }
      return acc;
    }, {} as { [key: string]: string }) || {};

  return (
    <div className="print:hidden flex flex-col-reverse">
      <footer
        className="bg-primary 
      max-sm:dark:bg-[rgba(25,25,25,1)]
      max-sm:group-has-[#goki-navigation]/layout:pb-20 
      max-sm:peer-[.info-login-register]:!pb-40
      max-lg:group-has-[#mobile-ingredients-footer]/layout:!pb-[170px]
      "
      >
        <div className="container mx-auto">
          <Stack
            direction="col"
            className="py-8  px-4 md:px-0 md:flex-row lg:justify-between text-white "
            spacing={2}
          >
            {renderFooter()}
          </Stack>
          <Stack
            alignItems="center"
            direction="col"
            className="lg:py-8 border-b border-red-300 border-opacity-10 flex-row text-white  justify-end gap-3"
          >
            <div className="hidden md:block">
              <Text className="text-white/80 dark:text-white/80 font-medium">
                {followLabel}
              </Text>
            </div>
            <div className="hidden md:block">
              <ShareSocialMedia
                icons={icons}
                shareURL={shareURL}
                className="[&_a]:w-10 [&_a]:h-10 gap-4"
              />
            </div>
          </Stack>

          <Stack className="py-4 px-4 md:px-0 lg:hidden  border-b border-red-300 border-opacity-10 justify-between">
            <Text color="white" weight="light">
              {" "}
              Language:{" "}
            </Text>
            <a href="#" target="_self">
              <Text className="text-white/80 dark:text-white/80" weight="light">
                {" "}
                English
              </Text>
            </a>
          </Stack>
          <Stack
            className="pt-4 lg:flex-row lg:items-center lg:py-4 py-6  text-base  px-4 md:px-0 lg:gap-12 text-white/80 dark:text-white/80"
            direction="col"
            spacing={4}
          >
            <a href="#" target="_self">
              <Text as="span" className="text-white/80 dark:text-white/80">
                Privacy Policy
              </Text>
            </a>
            <a href="#" target="_self">
              <Text as="span" className="text-white/80 dark:text-white/80">
                Terms & Conditions
              </Text>
            </a>
            <Text
              as="span"
              className="lg:order-first text-white/80 dark:text-white/80"
            >
              &copy; {new Date().getFullYear()} Goody Kitchen All rights
              Reserved
            </Text>
            <Stack
              className="hidden md:flex lg:ml-auto lg:rtl:mr-auto lg:rtl:ml-0 text-white"
              spacing={2}
            >
              <a href="#" target="_self">
                <Text
                  className="text-white/80 dark:text-white/80"
                  weight="light"
                >
                  English
                </Text>
              </a>
              <GlobeIcon
                width={24}
                height={24}
                fill="white"
                className="opacity-80"
              />
            </Stack>
          </Stack>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
