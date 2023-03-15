import Logo from "../logo";
import { HeaderBox, HeaderContent, HeaderText, HeaderWhite } from "./styles"
import exit from '../../assets/exit.svg'
import profile from '../../assets/profile.svg'
import { Typography } from "@mui/material";

export default function HeaderPart() {
    return (
        <HeaderBox>
            <HeaderContent>
                <Logo />
                <HeaderText>
                    <img style={{ width: '65px', height: '65px' }} src={profile} alt='Imagem de perfil' />
                    <Typography variant="button" color="white">
                        Nome do Perfil
                    </Typography>
                    <img style={{ width: '40px', height: '40px' }} src={exit} alt='Imagem de perfil' />
                </HeaderText>
            </HeaderContent>
            <HeaderWhite />
        </HeaderBox>
    )
}