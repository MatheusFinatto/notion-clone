import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={40}
        height={40}
        className="dark:hidden"
      />
      <Image
        src={"/logo-dark.svg"}
        alt="logo-dark"
        width={40}
        height={40}
        className="dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;
