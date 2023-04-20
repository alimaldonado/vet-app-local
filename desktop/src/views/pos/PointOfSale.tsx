import { Grid } from "@mui/material"
import ItemsTable from "./components/ItemsTable"
import Summary from "./components/Summary"

const PointOfSale = () => {
  return <Grid container spacing={3}>
    <Grid item xs={12} md={8} lg={9}>
      <ItemsTable />
    </Grid>
    <Grid item xs={12} md={4} lg={3}>
      <Summary />
    </Grid>
  </Grid>

}

export default PointOfSale
