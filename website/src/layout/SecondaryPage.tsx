import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import MaterialButtonLink, { MaterialButtonExternalLink } from "../utilities/react-router-interop/MaterialButtonLink";
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
            <MaterialButtonExternalLink
              to="https://twitter.com/EdASE_Research"
              variant="text"
              target="_blank"
            >
              <span>
                Follow Us &nbsp;
                <svg
                  color=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1d9bf0"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </span>
            </MaterialButtonExternalLink>
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
