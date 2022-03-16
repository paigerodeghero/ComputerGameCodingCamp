import { Box, Link as MaterialLink, Typography } from "@mui/material";
import { SecondaryPageHost } from "../../layout/SecondaryPage";

export {};

const SignUp = () => {
  return (
    <SecondaryPageHost>
      <Typography variant="h3" textAlign={'center'}>Camp Sign Up</Typography>
      <Box
        marginTop={3}
        marginBottom={3}
        sx={{
          display: {
            xs: "flex",
            sm: "grid",
          },
          flexDirection: "column",
          alignItems: "center",
          placeItems: 'center',
          gridTemplateColumns: {
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
        }}
      >
        <iframe
          title="Alphonso McBeatEmUp"
          src="https://www.youtube.com/embed/Zg_KTu1wois"
        ></iframe>
        <iframe
          title="Asteroids"
          src="https://www.youtube.com/embed/I2h6IqR2ad4"
        ></iframe>
        <iframe
          title="PathFinding Game"
          src="https://www.youtube.com/embed/sWpUHJwAOq0"
        ></iframe>
      </Box>
      <Typography variant="body1" component="p" marginTop={2}>
        Computer Game Coding Camp for Autism is a camp for high school students
        on the autism spectrum (ASD) that exposes them to high-level video game
        development and networking with peers. While developing their video
        game, students will improve their teamwork skills such as communication
        and collaboration. Throughout the camp, campers learn the high-level
        processes of software development, game development, interpersonal
        communication, collaboration, and end up with their own game, from
        scratch.
      </Typography>
      <Typography variant="body1" component="p" marginTop={1}>
        We are excited to host this camp for the third year in a row. This year,
        our coding camp will only be provided remotely.
      </Typography>
      <Typography variant="h4" marginTop={2}>
        2022 Camp Dates and Sign-Up Link
      </Typography>
      <Typography component="div">
        <ul>
          <li>
            <strong>Camp Dates</strong>: July 11th - July 29th (M-F)
          </li>
          <li>
            <strong>Sign-Up Link</strong>: <MaterialLink>TBA</MaterialLink>
          </li>
          <li>
            <strong>Early Registration Deadline</strong>: April 20, 2022
          </li>
          <li>
            <strong>Late Registration Deadline</strong>: May 15, 2022
          </li>
        </ul>
      </Typography>
      <Typography variant="h4" marginTop={2}>
        2022 Camp Schedule
      </Typography>
      <ul>
        <li>Camp Schedule will be available soon.</li>
      </ul>
      <Typography variant="h5" marginTop={3}>
        Questions?
      </Typography>
      <Typography variant="h6">
        Contact us at:{" "}
        <MaterialLink href="mailto:cgcc@clemson.edu">
          cgcc@clemson.edu
        </MaterialLink>
      </Typography>
      <Typography variant="h6" marginTop={4}>
        Check out previous camp materials on{" "}
        <MaterialLink href="https://github.com/paigerodeghero/ComputerGameCodingCamp">
          GitHub
        </MaterialLink>
        !
      </Typography>
    </SecondaryPageHost>
  );
};

export default SignUp;
