import {
  PiGithubLogoThin,
  PiLinkedinLogo,
  PiTwitterLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";
import { CiLink } from "react-icons/ci";
import Link from "next/link";

export function Github({ link }: { link: string }) {
  return (
    <Link href={link} target="_blank">
      <PiGithubLogoThin size={25} />
    </Link>
  );
}

export function Linkedin({ link }: { link: string }) {
  return (
    <Link href={link} target="_blank">
      <PiLinkedinLogo size={25} />
    </Link>
  );
}

export function Twitter({ link }: { link: string }) {
  return (
    <Link href={link} target="_blank">
      <PiTwitterLogoLight size={25} />
    </Link>
  );
}

export function Youtube({ link }: { link: string }) {
  return (
    <Link href={link} target="_blank">
      <PiYoutubeLogoLight size={25} />
    </Link>
  );
}

export function LinkIcon({ link }: { link: string }) {
  return (
    <Link href={link} target="_blank">
      <CiLink size={25} />
    </Link>
  );
}
