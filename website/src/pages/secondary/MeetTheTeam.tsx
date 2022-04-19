import { Divider, Link, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PropsWithChildren, ReactNode } from "react";
import { SecondaryPageHost } from "../../layout/SecondaryPage";

export {};

const MeetTheTeam = () => {
  return (
    <SecondaryPageHost>
      <Typography
        variant="h3"
        component="p"
        textAlign={"center"}
        marginBottom={4}
      >
        Camp Team
      </Typography>
      <PersonSection title="Leaders">
        <Person
          stringName="Paige Rodeghero, Ph.D."
          name={
            <Link
              href="https://paigerodeghero.com"
              underline="none"
              color="inherit"
            >
              Paige Rodeghero, Ph.D.
            </Link>
          }
          affiliation={
            <Link href="www.clemson.edu" underline="none" color="inherit">
              Clemson University
            </Link>
          }
          years="2020, 2021, 2022"
          imageUrl="https://codeatclemson.com/people/headshots/paige_small.jpg"
        />
        <Person
          stringName="Andrew Begel, Ph.D."
          name={
            <Link
              href="https:://www.andrewbegel.com"
              underline="none"
              color="inherit"
            >
              Andrew Begel
            </Link>
          }
          affiliation={
            <>
              <Link
                href="https://www.microsoft.com/en-us/research/"
                underline="none"
                color="inherit"
              >
                Microsoft Research
              </Link>
              <br />
              <Link href="www.washington.edu" underline="none" color="inherit">
                University of Washington
              </Link>
            </>
          }
          years="2020, 2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/andy_small.jpg"
        />
      </PersonSection>
      <PersonSection title="Collaborators">
        <Person
          stringName="Thomas Beeson, Ed.S., MA, BCBA"
          name={
            <Link
              href="https://www.clemson.edu/academics/studentaccess/contact-us.html"
              underline="none"
              color="inherit"
            >
              Thomas Beeson, Ed.S., MA, BCBA
            </Link>
          }
          affiliation={
            <Link href="www.clemson.edu" underline="none" color="inherit">
              Clemson University
            </Link>
          }
          years="2020, 2021, 2022"
          imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQF_qxZG7B4jMg/profile-displayphoto-shrink_200_200/0/1517432368672?e=1649894400&v=beta&t=Z07Muzi4gE11WrTH3oNEzXXcZEGM5LsvrOoTXZKff30"
        />
        <Person
          stringName="Jeanette Ashworth, Ph.D."
          name={"Jeanette Ashworth, Ph.D."}
          affiliation={
            <Link href="https://www.psychologytoday.com/us/therapists/jeanette-ashworth-woodinville-wa/900881" underline="none" color="inherit">
              Center for a Happier Life, PLLC
            </Link>
          }
          years="2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/jeanette_small.jpg"
        />
      </PersonSection>
      <PersonSection title="Instructors and Content Developers">
        <Person
          stringName="Jason Lehmann, B.S."
          name={
            <Link
              href="https://lehmanndev.com/"
              underline="none"
              color="inherit"
            >
              Jason Lehmann, B.S.
            </Link>
          }
          affiliation={
            <>
              QA Lead at{" "}
              <Link
                href="https://www.aspiritech.org"
                underline="none"
                color="inherit"
              >
                Aspiritech
              </Link>
            </>
          }
          years="2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/Jason_small.jpg"
        />
        <Person
          stringName="Conner Phillis"
          name={"Conner Phillis, B.S."}
          affiliation={
            <>
              Software Engineer at{" "}
              <Link
                href="https://www.keymarkinc.com"
                underline="none"
                color="inherit"
              >
                Keymark
              </Link>
            </>
          }
          years="2020, 2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/Conner_small.png"
        />
        <Person
          stringName="James Dominic, M.S."
          name={
            <Link
              href="https://domini4.github.io"
              underline="none"
              color="inherit"
            >
              James Dominic, M.S.
            </Link>
          }
          affiliation={
            <Link
              href="https://www.clemson.edu"
              underline="none"
              color="inherit"
            >
              Clemson University
            </Link>
          }
          years="2020, 2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/james_small.jpg"
        />
        <Person
          stringName="Ella Kokinda, B.S."
          name={
            <Link href="https://ella.dev" underline="none" color="inherit">
              Ella Kokinda, B.S.
            </Link>
          }
          affiliation={
            <Link
              href="https://www.clemson.edu"
              underline="none"
              color="inherit"
            >
              Clemson University
            </Link>
          }
          years="2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/ella_small.jpg"
        />
        <Person
          stringName="Makayla Moster, M.S."
          name={
            <Link
              href="https://makayla-moster.github.io"
              underline="none"
              color="inherit"
            >
              Makayla Moster, M.S.
            </Link>
          }
          affiliation={
            <Link
              href="https://www.clemson.edu"
              underline="none"
              color="inherit"
            >
              Clemson University
            </Link>
          }
          years="2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/makayla_small.jpg"
        />
        <Person
          stringName="Matthew Re, B.S."
          name={
            <Link
              href="https://matthewjre.github.io/"
              underline="none"
              color="inherit"
            >
              Matthew Re, B.S.
            </Link>
          }
          affiliation={
            <Link
              href="https://www.clemson.edu"
              underline="none"
              color="inherit"
            >
              Clemson University
            </Link>
          }
          years="2021, 2022"
          imageUrl="http://codeatclemson.com/people/headshots/Matthew_Re_500.png"
        />
        <Person
          stringName="Tiffany Liu"
          name={
            <Link
              href="https://www.linkedin.com/in/tiffany-liu-13b236ab/"
              underline="none"
              color="inherit"
            >
              Tiffany Liu
            </Link>
          }
          affiliation={
            <Link
              href="https://www.stanford.edu"
              underline="none"
              color="inherit"
            >
              Stanford University
            </Link>
          }
          years="2022"
          imageUrl="https://codeatclemson.com/people/headshots/tiffany.jpg"
        />
      </PersonSection>
      <Person
        stringName="Joey Binz"
        name={
          <Link
            href="https://www.linkedin.com/in/joey-binz-093403196/"
            underline="none"
            color="inherit"
          >
            Joey Binz
          </Link>
        }
        affiliation={
          <Link href="https://www.clemson.edu" underline="none" color="inherit">
            Clemson University
          </Link>
        }
        years="2022"
        imageUrl="https://codeatclemson.com/people/headshots/joeybinz_photo.jpg"
      />
    </SecondaryPageHost>
  );
};

