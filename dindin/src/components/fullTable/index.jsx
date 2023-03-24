import { TableBody, TableCell, Typography } from "@mui/material";
import useAppContext from "../../hooks/useAppContext";
import { CustomTable, CustomTableContainer, CustomTableHead, TableCellBorderRadius } from "./styles";
import CustomTableRow from "./tableRow";

export default function FullTable() {
  const {
    transactions,
  } = useAppContext()

  return (
    <CustomTableContainer>
      <CustomTable>
        <CustomTableHead>
          <TableCellBorderRadius side='left' align="left">
            <Typography variant="tableTitle">Data</Typography>
          </TableCellBorderRadius>
          <TableCell align="center">
            <Typography variant="tableTitle">Dia da semana</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="tableTitle">Descrição</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="tableTitle">Categoria</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="tableTitle">Valor</Typography>
          </TableCell>
          <TableCell />
          <TableCellBorderRadius side="right" />
        </CustomTableHead>
        <TableBody>
          {transactions.map(transaction => (
            <CustomTableRow transaction={transaction} key={transaction.id} />
          ))}
        </TableBody>
      </CustomTable>
    </CustomTableContainer>

  )
}
