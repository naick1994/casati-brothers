import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, ChevronDown, ChevronUp, Instagram, Youtube } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import TikTokIcon from "./TikTokIcon";

interface Achievement {
  title: string;
  icon?: "gold" | "silver" | "bronze";
}

interface SocialLinks {
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}

interface BioInfo {
  birthDate?: string;
  birthPlace?: string;
  basedIn?: string;
  quote?: string;
}

interface AthleteSectionProps {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  achievements: Achievement[];
  otherAchievements: string[];
  reversed?: boolean;
  socials?: SocialLinks;
  bio?: BioInfo;
}

const getIconColor = (icon?: "gold" | "silver" | "bronze") => {
  switch (icon) {
    case "gold":
      return "text-yellow-500";
    case "silver":
      return "text-gray-400";
    case "bronze":
      return "text-amber-700";
    default:
      return "text-primary";
  }
};

const AthleteSection = ({
  id,
  name,
  subtitle,
  image,
  achievements,
  otherAchievements,
  reversed = false,
  socials,
  bio,
}: AthleteSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${reversed ? "md:flex-row-reverse" : ""}`}>
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={reversed ? "md:order-2" : ""}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover grayscale-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={reversed ? "md:order-1" : ""}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
              {name}
            </h2>
            <p className="text-primary text-lg md:text-xl uppercase tracking-wider mb-4">
              {subtitle}
            </p>

            {/* Social Links */}
            {socials && (
              <div className="flex gap-4 mb-6">
                {socials.instagram && (
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                )}
                {socials.youtube && (
                  <a
                    href={socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                )}
                {socials.tiktok && (
                  <a
                    href={socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="TikTok"
                  >
                    <TikTokIcon size={24} />
                  </a>
                )}
              </div>
            )}

            {/* Bio Info */}
            {bio && (
              <div className="mb-6 space-y-2 text-sm text-muted-foreground">
                {bio.birthDate && bio.birthPlace && (
                  <p>Born: {bio.birthDate} — {bio.birthPlace}</p>
                )}
                {bio.basedIn && (
                  <p>Based in: {bio.basedIn}</p>
                )}
                {bio.quote && (
                  <blockquote className="mt-4 pl-4 border-l-2 border-primary italic text-foreground text-base">
                    "{bio.quote}"
                  </blockquote>
                )}
              </div>
            )}

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Trophy className={`w-5 h-5 mt-1 flex-shrink-0 ${getIconColor(achievement.icon)}`} />
                  <span className="text-foreground font-medium text-base md:text-lg">
                    {achievement.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Other Achievements - Collapsible */}
            {otherAchievements.length > 0 && (
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <span className="uppercase tracking-wider text-sm">Other Results</span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                    {otherAchievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AthleteSection;
