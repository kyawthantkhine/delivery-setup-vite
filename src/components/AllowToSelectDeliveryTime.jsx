import { Switch } from "@mui/material";
import DeliveryTimeSelection from "./DeliveryOptions/DeliveryTimeSelection";

const AllowToSelectDeliveryTime = ({
  allowToSelectDeliveryTime,
  setAllowToSelectDeliveryTime,
}) => {
  return (
    <div className=" flex flex-col gap-2 mb-10">
      <div className="flex justify-between">
        <p className=" text-lg w-3/4 ">
          လာရောက်ပို့ဆောင်ချိန်ကို ရွေးခွင့်ပေးမည်
        </p>
        <Switch
          checked={allowToSelectDeliveryTime}
          onChange={() =>
            setAllowToSelectDeliveryTime(!allowToSelectDeliveryTime)
          }
        />
      </div>
      {allowToSelectDeliveryTime && <DeliveryTimeSelection/>}
    </div>
  );
};

export default AllowToSelectDeliveryTime;
