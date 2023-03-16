import { Box, Paper, styled, Table, TableCell, TableContainer, TableHead } from "@mui/material";
import { theme } from '../../theme/theme'
import { CustomTableCell } from "../../styles/styles";

export const MainPageBox = styled(Box)`
    width: 100%;
    min-height: 100vh;
`

export const MainPageContent = styled(Box)`
    padding-left: 7vw;
    padding-right: 7vw;
    min-height: 85vh;
`

export const MainPaperFilterButton = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 0;
    gap: 4px;
    width: 80px;
    cursor: pointer;
    background-color: ${(theme.palette.grey['100'])};
    margin-bottom: 25px;
`

export const MainPaperFilter = styled(Paper)`
    width: 100%;
    background-color: ${(theme.palette.grey['100'])};
    padding: 32px 0 13px 32px;
`

export const ButtonFilterApplication = styled(Paper)`
    border-radius: 10px;
    padding: 10px;
    background: ${({ chosen }) => (chosen ? '#7978D9' : (theme.palette.grey['100']))};
    cursor: pointer;
`

export const CustomTableContainer = styled(TableContainer)`
    &::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 20px;
        border: 3px solid white;
    }
    &::-webkit-scrollbar {
        width: 1px;
    }
`

export const CustomTableHead = styled(TableHead)`
    background: #FAFAFA;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
`

export const TableCellBorderRadius = styled(CustomTableCell)`
    ${({ side }) => (`border-top-${side}-radius: 50px;`)}
    ${({ side }) => (`border-bottom-${side}-radius: 50px;`)}
`

export const CustomTable = styled(Table)`
    border-collapse: unset;
`