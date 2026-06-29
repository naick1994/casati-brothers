import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

interface Sponsor {
  name: string;
  logo?: string;
  url?: string;
}

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

const SponsorsSection = ({ sponsors }: SponsorsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sponsors" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            OUR <span className="text-primary">PARTNERS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proud to work with the best brands in the industry
          </p>
        </motion.div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${
                index === sponsors.length - 1 && sponsors.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1 mx-auto max-w-[calc(50%-0.75rem)] sm:max-w-none"
                  : ""
              }`}
            >
              {sponsor.url ? (
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <SponsorCard sponsor={sponsor} />
                </a>
              ) : (
                <SponsorCard sponsor={sponsor} />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            onClick={handleContactClick}
            size="lg"
            className="font-display uppercase tracking-wider"
          >
            Become a Partner
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="aspect-[3/2] bg-secondary/50 rounded-lg p-6 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:scale-105">
    {sponsor.logo ? (
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="max-w-full max-h-full object-contain transition-all duration-300"
      />
    ) : (
      <span className="text-muted-foreground font-medium text-sm text-center">
        {sponsor.name}
      </span>
    )}
  </div>
);

export default SponsorsSection;
