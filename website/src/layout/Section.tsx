import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = (props: SectionProps) => (
  <Box>
    <Typography variant="h4" component="div">
      {props.title}
    </Typography>
    <Typography
      variant="body1"
      component="div"
      sx={{ paddingTop: 1, paddingBottom: 3 }}
    >
      {props.children}
    </Typography>
  </Box>
);

export default Section;
