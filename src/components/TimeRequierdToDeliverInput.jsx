import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const TimeRequierdToDeliverInput = ({
  timeRequired,
  setTimeRequired,
  typeOfTime,
  setTypeOfTime,
}) => {
  return (
    <div className="flex flex-col gap-3 my-5">
      <h2 className="font-semibold text-lg">ပို့ဆောင်ရန်ကြာမြင့်ချိန်</h2>
      <div className="flex gap-2">
        <input
          className="outline-none border p-3 flex-grow rounded-lg "
          type="number"
          value={timeRequired}
          onChange={(e) => {
            setTimeRequired(e.target.value);
          }}
        />
        <FormControl >
       
          <Select
           
            id="demo-simple-select"
            value={typeOfTime}
            
            onChange={(e) => setTypeOfTime(e.target.value)}
          >
            <MenuItem value={"minutes"}>မိနစ်အတွင်း</MenuItem>
            <MenuItem value={"hours"}>နာရီအတွင်း</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default TimeRequierdToDeliverInput;
