import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import brothersFamily from "@/assets/brothers-team-beach.jpg";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <img
                src={brothersFamily}
                alt="Casati Brothers with their father Renato"
                className="w-full grayscale-img rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              ROOTED IN<br />
              <span className="text-primary">FAMILY</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Born from the passion of their father Renato, who left everything behind to follow his sons' dream. 
                A family united by wind, waves, and an unwavering commitment to greatness.
              </p>

              <p>
                Lorenzo and Leonardo Casati didn't just learn to kite — they were born to fly. 
                Raised with the ocean as their playground and the wind as their guide, 
                they've become the most dominant force in professional kiteboarding.
              </p>

              <p className="text-foreground font-medium italic text-xl md:text-2xl">
                "We don't just ride the wind. We are the wind."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
