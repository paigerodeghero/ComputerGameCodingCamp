import { Menu } from "@mui/icons-material";
import { IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CGCC_PixelArt_Long_DragonFire from "../assets/img/cover/CGCC_PixelArt_Long_DragonFire.png";
import { NavigationDrawer } from "../layout/Drawer";
import MaterialButtonLink, {
  MaterialButtonExternalLink,
} from "../utilities/react-router-interop/MaterialButtonLink";
import { CodeOfConductWithHeader } from "./secondary/CodeOfConduct";

const Component = () => (
  <Box
    sx={{
      maxWidth: {
        lg: 1280,
      },
      margin: "0 auto",
    }}
  >
    <Header />
    <NextCampDates />
  </Box>
);

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  console.log("drawer state: ", drawerOpen);

  return (
    <>
      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <Box
        sx={{
          paddingTop: 10,
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Typography textAlign="center" variant="h2" component="div">
          Code @ Clemson
        </Typography>
        <Typography
          textAlign="center"
          variant="subtitle1"
          component="div"
          gutterBottom
        >
          A Virtual Camp Presented by EdASE
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              width: 900,
            }}
          >
            <MaterialButtonLink to="/sign-up" variant="text">
              Sign Up
            </MaterialButtonLink>
            <MaterialButtonLink to="/team" variant="text">
              Team
            </MaterialButtonLink>
            <MaterialButtonLink to="/research" variant="text">
              Research
            </MaterialButtonLink>
            <MaterialButtonLink to="/faqs" variant="text">
              FAQs
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
      </Box>
    </>
  );
};

const NextCampDates = () => (
  <Box
    sx={{
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: {
        xs: 0,
        sm: 4,
      },
      paddingRight: {
        xs: 0,
        sm: 4,
      },
    }}
  >
    <img
      src={CGCC_PixelArt_Long_DragonFire}
      alt="Dragon and Knight"
      width="100%"
    />

    <Box
      sx={{
        paddingLeft: {
          xs: 2,
          sm: 0,
        },
        paddingRight: {
          xs: 2,
          sm: 0,
        },
      }}
    >
      <Typography
        variant="h4"
        component="p"
        sx={{
          paddingTop: 2,
        }}
      >
        2022 Virtual Camp Dates: July 11th-29th, 1pm - 3:30pm Eastern Time, M-F
      </Typography>
      <Box component="p" display="flex" justifyContent="center">
        <Link
          href="https://forms.gle/M6ghnHbgGsdWk4d76"
          variant="h4"
          sx={{
            paddingTop: 3,
            textAlign: "center",
          }}
        >
          Register Here!
        </Link>
      </Box>
      <Box
        component="p"
        sx={{
          paddingTop: 2,
        }}
      >
        <Typography variant="h5" component="div" textAlign={"center"}>
          Want to build video games this summer?!
        </Typography>
      </Box>
      <p>
        <Typography component="div">
          Join us for our third Virtual Computer Game Coding Camp (CGCC)! This
          virtual camp is for high school students on the autism spectrum (ASD).
          The camp will expose students to high-level video game design and
          development and provide opportunities for networking with peers. While
          developing their video game, students will improve their teamwork
          skills such as communication and collaboration. Throughout the camp,
          campers will learn the high-level processes of software development,
          game development, interpersonal communication, collaboration, and end
          up with their own game, from scratch.
        </Typography>
      </p>
    </Box>

    <Box marginTop={5}>
      <CodeOfConductWithHeader />
    </Box>

    <Box marginTop={5}>
      <Box width="100%" display="flex" alignItems={'center'} justifyContent={'center'}>
        <Box display="flex" width="40vw" gap={3}>
          <a href="https://nsf.gov">
            <img
              src="http://codeatclemson.com/img/nsf-logo.png"
              alt={"nsf"}
              height="200"
              width="200"
            />
          </a>
          This material is based upon work supported by the National Foundation
          under grant ITEST-2148720. Any opinions, findings, and conclusions or
          recommendations expressed in the material are those of the author(s)
          and do not necessarily reflect the views of the National Science
          Foundation.
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Component;
