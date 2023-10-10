import { twMerge } from "tailwind-merge";
import BackButton from "./BackButton";

const TopNavigatorWithSteps = ({ className, title, step, totalSteps }) => {
  return (
    <div className={twMerge("bg-white sticky top-0 z-40 ", className)}>
      <div className="md:container flex items-center justify-between gap-x-3  py-3">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="font-semibold text-lg md:text-2xl text-gray-700">
            {title}
          </h1>
        </div>
        <p className="text-gray-500">Step {step} of {totalSteps}</p>
      </div>
    </div>
  );
};

export default TopNavigatorWithSteps;
