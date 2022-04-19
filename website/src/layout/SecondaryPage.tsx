import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import MaterialButtonLink from "../utilities/react-router-interop/MaterialButtonLink";
import { NavigationDrawer } from "./Drawer";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

export const SecondaryPageHost = (props: PropsWithChildren<unknown>) => {
  return (
    <Box
      sx={{
        paddingLeft: 1,
        paddingRight: 1,
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <SecondaryPageHeader />
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 3,
          overflowX: "auto",
        }}
      >
        {props.children}
      </Box>
      {/* <SecondaryPageFooter /> */}
    </Box>
  );
};

export const SecondaryPageHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Box
          sx={{
            paddingTop: 3,
            paddingBottom: 6,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "100px 1fr 100px",
              md: "200px 1fr 200px",
            },
          }}
        >
          <Link to="/" style={linkStyle}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                },
              }}
            >
              <Typography textAlign="center" variant="h6" component="div">
                Code @ Clemson
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  md: "none",
                },
              }}
            >
              <Typography variant="h6" component="div">
                C@C
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{
              justifySelf: "center",
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              width: "100%",
            }}
          >
            <MaterialButtonLink to="/sign-up" variant="text">
              Sign Up
            </MaterialButtonLink>
            <MaterialButtonLink to="/faqs" variant="text">
              FAQs
            </MaterialButtonLink>
            <MaterialButtonLink to="/team" variant="text">
              Team
            </MaterialButtonLink>
            <MaterialButtonLink to="/research" variant="text">
              Research
            </MaterialButtonLink>
            <MaterialButtonLink to="/contact-us" variant="text">
              Contact
            </MaterialButtonLink>
            <MaterialButtonLink to="/code-of-conduct" variant="text" >
              Code of Conduct
            </MaterialButtonLink>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "grid",
            sm: "none",
          },
          paddingTop: 2,
          gridTemplateColumns: "50px 1fr 50px",
        }}
      >
        <Box
          sx={{
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <IconButton onClick={() => setDrawerOpen(true)}>
            <Menu />
          </IconButton>
        </Box>

        <Link to="/" style={linkStyle}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Code @ Clemson
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export const SecondaryPageFooter = () => {
  return (
    <Box
      sx={{
        left: 0,
        bottom: 0,
      }}
    >
      Something
    </Box>
  );
};
