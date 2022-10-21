import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const FormBox = styled(Stack)`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between;
  }
  @media (min-width: 1150px) {
    justify-content: space-evenly;
  }
`;

const FormButton = styled(Button)`
  @media (min-width: 320px) {
    width: 260px;
  }
  @media (min-width: 426px) {
    width: 150px;
    margin-top: 0px !important;
    height: 56px;
  }
`;

export { FormBox, FormButton };
