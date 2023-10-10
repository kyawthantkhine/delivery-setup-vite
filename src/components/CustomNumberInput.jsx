import { FormControl, Input, InputAdornment } from "@mui/material";


const CustomNumberInput = ({
    unit,
    amount,
    label,
    setAmount,
    placeholder = "",
  }) => {
    return (
      <div className="flex flex-col gap-2">
        <p>{label}</p>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <Input
            type="number"
            placeholder={placeholder}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
        </FormControl>
      </div>
    );
  };

  export default CustomNumberInput;
  