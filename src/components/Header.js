import React, { useRef, useEffect } from "react";
import { CssBaseline, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from "../images/desktop-image-hero-1.jpg";
import heroImageMob from "../images/mobile-image-hero-1.jpg";
import arrow from "../images/icon-arrow.svg";
import logo from "../images/logo.svg";

import { TimelineLite, Power2 } from "gsap";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    width: "100%",
    // position: "absolute",
    opacity: 1,
  },
  logo: {
    position: "absolute",
    padding: theme.spacing(6, 8),
    transform: "scale(1.5)",
    opacity: 1,
  },
  container: {
    margin: 0,
    padding: 0,
    overflow: "hidden",
    background: "white",
    visibility: "hidden",
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
  let image = useRef(null);
  let imgContainer = useRef(null);
  let roomLogo = useRef(null);
  let container = useRef(null);
  let bannerText = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, {
      css: { visibility: "visible", ease: Power2.easeInOut },
    })
      .from(image, 1, {
        opacity: 0,
        ease: Power2.easeInOut,
      })
      .from(roomLogo, 1, { opacity: 0, y: -40, ease: Power2.easeInOut })
      .from(bannerText, 1, { x: -20, opacity: 0, ease: Power2.easeInOut });
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <Grid ref={(el) => (container = el)} container justify="center">
          <Grid item xs={12} md={7}>
            <div ref={(el) => (imgContainer = el)}>
              <img
                ref={(el) => (roomLogo = el)}
                src={logo}
                className={classes.logo}
              />
              {window.screen.width > 600 ? (
                <img
                  ref={(el) => (image = el)}
                  src={heroImage}
                  className={classes.heroImage}
                />
              ) : (
                <img
                  ref={(el) => (image = el)}
                  src={heroImageMob}
                  className={classes.heroImage}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={5} className={classes.textContainer}>
            <div ref={(el) => (bannerText = el)}>
              <Typography variant="h3" className={classes.title}>
                Discover innovative ways to decorate
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "32px" }}
                className={classes.subtitle}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </Typography>
              <button className={classes.btn}>
                {/* prettier-ignore */}
                <pre className={classes.btnText}>S H O P   N O W<img src={arrow} style={{marginLeft: '32px'}}/></pre>
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
