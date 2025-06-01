
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
  overlayOpacity?: string;
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "/get-involved",
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070",
  overlayOpacity = "opacity-50",
}: HeroProps) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {buttonText && (
            <Link to={buttonLink} className="btn-primary">
              {buttonText}
            </Link>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink} className="btn-outline text-white border-white hover:bg-white/20">
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
