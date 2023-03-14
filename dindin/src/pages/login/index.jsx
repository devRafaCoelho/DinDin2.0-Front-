import { Box, Typography } from '@mui/material'
import Logo from '../../components/logo'
import { TextButton, LoginText } from './styles'
import { useNavigate } from 'react-router-dom'
import { LoginRegisterPage, LoginRegisterPageContend, DefaultButton } from '../../styles/styles'

export default function LoginPage() {
    const navigate = useNavigate()
    return (
        <LoginRegisterPage>
            <Logo />
            <LoginRegisterPageContend>
                <Box sx={{ display: 'flex', gap: '90px' }}>
                    <LoginText>
                        <Typography variant='loginTitle' color='white'>
                            Controle suas <Typography variant='loginTitle' color='primary'>finanças</Typography>
                            , sem planilha chata.
                        </Typography>
                        <Typography variant='loginText' color='white'>
                            Organizar as suas finanças nunca foi tão
                            fácil, com o DINDIN, você tem tudo num
                            único lugar e em um clique de distância.
                        </Typography>
                        <TextButton color='primary'>
                            <Typography variant='button' color='white'>
                                Cadastre-se
                            </Typography>
                        </TextButton>
                    </LoginText>
                </Box>
            </LoginRegisterPageContend>
        </LoginRegisterPage >
    )
}