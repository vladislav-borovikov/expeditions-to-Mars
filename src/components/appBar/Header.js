import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="x1" sx={{ height: "80px" }}>
        <Typography
          variant="h3"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 300,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            justifyContent: "center",
            pt: "10px",
          }}
        >
          Expeditions to Mars
        </Typography>
        <Typography
          variant="h5"
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 600,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            textAlign: "center",
            justifyContent: "center",
            pt: "10px",
          }}
        >
          Expeditions to Mars
        </Typography>
      </Container>
    </AppBar>
  );
};
export default Header;
