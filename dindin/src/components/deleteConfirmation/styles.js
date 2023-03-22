import { styled, Box, Paper } from "@mui/material";

export const TableRowBox = styled(Box)`
    background: #E4F2FD;
    border-radius: 4px;
    padding: 8px 15px;
    position: absolute;
    top: 119%;
    left: 30%;
    transform: translate(-50%, -50%);    width: 110px;
    z-index: 2;
`

export const CustomPaper = styled(Paper)`
    padding: 0 10px;
    background-color: ${({ bgcolor }) => (bgcolor)};
    cursor: pointer;
`