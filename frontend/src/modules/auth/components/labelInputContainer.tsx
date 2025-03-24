import { cn } from "@/lib/utils";

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-4 w-full", className)}>
      {children}
    </div>
  );
};
