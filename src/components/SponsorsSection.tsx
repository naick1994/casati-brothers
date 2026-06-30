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
    <section id="sponsors" className="py-20 md:py-32 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-card-foreground/40 uppercase tracking-[0.3em] text-xs mb-4">Partners &amp; Sponsors</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            OUR PARTNERS
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-card-foreground/10 mb-16" />

        {/* Sponsor logos — white on dark, opacity on idle */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              {sponsor.url ? (
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <SponsorLogo sponsor={sponsor} />
                </a>
              ) : (
                <SponsorLogo sponsor={sponsor} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-b border-card-foreground/10 mb-16" />

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
            className="font-sans uppercase tracking-widest text-xs bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-6"
          >
            Become a Partner
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
    {sponsor.logo ? (
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="h-10 w-auto object-contain brightness-0 invert"
      />
    ) : (
      <span className="text-card-foreground/60 font-medium text-sm uppercase tracking-wider">
        {sponsor.name}
      </span>
    )}
  </div>
);

export default SponsorsSection;
