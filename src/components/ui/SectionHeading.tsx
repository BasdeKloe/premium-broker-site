import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}
export const SectionHeading = ({
  overline,
  title,
  subtitle,
  align = "center",
  light = false,
  className
}: SectionHeadingProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: "-100px"
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className={cn("mb-12 md:mb-16", align === "center" && "text-center", align === "left" && "text-left", className)}>
      {overline && <span className={cn("text-overline mb-4 block", light ? "text-gold-400" : "text-gold-500")}>
          {overline}
        </span>}
      
      {subtitle && <p className={cn("text-body-lg max-w-3xl", align === "center" && "mx-auto", light ? "text-neutral-300" : "text-neutral-500")}>
          {subtitle}
        </p>}
    </motion.div>;
};