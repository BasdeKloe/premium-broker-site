import { motion } from "framer-motion";
import yachtAerial from "@/assets/yacht-aerial.jpg";

export const ImageBreak = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[50vh] min-h-[250px] xs:min-h-[280px] sm:min-h-[320px] md:min-h-[400px] overflow-hidden"
    >
      <img
        src={yachtAerial}
        alt="Luchtfoto van een luxe superjacht"
        className="w-full h-full object-cover md:object-[center_center] object-[45%_30%]"
        loading="lazy"
      />
      {/* Subtle gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-navy-950/20" />
    </motion.section>
  );
};
