import { FC } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

// Define valid variants and sizes
type Variant = "default" | "success";
type Size = "default" | "sm";

const colorByVariant: Record<Variant, string> = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant: Record<Size, string> = {
  default: "text-sm",
  sm: "text-xs",
};

interface CourseProgressProps {
  value: number; // Progress value, expected as a number
  variant?: Variant; // Optional, defaults to "default"
  size?: Size; // Optional, defaults to "default"
}

export const CourseProgress: FC<CourseProgressProps> = ({ value, variant = "default", size = "default" }) => {
  return (
    <div>
      <Progress
        value={value}
        variant={variant} // eslint-disable-line no-use-before-define
        className={cn("h-2", variant === "default" && "text-sky-700")}
      />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVariant[variant],
          sizeByVariant[size]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};
