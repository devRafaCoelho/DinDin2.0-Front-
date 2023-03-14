import { Grid, Typography } from '@mui/material'
import Logo from '../../components/logo'
import { TextButton, LoginText, DisplayGap } from './styles'
import { useNavigate } from 'react-router-dom'
import { LoginRegisterPage, LoginRegisterPageContend, DefaultButton, FormBox } from '../../styles/styles'
import DefaultTextField from '../../components/defaultTextField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLogin } from '../../schemas/schemas'

export default function LoginPage() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schemaLogin),
    })

    function onSubmit({ email, password }) {
        console.log(email, password)
    }

    return (
        <LoginRegisterPage>
            <Logo margin='30px' />
            <LoginRegisterPageContend>
                <DisplayGap>
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
                        <TextButton color='primary' onClick={() => navigate('/register')} variant="contained">
                            <Typography variant='button' color='white'>
                                Cadastre-se
                            </Typography>
                        </TextButton>
                    </LoginText>
                    <FormBox
                        component='form'
                        gap='50px'
                        onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
                    >
                        <Typography variant='loginFormTitle' color='primary'>
                            Login
                        </Typography>
                        <Grid gap='30px' container spacing={2}>
                            <DefaultTextField
                                inputName='email'
                                text='E-mail'
                                register={register}
                                errors={errors}
                                placeHolderText='seu Email'
                            />
                            <DefaultTextField
                                inputName='password'
                                text='Senha'
                                register={register}
                                errors={errors}
                                placeHolderText='sua senha'
                                passwordInput={true}
                            />
                        </Grid>
                        <DefaultButton type='submit' variant="contained">
                            <Typography variant='button' color='white'>
                                Entrar
                            </Typography>
                        </DefaultButton>
                    </FormBox>
                </DisplayGap>
            </LoginRegisterPageContend>
        </LoginRegisterPage>
    )
}