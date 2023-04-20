import { Paper } from "@mui/material";
import BasicTable from "../../../components/BasicTable";

const Summary = () => {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })

  return <Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      height: "100%",
    }}
  >
    <BasicTable
      hideTableHead
      columns={[
        { id: "concept", label: "" },
        { id: "value", label: "", format: moneyFormatter.format }
      ]}
      rows={[
        { concept: "Subtotal", value: 1200 },
        { concept: "Discounts", value: 70 },
        { concept: "Subtotal", value: 1130 }
      ]} />
  </Paper>

}

export default Summary;
