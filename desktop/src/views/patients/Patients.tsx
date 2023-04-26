import { Search } from "@mui/icons-material"
import { Button, Grid, TextField } from "@mui/material"
import PaginatedTable from "../../components/PaginatedTable"

const Patients = () => {
  return <PaginatedTable
    title="Patients"
    columns={[]}
    rows={[]}
    page={1}
    rowsPerPage={10}
    totalItems={0}
    handleChangePage={() => { }}
    handleChangeRowsPerPage={() => { }}
    toolbarContent={
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <TextField variant="standard" fullWidth InputProps={{
            startAdornment: <Search fontSize="small" />
          }} />
        </Grid>
        <Grid item sm={2}>
          <TextField variant="standard" label="Category" select fullWidth />
        </Grid>
        <Grid item sm={2}>
          <TextField variant="standard" label="Status" select fullWidth />
        </Grid>
        <Grid item sm={2}>
          <TextField variant="standard" label="Date" select fullWidth />
        </Grid>
        <Grid item sm={3}>
          <Button>New Appointment</Button>
        </Grid>
      </Grid>
    }
  />

}

export default Patients
