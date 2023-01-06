import { Box, Button, Chip } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../mock/user";
import {
  ContainerButtonStyles,
  ContainerBoxStyles,
  NavButtonStyle,
  NavUserStyles,
  WraperBox,
} from "./Navbar-styles";

const navOptions = [
  { label: "INVOICES", path: "/invoices" },
  { label: "NOTIFICATIONS", path: "/invoices" },
  { label: "ALERTS", path: "/invoices" },
  { label: "SETTINGS", path: "/invoices" },
];

interface Props {
  children: JSX.Element;
}

const Navbar = ({ children }: Props) => {
  const [selectedNavOptionIndex, setSelectedNavOptionIndex] = useState(0);
  const navigate = useNavigate();

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
              key={index}
              variant={selectedNavOptionIndex === index ? "contained" : "text"}
              sx={NavButtonStyle}
              onClick={() => {
                setSelectedNavOptionIndex(index);
                navigate(navOption.path);
              }}
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
