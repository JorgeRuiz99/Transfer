import { blue, grey } from "@mui/material/colors";

export const ContainerBoxStyles = {
  display: "flex",
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "#EAEAEA",
};

export const WraperBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  maxWidth: 220,
  width: "100%",
  backgroundColor: blue[500],
  p: 2,
  boxShadow: `0 0 16px #D9D9D9`,
  zIndex: "99999999999999999",
};

export const NavButtonStyle = {
  color: grey[50],
  justifyContent: "flex-start",
};

export const ContainerButtonStyles = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
};

export const NavUserStyles = {
  position: "absolute",
  top: 40,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};
