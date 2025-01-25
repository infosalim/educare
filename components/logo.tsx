// import Image from "next/image";
// import logo from "@/assets/lws_logo.svg";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    // <Image className={cn("max-w-[100px]", className)} src={logo} alt="logo" />
    <div className={cn(className, "font-bold text-4xl text-blue-500")}>
      EDUCARE
    </div>
  );
};