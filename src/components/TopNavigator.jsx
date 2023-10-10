import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import BackButton from "./BackButton";

const TopNavigator = ({ className, title }) => {
  return (
    <div className={twMerge("bg-white sticky top-0 z-40 ", className)}>
      <div className="md:container flex items-center gap-x-3  py-3">
        {/* this icon will be replaced after getting the design file */}
        <BackButton />
        <h1 className="font-semibold text-lg md:text-2xl text-gray-700">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TopNavigator;
