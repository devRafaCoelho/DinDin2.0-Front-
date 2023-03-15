import { Box, styled } from "@mui/material";

export const HeaderBox = styled(Box)`
    width: 100vw;
    min-height: 15vh;
    background-image: linear-gradient(to right, #05EDE3, #6460FB);   
`

export const HeaderContent = styled(Box)`
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
`

export const HeaderText = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const HeaderWhite = styled(Box)`
    width: 100vw;
    height: 5vh;
    background-color: white;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
`