type PersonSectionProps = PropsWithChildren<{
  title: string;
}>;

const PersonSection = (props: PersonSectionProps) => {
  return (
    <>
      <Typography variant="h4" component="p" marginTop={3}>
        {props.title}
      </Typography>
      <Divider
        sx={{
          marginBottom: 3,
        }}
      />
      <Box
        sx={{
          display: {
            sm: "flex",
            md: "grid",
          },
          flexDirection: "column",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {props.children}
      </Box>
    </>
  );
};

type PersonProps = {
  stringName: string; // <- for a11y
  name: string | ReactNode; // <- for display
  affiliation?: string | ReactNode;
  years: string | ReactNode;
  imageUrl?: string;
};

const Person = (props: PersonProps) => {
  return (
    <Box
      sx={{
        marginBottom: 4,
        justifyContent: "start",
        display: "flex",
      }}
    >
      {props.imageUrl ? (
        <img
          src={props.imageUrl}
          alt={props.stringName}
          height="200"
          width="200"
        />
      ) : (
        <Skeleton variant="rectangular" height={200} width={200} />
      )}

      <Box paddingLeft={4} display="flex" flexDirection="column">
        <Typography variant="h5">{props.name}</Typography>
        {props.affiliation && (
          <Typography marginTop={1} variant="h6">
            {props.affiliation}
          </Typography>
        )}
        <Typography marginTop={1} variant="caption">
          {props.years}
        </Typography>
      </Box>
    </Box>
  );
};

export default MeetTheTeam;
