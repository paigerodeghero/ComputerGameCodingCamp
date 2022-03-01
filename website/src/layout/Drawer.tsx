import { Divider, Drawer, List } from "@mui/material";
import ListItemLink from "../utilities/react-router-interop/MaterialListItemLink";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const NavigationDrawer = (props: DrawerProps) => {
  return (
    <Drawer open={props.open} anchor="left" onClose={props.onClose}>
      <List component="nav" sx={{
        width: 200
      }}>
        <ListItemLink to={"/"} primary="Home" />
        <Divider />
        <ListItemLink to={"/sign-up"} primary="Sign Up" />
        <ListItemLink to={"/faqs"} primary="FAQ" />
        <ListItemLink to={"/team"} primary="Team" />
        <ListItemLink to={"/research"} primary="Research" />
        <ListItemLink to={"/contact-us"} primary="Contact Us" />
      </List>
    </Drawer>
  );
};
