import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import SameDayDeliveryOptions from "./SameDayDeliveryOptions";
import OtherDayDeliveryOptions from "./OtherDayDeliveryOptions";
OtherDayDeliveryOptions;
const InCityDeliveryOptions = () => {
  const [deliDay, setValue] = useState("sameDay");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 mt-5">
        <p className="text-gray-500 text-md">ရွေးချယ်ပါ</p>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={deliDay}
            onChange={handleChange}
          >
            <FormControlLabel
              value="sameDay"
              control={<Radio />}
              label="နေ့ချင်းပို့"
            />
            <FormControlLabel
              value="otherDay"
              control={<Radio />}
              label="နောက်ရက်ပို့"
            />
          </RadioGroup>
        </FormControl>
        <p className="text-gray-400">
         { "Same day delivery"} will deliver to home
        </p>
      </div>

      {deliDay == "sameDay" ? (
        <SameDayDeliveryOptions />
      ) : (
        <OtherDayDeliveryOptions />
      )}
    </div>
  );
};

export default InCityDeliveryOptions;
