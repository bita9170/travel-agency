import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import MaxLimitWrapper from "../elements/MaxLimitWrapper";

interface HeroProps {
  title?: string;
  image: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  image,
  subtitle,
  ctaText,
  ctaLink,
  className,
}) => {
  return (
    <section className={cn("hero-container", className)}>
      <div className="absolute inset-0 z-0"></div>
      <Image src={image} alt="Hero Image" fill className="object-cover" />
      <div className="absolute bottom-5 left-5 space-y-4 z-10">
        <h2 className="text-4xl font-bold">{title}</h2>
        {subtitle && <p className="text-lg">{subtitle}</p>}
        {ctaText && ctaLink && (
          <Button variant="secondary" asChild>
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hero;
