
import { Link } from "react-router-dom";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText?: string;
}

const ProgramCard = ({
  title,
  description,
  image,
  link,
  buttonText = "Learn More",
}: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link to={link} className="btn-primary self-start">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
