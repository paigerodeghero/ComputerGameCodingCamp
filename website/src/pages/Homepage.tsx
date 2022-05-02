import { Menu } from "@mui/icons-material";
import { IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CGCC_PixelArt_Long_DragonFire from "../assets/img/cover/CGCC_PixelArt_Long_DragonFire.png";
import { NavigationDrawer } from "../layout/Drawer";
import MaterialButtonLink from "../utilities/react-router-interop/MaterialButtonLink";

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

  console.log('drawer state: ', drawerOpen)

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
        <Typography
          textAlign="center"
          variant="h2"
          component="div"
        >
          Code @ Clemson
        </Typography>
        <Typography textAlign="center" variant="subtitle1" component="div" gutterBottom>
          Presented by EdASE
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
            <MaterialButtonLink to="/code-of-conduct" variant="text">
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
        2022 Camp Dates: July 11th-29th, 1 - 3:30 Eastern
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
          Join us for our third Computer Game Coding Camp (CGCC)! This camp is
          for high school students on the autism spectrum (ASD). The camp will
          expose students to high-level video game design and development and
          provide opportunities for networking with peers. While developing
          their video game, students will improve their teamwork skills such as
          communication and collaboration. Throughout the camp, campers will
          learn the high-level processes of software development, game
          development, interpersonal communication, collaboration, and end up
          with their own game, from scratch.
        </Typography>
      </p>
    </Box>
  </Box>
);

export default Component;

type SignUpDateProps = {
  title: string;
  date: string;
};
function SignUpDate(props: SignUpDateProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: {
          xs: "center",
          sm: "flex-start",
        },
      }}
    >
      <Typography component="div" fontWeight="bold">
        {props.title}:
      </Typography>
      <Typography component="div" sx={{ paddingLeft: 1 }}>
        {props.date}
      </Typography>
    </Box>
  );
}
