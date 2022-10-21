import { useState } from "react";
import RoverFilter from "./RoverFilter/RoverFilter";
import CameraFilter from "./CameraFilter/CameraFilter";
import SolFilter from "./SolFilter/SolFilter";
import { FormBox, FormButton } from "./Filter.styled";

const Filter = ({ onSubmit }) => {
  const [filter, setFilter] = useState({});

  const getFiler = (e) => {
    e.preventDefault();
    onSubmit(filter);
  };
  const getValueFromForm = (data) => {
    setFilter((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <form style={{ display: "flax", alignItems: "center" }}>
      <FormBox spacing={2}>
        <RoverFilter
          getValueFromForm={getValueFromForm}
          style={{ margin: "10px" }}
        />
        <CameraFilter
          getValueFromForm={getValueFromForm}
          style={{ margin: "10px" }}
        />
        <SolFilter
          getValueFromForm={getValueFromForm}
          style={{ margin: "10px" }}
        />
        <FormButton
          variant="outlined"
          type="submit"
          onClick={getFiler}
          sx={{ margin: "10px" }}
        >
          Search
        </FormButton>
      </FormBox>
    </form>
  );
};

export default Filter;
