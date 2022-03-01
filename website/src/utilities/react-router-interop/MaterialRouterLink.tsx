import { Typography } from "@mui/material";
import { Link as ReactRouterLink, LinkProps } from "react-router-dom";

export {};

const MaterialRouterLink = (props: LinkProps) => {
  const { children, ...remainingLinkProps } = props;

  return (
    <ReactRouterLink {...remainingLinkProps}>
      <Typography >{children}</Typography>
    </ReactRouterLink>
  );
};

export default MaterialRouterLink