import { Close, Pause, Search } from "@mui/icons-material";
import { Button, Grid, IconButton, Paper, TextField } from "@mui/material";

const Searchbar = () => {
  return <Paper sx={{
    p: 2, display: 'flex', flexDirection: 'column'
  }}>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <TextField fullWidth variant="standard" label="Scan or search product" InputProps={{
          endAdornment: <IconButton size="small">
            <Search />
          </IconButton>
        }} />
      </Grid>
      <Grid item xs={3} alignItems="flex-end">
        <Button variant="contained" color="warning" startIcon={<Pause />}>Pause</Button>
      </Grid>
      <Grid item xs={3} alignItems="flex-end">
        <Button variant="outlined" color="error" startIcon={<Close />}>Cancel</Button>
      </Grid>
    </Grid>
  </Paper>
}

export default Searchbar;
