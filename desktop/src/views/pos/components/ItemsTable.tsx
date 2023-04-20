import { DeleteOutline } from "@mui/icons-material";
import { Chip, Grid, IconButton, Paper } from "@mui/material";
import BasicTable from "../../../components/BasicTable";
import Searchbar from "./Searchbar";

const ItemsTable = () => {

  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Searchbar />
    </Grid>
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 300,
        }}
      >
        <BasicTable
          columns={[
            { id: "item", label: "Item" },
            { id: "price", label: "Price", format: moneyFormatter.format },
            { id: "quantity", label: "Qty." },
            { id: "discount", label: "Disc." },
            { id: "subtotal", label: "Subtotal", format: moneyFormatter.format },
            { id: "action", label: "" },
          ]}
          rows={[
            { item: "Collar de Perro", price: 250, quantity: 2, discount: null, subtotal: 500, action: <IconButton color="error"><DeleteOutline /></IconButton> },
            { item: "Consulta", price: 700, quantity: 1, discount: <Chip label="10%" size="small" color="success" variant="outlined" />, subtotal: 630, action: <IconButton color="error"><DeleteOutline /></IconButton> }
          ]} />
      </Paper>
    </Grid>
  </Grid>
}

export default ItemsTable;
