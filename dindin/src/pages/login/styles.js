import { styled, Box } from '@mui/material'
import { DefaultButton } from '../../styles/styles'

export const TextButton = styled(DefaultButton)`
    width: 284px;
`

export const LoginText = styled(Box)`
    display: flex; 
    flex-direction: column; 
    gap: 40px;
    width: 100%;
`

export const DisplayGap = styled(Box)`
    display: flex; 
    gap: 90px;
    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`