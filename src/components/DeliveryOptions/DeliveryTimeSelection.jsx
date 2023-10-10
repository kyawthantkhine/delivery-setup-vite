import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState } from "react";
import AutoGeneratedTimeOptions from "./AutoGeneratedTimeOptions";
import CustomTimeOptionsSelection from "./CustomTimeOptionsSelection";


const DeliveryTimeSelection = () => {
    const [timeSelectionType, setTimeSelectionType] = useState("autoTime");

    const handleChange = (event) => {
      setTimeSelectionType(event.target.value);
    };
  return (
    <div>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={timeSelectionType}
          onChange={handleChange}
        >
          <FormControlLabel
            value="autoTime"
            control={<Radio />}
            label="အော်တိုသတ်မှတ်ရန်"
          />
          <FormControlLabel
            value="customTime"
            control={<Radio />}
            label="မိမိစိတ်ကြိုက်"
          />
        </RadioGroup>
      </FormControl>
      {timeSelectionType == "autoTime" ? (
        <AutoGeneratedTimeOptions />
      ) : (
        <CustomTimeOptionsSelection />
      )}
    </div>
  );
};

export default DeliveryTimeSelection;
