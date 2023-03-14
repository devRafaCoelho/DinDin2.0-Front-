import { styled, Box, Button } from "@mui/material";
import { theme } from "../theme/theme";

export const LoginRegisterPage = styled(Box)`
    background-image: url("https://raw.githubusercontent.com/VolferFreire/desafio-frontend-03-dindin-t08/master/desafio/src/documentos/imagemDeFundo.png?token=GHSAT0AAAAAAB57CL6H5R4SY26GMV2UPPXIZAP7V4Q");
    background-size: cover;
    min-height: 100vh;
    padding: 41px 100px;
`

export const LoginRegisterPageContend = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 82px - 45px);
`

export const DefaultButton = styled(Button)`
    background-color: ${() => (theme.palette.primary.main)};
    padding-top: 11px;
    padding-bottom: 11px;
`