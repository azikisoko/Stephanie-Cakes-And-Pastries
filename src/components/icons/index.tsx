import { IconType } from "react-icons";

type IconProps = {
  size?: number;
  className?: string;
};

function createIcon(Icon: IconType) {
  return function WrappedIcon({ size = 18, className }: IconProps) {
    return <Icon size={size} className={className} />;
  };
}

import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const InstagramIcon = createIcon(FaInstagram);
export const FacebookIcon = createIcon(FaFacebookF);
export const TikTokIcon = createIcon(FaTiktok);
export const WhatsAppIcon = createIcon(FaWhatsapp);
