import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import Invoices from "../../mock/invoices";
import { useState, MouseEvent } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArchiveIcon from "@mui/icons-material/Archive";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[400],
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
}));

const InvoicesPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Box sx={{ height: "97%", backgroundColor: "#EAEAEA" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 860,
          p: 4,
          backgroundColor: "white",
          borderRadius: 2,
          border: `1px solid ${grey[400]}`,
          "&": {
            transition: "all 0.5s",
          },
          "&:hover": {
            boxShadow: "0 0 16px #00000055",
          },
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: 50,
            color: grey[50],
            p: 1,
            alignContent: "center",
            border: "1px",
            borderRadius: "10px",
            backgroundColor: blue[500],
            width: "200px",
            textAlign: "center",
          }}
        >
          INVOICES
        </Box>
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
              {Invoices.map((invoice) => (
                <StyledTableRow key={invoice.id}>
                  <StyledTableCell>{invoice.id}</StyledTableCell>
                  <StyledTableCell>
                    {invoice.createdAt.toString()}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {invoice.description}
                  </StyledTableCell>
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
                          invoice.status === "PAID" ? "#00D63C" : blue[500],
                      }}
                    >
                      {invoice.status}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box>
                      <Button
                        onClick={handleMenu}
                        sx={{
                          borderRadius: "40px",
                          color: "white",
                          backgroundColor: blue[500],
                        }}
                      >
                        ...
                      </Button>
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
                        <MenuItem onClick={handleClose}>
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
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default InvoicesPage;
