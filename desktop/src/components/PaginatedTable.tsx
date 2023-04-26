import {
  Box,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { ChangeEvent, ReactNode } from "react";

type Column = {
  id: string;
  label: string;
  minWidth?: number;
  format?: any;
  align?: "right" | "left" | "center" | "inherit" | "justify";
  dissablePadding?: boolean;
}

type Row = {
  [k: string]: any;
}


type CustomTableProps = {
  title: string,
  columns: Column[];
  rows: Row[];
  page: number;
  actions?: ReactNode;
  rowsPerPage: number;
  totalItems: number;
  handleChangePage: (page: number) => void;
  handleChangeRowsPerPage: (rowsPerPage: number) => void;
  order?: "asc" | "desc";
  orderBy?: string;
  toolbarContent?: ReactNode;
}

const PaginatedTable = ({
  title,
  columns,
  rows,
  totalItems,
  rowsPerPage,
  actions,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  order,
  orderBy,
  toolbarContent
}: CustomTableProps) => {
  return (
    <Grid item sm={12}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Toolbar>
          <Typography
            sx={{
              flex: "1 1 100%",
            }}
            variant="h6"
            id="table-title"
            component="div"
          >
            {title}
          </Typography>
        </Toolbar>
        <Toolbar>
          {toolbarContent}
        </Toolbar>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    padding={column?.dissablePadding ? "none" : "normal"}
                    sortDirection={orderBy === column.id ? order : "asc"} >
                    <Stack direction="row">
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={column?.dissablePadding ? order : "asc"}
                        onClick={() => { console.log("sort by", column.id) }}
                      >
                        {column.label}
                        {orderBy === column.id ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === "desc" ? "sorted descending" : "sorted ascending"}
                          </Box>) : null}
                      </TableSortLabel>
                    </Stack>
                  </TableCell>
                ))}
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        {actions}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={totalItems}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage: number) => {
            handleChangePage(newPage);
          }}
          onRowsPerPageChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            handleChangeRowsPerPage(+event.target.value);
            handleChangePage(0);
          }}
        />
      </Paper >
    </Grid >
  );
}

export default PaginatedTable;
