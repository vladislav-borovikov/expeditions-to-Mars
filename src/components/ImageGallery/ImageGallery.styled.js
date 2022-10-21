import styled from "styled-components";
import { Button } from "@mui/material";

const GalleryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GalleryButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: 0px, auto;
`;

export { GalleryBox, GalleryButton };
