import { Box, Grid, Typography } from '@mui/material'
import Logo from '../../components/logo'
import { useNavigate } from 'react-router-dom'
import { LoginRegisterPage, LoginRegisterPageContend, DefaultButton, FormBox } from '../../styles/styles'
import DefaultTextField from '../../components/defaultTextField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaRegister } from '../../schemas/schemas'
import { BoxRegisterButton } from './styles'

export default function RegisterPage() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schemaRegister),
    })

    function onSubmit({ email, password }) {
        console.log(email, password)
    }

    return (
        <LoginRegisterPage>
            <Logo margin='30px' />
            <LoginRegisterPageContend>
                <FormBox
                    component='form'
                    gap='50px'
                    onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
                >
                    <Typography variant='loginFormTitle' color='primary'>
                        Cadastre-se
                    </Typography>
                    <Grid gap='30px' container spacing={2}>
                        <DefaultTextField
                            inputName='name'
                            text='Nome'
                            register={register}
                            errors={errors}
                            placeHolderText='seu nome'
                        />
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
                        <DefaultTextField
                            inputName='confirmPassword'
                            text='Confirmação de Senha'
                            register={register}
                            errors={errors}
                            placeHolderText='sua senha'
                            passwordInput={true}
                        />
                    </Grid>
                    <BoxRegisterButton>
                        <DefaultButton
                            type='submit'
                            variant="contained"
                            middle='50%'
                        >
                            <Typography variant='button' color='white'>
                                Cadastrar
                            </Typography>
                        </DefaultButton>
                        <Typography sx={{ cursor: 'pointer' }} variant='button' color='primary' onClick={() => navigate('/login')}>
                            Já tem cadastro? Clique aqui!
                        </Typography>
                    </BoxRegisterButton>
                </FormBox>
            </LoginRegisterPageContend>
        </LoginRegisterPage>
    )
}