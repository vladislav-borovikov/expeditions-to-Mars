import { useState } from "react";
import { SolTextField } from "./SolFilter.styled";

const SolFilter = ({ getValueFromForm }) => {
  const [value, setValue] = useState(0);

  return (
    <SolTextField
      onChange={(event) => {
        setValue(event.currentTarget.value);
        getValueFromForm({ sol: event.currentTarget.value });
      }}
      id="outlined-number"
      label="Sol"
      type="number"
      inputProps={{
        step: 1,
        min: 0,
        max: Infinity,
        type: "number",
      }}
    />
  );
};
export default SolFilter;
