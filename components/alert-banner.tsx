import { FC } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircleIcon, LucideIcon } from "lucide-react";

// Define variants for the banner
const bannerVariants = cva(
  "border text-center p-4 text-sm flex items-center w-full",
  {
    variants: {
      variant: {
        warning: "bg-yellow-200/80 border-yellow-300 text-primary",
        success: "bg-emerald-700 border-emerald-800 text-secondary",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  }
);

// Map of variants to their respective icons
const iconMap: Record<string, LucideIcon> = {
  warning: AlertTriangle,
  success: CheckCircleIcon,
};

// Define props for the AlertBanner component
interface AlertBannerProps extends VariantProps<typeof bannerVariants> {
  label: string;
  className?: string;
}

const AlertBanner: FC<AlertBannerProps> = ({ label, variant, className }) => {
  const Icon = iconMap[variant || "warning"]; // Default to "warning" if variant is undefined

  return (
    <div className={cn(bannerVariants({ variant }), className)}>
      <Icon className="h-4 w-4 mr-2" />
      {label}
    </div>
  );
};

export default AlertBanner;
