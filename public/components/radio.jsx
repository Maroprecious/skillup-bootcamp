import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import style from "../../styles/radio.module.css";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        What stack are you subscribing to?
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="fullstack"
        name="radio-buttons-group"
      >
        <div>
          <FormControlLabel
            value="fullstack"
            control={<Radio />}
            label="Fullstack"
          />
          <FormControlLabel
            value="frontend"
            control={<Radio />}
            label="Frontend"
          />
          <FormControlLabel
            value="backend"
            control={<Radio />}
            label="Backend"
          />
          <FormControlLabel
            value="mobile"
            control={<Radio />}
            label="Mobile App"
          />
        </div>
      </RadioGroup>
    </FormControl>
  );
}
