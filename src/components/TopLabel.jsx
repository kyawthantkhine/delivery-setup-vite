import { twMerge } from "tailwind-merge";

import { MdOutlineSearch, MdSettings } from "react-icons/md";

const TopLabel = ({ className, title }) => {
  return (
    <div className={twMerge("bg-white sticky top-0 z-40 ", className)}>
      <div className="md:container flex items-center justify-between  py-3">
        <h1 className="font-semibold text-lg md:text-2xl text-gray-700">
          {title}
        </h1>
        <div className="flex gap-4">
          <MdOutlineSearch size={25} />
          <MdSettings size={25} />
        </div>
      </div>
    </div>
  );
};

export default TopLabel;
