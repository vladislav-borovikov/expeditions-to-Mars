import { useState } from "react";
import TextField from "@mui/material/TextField";
import { RoverAutocomplete } from "./RoverFilter.styled";

const roverKinds = [
  { label: "Curiosity", value: "curiosity" },
  { label: "Opportunity", value: "opportunity" },
  { label: "Spirit", value: "spirit" },
];

const RoverFilter = ({ getValueFromForm }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <RoverAutocomplete
        disablePortal
        onChange={(event, newValue) => {
          setValue(newValue);
          getValueFromForm({ rover: newValue.value });
        }}
        id="rover-filter-box"
        options={roverKinds}
        renderInput={(params) => <TextField {...params} label="RoverFilter" />}
      />
    </>
  );
};

export default RoverFilter;
