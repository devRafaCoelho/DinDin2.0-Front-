import { Typography } from "@mui/material";
import LogoImg from "../../assets/dindin.svg";
import { BoxLogo } from "./styles";

export default function Logo({ margin }) {
    return (
        <BoxLogo marginBottom={margin}>
            <img src={LogoImg} alt='Logo da Dindin' />
            <Typography variant='dindinLogo' color='white'>DinDin</Typography>
        </BoxLogo >
    )
}