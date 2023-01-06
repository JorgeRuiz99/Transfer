import { Box, Button, TextField } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 860,
          padding: 4,
          margin: 4,
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
        <Box>
          <Box
            sx={{
              height: "80px",
              width: "100%",
              backgroundColor: blue[500],
              color: "white",
              borderRadius: 4,
              display: "flex",
              textAlign: "center",
            }}
          >
            <h1>Metodo de Pago - Transferencia</h1>
          </Box>
          <h3>
            Por favor, para comletar la compra tendrá que realizar una
            transferencia bancaria al siguiente número de cuenta:
          </h3>
          <h1>1010101045</h1>
        </Box>
        <Box>
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "190px",
                width: "20",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Banco_Pichincha_logo.svg/2560px-Banco_Pichincha_logo.svg.png"
                alt=""
              />
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            border: `2px solid ${grey[500]}`,
            p: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "75%",
              flexDirection: "column",
              padding: 2,
              border: `2px solid ${grey[900]}`,
            }}
          >
            <h3>Datos del cliente</h3>
            <Box sx={{ padding: 1 }}>
              <TextField fullWidth label="Nombre del cliente" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField fullWidth label="Numero de identificación" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField
                fullWidth
                label="Descripción (Opcional)"
                multiline
                rows={3}
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{ margin: 4 }}>
              <h2>Advertencia:</h2>
              <h3>
                Una vez que presione el botón "PAGADO" no podrá realizar mas
                cambios de información del usuario.
              </h3>
            </Box>
            <Box sx={{ margin: 4 }}>
              <Button color="error" size="large" variant="contained">
                PAGADO
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
