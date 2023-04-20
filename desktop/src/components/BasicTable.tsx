import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

type BasicTableProps = {
  columns: Column[];
  rows: Row[];
  hideTableHead?: boolean;
}

export default function BasicTable({ columns, rows, hideTableHead = false }: BasicTableProps) {

  return (
    <TableContainer >
      <Table aria-label="simple table">
        {hideTableHead ? null : <TableHead>
          <TableRow>
            {columns.map(c => (
              <TableCell
                padding={c?.dissablePadding ? "none" : "normal"}
                key={c.id} align={c.align}>{c.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>}
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
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
