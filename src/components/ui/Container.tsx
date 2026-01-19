import { cn } from "@/lib/utils";
import React from "react";
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}
export const Container = ({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) => {
  return <div className={cn("mx-auto w-full px-6 lg:px-8 border-0", size === "default" && "max-w-7xl", size === "narrow" && "max-w-5xl", size === "wide" && "max-w-screen-2xl", className)} {...props}>
      {children}
    </div>;
};