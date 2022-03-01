import { Drawer } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

type ResponsiveDrawerProps = {} & PropsWithChildren<{}>;

const drawerWidth = 240;

const ResponsiveDrawer = (props: ResponsiveDrawerProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClick={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // better open performance on mobile, apparently
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {props.children}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {props.children}
      </Drawer>
    </>
  );
};

export default ResponsiveDrawer;
