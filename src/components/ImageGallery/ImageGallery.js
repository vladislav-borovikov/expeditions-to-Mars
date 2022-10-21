import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const ImageGallery = ({ picture }) => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-around",
        }}
      >
        {picture.map((pic) => (
          <Card sx={{ maxWidth: 300, mt: "15px" }} component="li" key={pic.id}>
            <CardMedia
              component="img"
              height="300"
              image={pic.img_src}
              alt="from mars"
            />
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
