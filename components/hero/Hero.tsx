import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  image: string;
  subtitle?: string;
  ctaText?: string;
}

const Hero: React.FC<HeroProps> = ({ title, image, subtitle, ctaText }) => {
  return (
    <section className="hero-container">
      <img src={image} alt="Hero Image" className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg mb-8">{subtitle}</p>}
        {ctaText && <Button>{ctaText}</Button>}
      </div>
    </section>
  );
};

export default Hero;