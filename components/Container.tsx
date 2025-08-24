import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full px-2 md:px-4 lg:px-6 xl:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
