import { useState } from "react";
import TopNavigatorWithSteps from "../components/TopNavigatorWithSteps";
import InCityDeliveryOptions from "../components/InCityDeliveryOptions";
import OutOfCityDeliveryOptions from "../components/OutOfCityDeliveryOptions";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { twMerge } from "tailwind-merge";
const CreateDelivery = () => {
  const [selectedDelivery, setSelectedDelivery] = useState('inCity');
  return (
    <div className="">
      <TopNavigatorWithSteps totalSteps={3} step={1} title={"အသစ်ထည့်မည်"} />
      <div className="flex gap-3">
        <button
          onClick={() => setSelectedDelivery("inCity")}
          className={twMerge(
            "py-3 rounded-full  flex-grow text-grey-600 bg-grey-200",
            selectedDelivery == "inCity"  && "bg-blue-500 text-white "
          )}
        >
          မြို့တွင်း
        </button>
        <button
          onClick={() => setSelectedDelivery("outOfCity")}
          className={twMerge(
            "py-3 rounded-full  flex-grow text-grey-600 bg-grey-200",
            selectedDelivery !== "inCity"   && "bg-blue-500 text-white "
          )}
        >
          {" "}
          အခြားမြို့
        </button>
      </div>
      {selectedDelivery == 'inCity' ? (
        <InCityDeliveryOptions />
      ) : (
        <OutOfCityDeliveryOptions />
      )}
    </div>
  );
};

export default CreateDelivery;
