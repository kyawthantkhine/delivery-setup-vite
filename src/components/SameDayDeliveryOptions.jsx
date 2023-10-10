import { useState } from "react";
import React from "react";
import TimeRequierdToDeliverInput from "./TimeRequierdToDeliverInput";
import AllowToSelectDeliveryTime from "./AllowToSelectDeliveryTime";

const SameDayDeliveryOptions = () => {
  const [timeRequired, setTimeRequired] = useState(0);
  const [typeOfTime, setTypeOfTime] = useState("minutes");
  const [allowToSelectDeliveryTime, setAllowToSelectDeliveryTime] =
    useState(false);

  return (
    <div className="flex flex-col gap-3">
      <TimeRequierdToDeliverInput
        typeOfTime={typeOfTime}
        setTypeOfTime={setTypeOfTime}
        timeRequired={timeRequired}
        setTimeRequired={setTimeRequired}
      />
      {/* other options */}
      <div className="flex flex-col gap-3">
      <h2 className="font-semibold text-lg">အခြား</h2>
        <AllowToSelectDeliveryTime
        allowToSelectDeliveryTime={allowToSelectDeliveryTime}
        setAllowToSelectDeliveryTime={setAllowToSelectDeliveryTime}
      />
      </div>
      
    </div>
  );
};

export default SameDayDeliveryOptions;
