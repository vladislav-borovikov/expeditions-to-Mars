import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

const CameraAutocomplete = styled(Autocomplete)`
  @media (min-width: 320px) {
    width: 260px;
  }
  @media (min-width: 426px) {
    width: 250px;
    margin-top: 0px !important;
  }
`;
export { CameraAutocomplete };
