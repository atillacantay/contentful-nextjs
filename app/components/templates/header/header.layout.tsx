import Logo from "@/components/common/logo";
import { Link } from "@/i18n/routing";
import HeaderComponent from "./header-component";

const Header = (props: any): JSX.Element => {
  return (
    <div
      className="
      max-md:group-has-[.sm-layout-header-hidden]/layout:hidden
      max-md:group-has-[.sm-layout-body-absolute]/layout:absolute
      max-md:group-has-[.sm-layout-body-absolute]/layout:w-full
      max-md:group-has-[.sm-layout-body-absolute]/layout:top-0
      "
    >
      <div
        className="relative py-4 px-4 md:px-0 md:py-6 border-b border-custom2 dark:border-custom2_dark bg-white dark:bg-goki_dark
        max-md:group-[.dark]/layout:bg-transparent max-md:group-[.dark]/layout:bg-gradient-to-b  max-md:group-[.dark]/layout:from-black
        max-md:group-[.dark]/layout:pt-[1.5rem]
        max-md:group-[.dark]/layout:bg-clip-padding
        "
      >
        <div className="container mx-auto flex flex-row">
          <Link href="/" title="Goody Kitchen">
            <Logo className="h-[40px] md:h-[48px]" />
          </Link>
          <HeaderComponent {...props} />
        </div>
      </div>
    </div>
  );
};

export default Header;
