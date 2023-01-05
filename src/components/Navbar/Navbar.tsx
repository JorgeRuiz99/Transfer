import { Box, Button, Chip } from "@mui/material";
import { useState } from "react";
import user from "../../mock/user";
import {
  ContainerButtonStyles,
  ContainerBoxStyles,
  NavButtonStyle,
  NavUserStyles,
  WraperBox,
} from "./Navbar-styles";

const navOptions = [
  { label: "INVOICES" },
  { label: "NOTIFICATIONS" },
  { label: "ALERTS" },
  { label: "SETTINGS" },
];

interface Props {
  children: JSX.Element;
}

const Navbar = ({ children }: Props) => {
  const [selectedNavOptionIndex, setSelectedNavOptionIndex] = useState(0);

  return (
    <Box sx={ContainerBoxStyles}>
      <Box sx={WraperBox}>
        <Box sx={NavUserStyles}>
          <Box
            sx={{
              backgroundImage: `url(${user.picture})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: 60,
              height: 60,
              borderRadius: "100vmax",
            }}
          ></Box>
          <Chip
            sx={{ fontSize: 16, color: "white" }}
            label={`${user.name}`}
          ></Chip>
        </Box>
        <Box sx={ContainerButtonStyles}>
          {navOptions.map((navOption, index) => (
            <Button
              variant={selectedNavOptionIndex === index ? "contained" : "text"}
              sx={NavButtonStyle}
              onClick={() => setSelectedNavOptionIndex(index)}
            >
              {navOption.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{ m: 4, width: "100%", backgroundColor: "white", color: "black" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Navbar;
