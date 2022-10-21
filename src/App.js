import { useState, useEffect } from "react";
import Header from "./components/appBar/Header";
import Filter from "./components/filter/Filter";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Typography from "@mui/material/Typography";
import { Api } from "./services/api";
import { Button } from "@mui/material";

import "./App.css";

const App = () => {
  const [picture, setPicture] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const [hideBtn, setHideBtn] = useState(false);

  const pageUpload = () => {
    setPage((prevState) => prevState + 1);
  };

  const changePage = (page) => {
    setPage(page);
  };

  const handleFilter = (data) => {
    setPicture([]);
    setFilter(data);
    setPage(1);
  };

  useEffect(() => {
    if (JSON.stringify(filter) === "{}") {
      return;
    }

    const pictureRequest = async () => {
      try {
        const respons = await Api(filter, page);
        if (respons.photos.length === 0) {
          setHideBtn(false);
        } else {
          setHideBtn(true);
        }
        setPicture((prevState) =>
          page > 1 ? [...prevState, ...respons.photos] : respons.photos
        );
      } catch (error) {
        alert(error);
      }
    };
    pictureRequest();
  }, [filter, page]);

  return (
    <>
      <Header />
      <Filter onSubmit={handleFilter} page={page} />
      {picture.length === 0 ? (
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ justifyContent: "center", display: "flex" }}
        >
          No photos found for this query.
        </Typography>
      ) : (
        <ImageGallery
          picture={picture}
          onChange={changePage}
          hideBtn={hideBtn}
        />
      )}
      {!hideBtn ? null : (
        <Button
          variant="outlined"
          type="submit"
          sx={{
            maxWidth: 300,
            display: "flex",
            justifyContent: "center",
            margin: "15px auto",
          }}
          onClick={pageUpload}
        >
          Load more...
        </Button>
      )}
    </>
  );
};

export default App;
