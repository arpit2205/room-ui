import React from "react";
import { CssBaseline, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from "../images/desktop-image-hero-1.jpg";
import heroImageMob from "../images/mobile-image-hero-1.jpg";
import arrow from "../images/icon-arrow.svg";
import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    width: "100%",
  },
  logo: {
    position: "absolute",
    padding: theme.spacing(6, 8),
    transform: "scale(1.5)",
  },
  container: {
    margin: 0,
    padding: 0,
    overflow: "hidden",
    background: "white",
  },
  textContainer: {
    padding: theme.spacing(16, 10, 0, 10),
    background: "white",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 4),
    },
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
    },
  },
  subtitle: {
    fontFamily: "'Montserrat', sans-serif",
  },
  btn: {
    border: "none",
    background: "white",
    borderRadius: 0,
    fontSize: "24px",
  },
  btnText: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 400,
    marginLeft: "-6px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <img src={logo} className={classes.logo} />
            {window.screen.width > 600 ? (
              <img src={heroImage} className={classes.heroImage} />
            ) : (
              <img src={heroImageMob} className={classes.heroImage} />
            )}
          </Grid>
          <Grid item xs={12} md={5} className={classes.textContainer}>
            <Typography variant="h3" className={classes.title}>
              Discover innovative ways to decorate
            </Typography>
            <Typography
              variant="body2"
              style={{ marginTop: "32px" }}
              className={classes.subtitle}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </Typography>
            <button className={classes.btn}>
              {/* prettier-ignore */}
              <pre className={classes.btnText}>S H O P   N O W<img src={arrow} style={{marginLeft: '32px'}}/></pre>
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
