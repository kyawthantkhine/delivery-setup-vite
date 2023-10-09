import { twMerge } from "tailwind-merge";

const TopNavigator = ({className, title}) => {
  return (
    <div className={twMerge('bg-white sticky top-0 z-40 ', className)}>
    <div className="md:container flex items-center gap-x-2 px-4 py-3">
        {/* this icon will be replaced after getting the design file */}
      <span className="font-bold text-xl">{`<`}</span>
      <h1 className="font-semibold text-lg md:text-2xl">{title}</h1>
    </div>
  </div>
  )
}

export default TopNavigator