import { cn } from "@/lib/utils";

// Define the type for the props
interface SectionTitleProps {
  children: React.ReactNode; // Use React.ReactNode to allow any valid React child node
  className?: string;        // Optional, since `className` is not always provided
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold", className)}>
      {children}
    </h2>
  );
};