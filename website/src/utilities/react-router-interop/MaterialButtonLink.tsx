import { Button, ButtonProps, LinkProps } from "@mui/material";
import { forwardRef, useMemo } from "react";
import { Link } from "react-router-dom";

export {};

type MaterialButtonLinkProps = {
  to: string;
} & ButtonProps<"a">;

const MaterialButtonLink = (props: MaterialButtonLinkProps) => {
  const { to } = props;

  const renderLink = useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      forwardRef<HTMLAnchorElement, Omit<LinkProps, "to">>((itemProps, ref) => {
        const { color, ...remainingProps } = itemProps;
        return <Link to={to} ref={ref} {...remainingProps} />;
      }),
    [to]
  );

  return <Button {...props} component={renderLink}></Button>;
};

export default MaterialButtonLink