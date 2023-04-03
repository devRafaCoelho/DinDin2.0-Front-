import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import DefaultTextField from '../../components/defaultTextField'
import Logo from '../../components/logo'
import { schemaRegister } from '../../schemas/schemas'
import api from '../../services/api'
import { DefaultButton, FormBox, LoginRegisterPage, LoginRegisterPageContend } from '../../styles/styles'
import { BoxRegisterButton } from './styles'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaRegister)
  })
  const navigate = useNavigate()

  async function onSubmit({ name, email, password }) {
    try {
      await api.post('/register', {
        name,
        email,
        password
      })
      navigate('/login')
    } catch (error) {
      if (error.response.data?.error) {
        const errorData = Object.getOwnPropertyNames(error.response.data?.error)
        errorData.forEach((elementDate) => {
          setError(
            elementDate,
            {
              type: 'manual',
              message: error.response.data?.error[elementDate]
            },
            {
              shouldFocus: true
            }
          )
        })
      }
    }
  }

  return (
    <LoginRegisterPage>
      <Logo margin="30px" />
      <LoginRegisterPageContend>
        <FormBox component="form" gap="50px" onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}>
          <Typography variant="loginFormTitle" component="h1" color="primary">
            Cadastre-se
          </Typography>
          <Grid gap="30px" container spacing={2}>
            <DefaultTextField inputName="name" text="Nome" register={register} errors={errors} placeHolderText="seu nome" />
            <DefaultTextField inputName="email" text="E-mail" register={register} errors={errors} placeHolderText="seu Email" />
            <DefaultTextField inputName="password" text="Senha" register={register} errors={errors} placeHolderText="sua senha" passwordInput={true} />
            <DefaultTextField inputName="confirmPassword" text="Confirmação de Senha" register={register} errors={errors} placeHolderText="sua senha" passwordInput={true} />
          </Grid>
          <BoxRegisterButton>
            <DefaultButton type="submit" variant="contained">
              <Typography variant="button" color="white">
                Cadastrar
              </Typography>
            </DefaultButton>
            <Typography sx={{ cursor: 'pointer' }} variant="tableTitle" component="span" color="primary" onClick={() => navigate('/login')}>
              Já tem cadastro? Clique aqui!
            </Typography>
          </BoxRegisterButton>
        </FormBox>
      </LoginRegisterPageContend>
    </LoginRegisterPage>
  )
}
