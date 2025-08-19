import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ServiceSection from "./ServiceSection";
import ServiceText from "./ServiceText";

const ServiceMain = () => {
  return (
    <div id="services" className="max-w-[1200px] mx-auto px-6 py-2">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ServiceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
        <ServiceSection />
      </motion.div>
    </div>
  );
};

export default ServiceMain;
