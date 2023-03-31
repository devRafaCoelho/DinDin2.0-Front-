import { styled, TextField } from "@mui/material";
import { theme } from "../../theme/theme";

export const CustomTextField = styled(TextField)`
    & input::placeholder {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${theme.palette.grey[1100]};
    }
`