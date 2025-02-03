"use client";

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
  value: number; // Progress value as a number
  variant?: Variant; // Optional, defaults to "default"
  size?: Size; // Optional, defaults to "default"
}

export const CourseProgress: FC<CourseProgressProps> = ({
  value,
  variant = "default",
  size = "default",
}) => {
  return (
    <div>
      <Progress
        value={value}
        className={cn("h-2", variant === "success" && "bg-emerald-200")}
      />
      <p
        className={cn(
          "font-medium mt-2",
          colorByVariant[variant],
          sizeByVariant[size]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};