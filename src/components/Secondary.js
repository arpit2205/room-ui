import React, { useEffect, useRef } from "react";
import { CssBaseline, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TimelineLite, Power2 } from "gsap";

import dark from "../images/image-about-dark.jpg";
import light from "../images/image-about-light.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
    margin: 0,
    padding: 0,
    marginTop: "-5px",
  },
  image: {
    width: "100%",
  },
  textContainer: {
    padding: theme.spacing(8, 6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 4),
    },
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
  },
  subtitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    marginTop: "8px",
  },
}));

const Secondary = () => {
  const classes = useStyles();

  let left = useRef(null);
  let center = useRef(null);
  let right = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(left, 1, {
      opacity: 0,
      x: -20,
      ease: Power2.easeInOut,
      delay: 3,
    })
      .from(center, 1, {
        opacity: 0,
        y: -20,
        ease: Power2.easeInOut,
        // delay: -1,
      })
      .from(right, 1, { opacity: 0, x: 20, ease: Power2.easeInOut });
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <Grid container justify="center">
          <Grid item xs={12} md={4}>
            <img
              ref={(el) => (left = el)}
              src={dark}
              className={classes.image}
            />
          </Grid>
          <Grid
            ref={(el) => (center = el)}
            item
            xs={12}
            md={4}
            className={classes.textContainer}
          >
            <Typography variant="h6" className={classes.title}>
              ABOUT OUR FURNITURE
            </Typography>
            <Typography variant="body2" className={classes.subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              ref={(el) => (right = el)}
              src={light}
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Secondary;
