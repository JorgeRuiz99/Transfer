import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import invoices from "../../mock/invoices";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArchiveIcon from "@mui/icons-material/Archive";
import {
  InvoicesTitleStyle,
  ContainerBoxStyle,
  StyledTableCell,
  StyledTableRow,
} from "./InvoicesPage-styles";
import { useNavigate } from "react-router-dom";

const InvoicesPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState("");

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: "97%", backgroundColor: "#EAEAEA" }}>
      <Box sx={ContainerBoxStyle}>
        <Box sx={InvoicesTitleStyle}>INVOICES</Box>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 200,
              position: "fixed",
              top: 100,
              maxWidth: 1525,
            }}
          >
            <TableHead sx={{ backgroundColor: grey }}>
              <StyledTableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>CREATED AT</StyledTableCell>
                <StyledTableCell>DESCRIPTION</StyledTableCell>
                <StyledTableCell>STATUS</StyledTableCell>
                <StyledTableCell>SETTINGS</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {invoices.map(({ id, createdAt, description, status }) => (
                <StyledTableRow key={id}>
                  <StyledTableCell>{id}</StyledTableCell>
                  <StyledTableCell>{createdAt.toString()}</StyledTableCell>
                  <StyledTableCell align="left">{description}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Box
                      sx={{
                        color: "white",
                        p: 1,
                        alignItems: "center",
                        border: "1px",
                        borderRadius: "20px",
                        textAlign: "center",
                        backgroundColor:
                          status === "PAID" ? "#00D63C" : blue[500],
                      }}
                    >
                      {status}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box>
                      <Button
                        onClick={(e) => {
                          setAnchorEl(e.currentTarget);
                          setSelectedId(id);
                        }}
                        sx={{
                          borderRadius: "40px",
                          color: "white",
                          backgroundColor: blue[500],
                        }}
                      >
                        ...
                      </Button>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate(`/payment/${selectedId}`);
                  }}
                >
                  <VisibilityIcon />
                  VIEW
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <EditIcon />
                  EDIT
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ArchiveIcon />
                  ARCHIVE
                </MenuItem>
              </Menu>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default InvoicesPage;
