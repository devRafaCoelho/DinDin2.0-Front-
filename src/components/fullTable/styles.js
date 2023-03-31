import { styled, Table, TableContainer, TableHead } from "@mui/material";
import { CustomTableCell } from "../../styles/styles";

export const CustomTableContainer = styled(TableContainer)`
    &::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 20px;
        border: 3px solid white;
    }
    &::-webkit-scrollbar {
        width: 1px;
    }
    padding-bottom: 50px;
`

export const CustomTableHead = styled(TableHead)`
    background: #FAFAFA;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
`

export const CustomTable = styled(Table)`
    border-collapse: unset;
`

export const TableCellBorderRadius = styled(CustomTableCell)`
    ${({ side }) => (`border-top-${side}-radius: 50px;`)}
    ${({ side }) => (`border-bottom-${side}-radius: 50px;`)}
`
