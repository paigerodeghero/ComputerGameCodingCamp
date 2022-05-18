import { Box, Link as MaterialLink, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { SecondaryPageHost } from "../../layout/SecondaryPage";
import MaterialRouterLink from "../../utilities/react-router-interop/MaterialRouterLink";

const FrequentlyAskedQuestions = () => {
  return (
    <SecondaryPageHost>
      <Typography textAlign="center" variant="h3" marginBottom={3}>
        Frequently Asked Questions
      </Typography>
      <FaqItem title="What are the dates of the camp?">
        <ul>
          <li>2022 Virtual Camp: Monday trough Friday July 11th - July 29th,  1pm - 3:30pm Eastern Time, M-F</li>
        </ul>
      </FaqItem>
      <FaqItem title="What is the deadline for registration for the 2022 camp?">
        There is no registration deadline so far
      </FaqItem>
      <FaqItem title="What equipment is required to complete the camp?">
        <ul>
          <li>A computer (see minimum required specifications below)</li>
          <li>
            A video camera (built into the computer or one that can be connected
            to the computer)
          </li>
          <li>
            A microphone (built into the computer or one that can be connected
            to the computer)
          </li>
          <li>Paper, Pen, and Pencil</li>
        </ul>
      </FaqItem>
      <FaqItem title="What are the minimum required computer specifications?">
        <ul>
          <li>Any computer made in or after 2018 should suffice</li>
          <li>
            Computers should be able to run Zoom and GoDot at the same time
          </li>
          <li>
            iPhones, iPads, and Chromebooks will <strong>not</strong> work for
            this camp
          </li>
          <li>
            If you are looking for a computer, Clemson has recommendations for
            student computers, see:{" "}
            <MaterialLink href="https://ccit.clemson.edu/support/current-students/laptops/recommended-laptops/">
              CCIT Computer Recommendations
            </MaterialLink>
          </li>
        </ul>
      </FaqItem>
      <FaqItem title="What software is required to complete the camp?">
        <ul>
          <li>
            <MaterialLink href="https://godotengine.org/download">
              Godot Game Engine (Standard Version)
            </MaterialLink>
          </li>
          <li>
            <MaterialLink href="https://zoom.us/download#client_4meeting">
              Zoom
            </MaterialLink>
          </li>
          <li>
            <MaterialLink href="https://discord.com/download">
              Discord
            </MaterialLink>
          </li>
        </ul>
      </FaqItem>
      <FaqItem title="Is there homework?">
        <ul>
          <li>
            All homework provided throughout the camp is optional, if the camper
            does not complete it they will not fall behind
          </li>
        </ul>
      </FaqItem>
      <FaqItem title="What will my child learn?">
        <ul>
          <li>
            We will cover game design, game development, programming, and game
            development and collaboration skills. These skills will be
            reinforced throughout the camp.
          </li>
          <li>
            Check out the camp schedule on our{" "}
            <MaterialRouterLink to={"/sign-up"}>
              Sign up page!
            </MaterialRouterLink>
          </li>
        </ul>
      </FaqItem>
      <FaqItem title="Want to collaborate or volunteer?">
        <ul>
          <li>
            We are always looking for collaborators and volunteers to help with
            the camp. Feel fre to reach out and{" "}
            <MaterialLink href="mailto:cgcc@clemson.edu">email</MaterialLink> our
            team if interested!
          </li>
        </ul>
      </FaqItem>
      <FaqItem title="Want to sponsor the camp?">
        <ul>
          <li>
            We'd love to provider our campers with swag and goodies that are
            shipped to their homes before our camp every year.
          </li>
          <li>
            We would also like to support our volunteers if at all possible for
            all the time that they devote to this camp.
          </li>
          <li>
            If you'd like to help fund our camp,{" "}
            <MaterialLink href="mailto:cgcc@clemson.edu">email us</MaterialLink>
            .
          </li>
        </ul>
      </FaqItem>
      Please{" "}
      <MaterialLink href="mailto:cgcc@clemson.edu">email us</MaterialLink> with
      any additional questions you may have!
    </SecondaryPageHost>
  );
};

type FaqItemProps = PropsWithChildren<{
  title: string;
}>;

const FaqItem = (props: FaqItemProps) => {
  return (
    <Box
      sx={{
        paddingBottom: 1,
      }}
    >
      <Typography variant="h4" component="div">
        {props.title}
      </Typography>
      <Typography component="div">{props.children}</Typography>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
