import { styled, Box, Button, InputLabel } from "@mui/material";
import { theme } from "../theme/theme";
import ImagemDeFundo from '../assets/imagemDeFundo.png'

export const LoginRegisterPage = styled(Box)`
    background-image: url(${() => (ImagemDeFundo)});
    background-size: cover;
    min-height: 100vh;
    padding: 41px 100px;
    @media screen and (max-width: 700px) {
        padding: 20px 40px;
    }
`

export const LoginRegisterPageContend = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 82px - 45px - 30px);
`

export const DefaultButton = styled(Button)`
    background-color: ${() => (theme.palette.primary.main)};
    padding-top: 11px;
    padding-bottom: 11px;
    width: ${({ middle }) => (middle ? middle : '100%')};
`

export const FormBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({ blur }) => (blur ? '20px' : 'none')};
    max-width: ${({ blur }) => (blur ? '610px' : '513px')} !important;
    padding: ${({ blur }) => (blur ? '60px 64px 48px 64px' : '40px 32px 50px 32px')};
    gap: ${({ gap }) => (gap ? gap : 'none')}
`