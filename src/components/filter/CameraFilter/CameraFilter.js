import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { CameraAutocomplete } from "./CameraFilter.styled";

const cameraKinds = [
  { label: "Front Hazard Avoidance Camera", value: "FHAZ" },
  { label: "Rear Hazard Avoidance Camera", value: "RHAZ" },
  { label: "Mast Camera", value: "MAST" },
  { label: "Chemistry and Camera Complex", value: "CHEMCAM" },
  { label: "Mars Hand Lens Imager", value: "MAHLI" },
  { label: "Mars Descent Imager", value: "MARDI" },
  { label: "Navigation Camera", value: "NAVCAM" },
  { label: "Panoramic Camera", value: "PANCAM" },
  {
    label: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    value: "MINITES",
  },
];

const CameraFilter = ({ getValueFromForm }) => {
  const [value, setValue] = useState(cameraKinds[0].value);

  return (
    <>
      <CameraAutocomplete
        onChange={(event, newValue) => {
          setValue(newValue);
          getValueFromForm({ camera: newValue.value });
        }}
        disablePortal
        id="camera-filter-box"
        options={cameraKinds}
        renderInput={(params) => <TextField {...params} label="CameraFilter" />}
      />
    </>
  );
};

export default CameraFilter;
