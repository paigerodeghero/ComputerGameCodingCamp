import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const drawerWidth = 240;

const StyledFooter = styled(Box)(() => ({
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  zIndex: 3000,
}));

const footer = () => (
  <StyledFooter
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
    <Divider />
    <Typography textAlign='center' sx={{
      padding: 1
    }}>
    © 2022 Computer Game Coding Camp for Autism
    </Typography>
  </StyledFooter>
);

export default footer;
