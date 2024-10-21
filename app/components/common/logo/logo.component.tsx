import BrandLogoRedBlack from "@/public/assets/img/logo-red-black.svg";
import BrandLogoRedWhite from "@/public/assets/img/logo-red-white.svg";
import BrandLogoWhite from "@/public/assets/img/logo-white.svg";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({ width, height = 48, ...rest }: LogoProps): JSX.Element => {
  return (
    <>
      <BrandLogoRedBlack
        width={width}
        height={height}
        {...{ ...rest, className: "dark:hidden " + (rest.className || "") }}
      />
      <BrandLogoRedWhite
        width={width}
        height={height}
        {...{
          ...rest,
          className:
            "hidden dark:block dark:md:hidden " + (rest.className || ""),
        }}
      />
      <BrandLogoWhite
        width={width}
        height={height}
        {...{
          ...rest,
          className: "hidden dark:md:block " + (rest.className || ""),
        }}
      />
    </>
  );
};

export default Logo;
