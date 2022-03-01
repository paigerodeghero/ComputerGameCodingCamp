import { styled } from "@mui/system";
import React, { PropsWithChildren } from "react";


const PageContainerDiv = styled('div')(() => ({
    '@media (min-width: 1200px)': {
        width: 'calc(100% - 280px)'
    },
    '@media (min-width: 900px)': {
      width: '100%'
  },
}))

const PageStyle = styled("div")(({ theme }) => ({
  "@media (min-width: 1200px)": {
    paddingLeft: 60,
    paddingRight: 60,
  },
  "@media (min-width: 600px)": {
    width: "calc(100% - 240px)",
    paddingLeft: 24,
    paddingRight: 24,
  },
  "@media (min-width: 900px)": {
    paddingLeft: 16,
    paddingRight: 16,
  },
  width: "100%",
  maxWidth: '105ch',
  marginLeft: "auto",
  marginRight: "auto",
  boxSizing: "border-box",
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 100,
  paddingBottom: 100,
  position: "relative",
}));

type Props = {} & PropsWithChildren<{}>;

const fullPage = (props: Props) => (
  <PageContainerDiv>
    <PageStyle>{props.children}</PageStyle>
  </PageContainerDiv>
);

export default fullPage;
