import styled from "styled-components";
import TextField from "@mui/material/TextField";

const SolTextField = styled(TextField)`
  @media (min-width: 320px) {
    width: 260px;
  }
  @media (min-width: 426px) {
    width: 250px;
    margin-top: 0px !important;
  }
`;
export { SolTextField };
