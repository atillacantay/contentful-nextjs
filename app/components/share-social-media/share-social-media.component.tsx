import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import ColorEmailIcon from "@/public/assets/icons/color-email.svg";
import ColorFbIcon from "@/public/assets/icons/color-fbook.svg";
import ColorLinkIcon from "@/public/assets/icons/color-link.svg";
import ColorTIcon from "@/public/assets/icons/color-twitter.svg";
import ColorWpIcon from "@/public/assets/icons/color-whatsapp.svg";
import ColorYoutubeIcon from "@/public/assets/icons/color-youtube.svg";
import FbIcon from "@/public/assets/icons/fbook.svg";
import InstagramIcon from "@/public/assets/icons/instagram.svg";
import PIcon from "@/public/assets/icons/pinterest.svg";
import SnapIcon from "@/public/assets/icons/snapchat.svg";
import TIcon from "@/public/assets/icons/twitter.svg";
import YIcon from "@/public/assets/icons/youtube.svg";
import { clsxm } from "@/utils/twMerge.utils";

export interface IShareSocialMedia {
  className?: string;
  children?: JSX.Element;
  icons?: (
    | "facebook"
    | "twitter"
    | "snapchat"
    | "pinterest"
    | "instagram"
    | "youtube"
    | "color-facebook"
    | "color-twitter"
    | "color-whatsapp"
    | "color-email"
    | "color-link"
    | "color-youtube"
  )[];
  shareURL?: {
    facebook?: "#";
    twitter?: "#";
    snapchat?: "#";
    pinterest?: "#";
    instagram?: "#";
    youtube?: "#";
    whatsapp?: "#";
    email?: "#";
    link?: "#";
  };
}

const ShareSocialMedia = ({
  className,
  children,
  icons = [
    "facebook",
    "twitter",
    "snapchat",
    "pinterest",
    "instagram",
    "youtube",
  ],
  shareURL = {
    facebook: "#",
    twitter: "#",
    snapchat: "#",
    pinterest: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "#",
    email: "#",
    link: "#",
  },
}: IShareSocialMedia): JSX.Element => {
  return (
    <Stack alignItems="center" spacing={2} className={clsxm(className)}>
      {children}
      {icons?.includes("facebook") && (
        <Button.Icon
          as="a"
          href={shareURL.facebook}
          className="bg-white/10"
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <FbIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("twitter") && (
        <Button.Icon
          as="a"
          href={shareURL.twitter}
          className="bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <TIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("snapchat") && (
        <Button.Icon
          as="a"
          href={shareURL.snapchat}
          className="bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="snapchat"
        >
          <SnapIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("pinterest") && (
        <Button.Icon
          as="a"
          href={shareURL.pinterest}
          className="bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="pinterest"
        >
          <PIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("instagram") && (
        <Button.Icon
          as="a"
          href={shareURL.instagram}
          className="bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <InstagramIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("youtube") && (
        <Button.Icon
          as="a"
          href={shareURL.youtube}
          className="bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube"
        >
          <YIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("color-facebook") && (
        <Button.Icon
          as="a"
          href={shareURL.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <ColorFbIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("color-twitter") && (
        <Button.Icon
          as="a"
          href={shareURL.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <ColorTIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("color-whatsapp") && (
        <Button.Icon
          as="a"
          href={shareURL.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="whatsapp"
        >
          <ColorWpIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("color-youtube") && (
        <Button.Icon
          as="a"
          href={shareURL.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube"
        >
          <ColorYoutubeIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("color-email") && (
        <Button.Icon
          as="a"
          href={shareURL.email}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email"
        >
          <ColorEmailIcon width={40} height={40} />
        </Button.Icon>
      )}
      {icons?.includes("color-link") && (
        <Button.Icon
          as="a"
          href={shareURL.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link"
        >
          <ColorLinkIcon width={40} height={40} />
        </Button.Icon>
      )}
    </Stack>
  );
};

export default ShareSocialMedia;
