import { blue, grey } from "@mui/material/colors";
import { TableCell, tableCellClasses, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerBoxStyle = {
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
};

export const InvoicesTitleStyle = {
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
};

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[400],
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
}));
