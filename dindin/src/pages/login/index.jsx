import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import DefaultTextField from '../../components/defaultTextField'
import Logo from '../../components/logo'
import { schemaLogin } from '../../schemas/schemas'
import api from '../../services/api'
import { DefaultButton, FormBox, LoginRegisterPage, LoginRegisterPageContend } from '../../styles/styles'
import { setItem } from '../../utils/storage'
import { DisplayGap, LoginText, TextButton } from './styles'

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogin)
  })
  const navigate = useNavigate()

  async function onSubmit({ email, password }) {
    try {
      const response = await api.post('/login', {
        email,
        password
      })

      const { token } = response.data
      setItem('token', token)
      navigate('/main')
    } catch (error) {
      if (error.response.data?.error) {
        const errorData = Object.getOwnPropertyNames(error.response.data?.error)
        errorData.map((elementDate) => {
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
        <DisplayGap>
          <LoginText>
            <Typography variant="loginTitle" component="h3" color="white">
              Controle suas{' '}
              <Typography variant="loginTitle" color="primary">
                finanças
              </Typography>
              , sem planilha chata.
            </Typography>
            <Typography variant="loginText" component="p" color="white">
              Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
            </Typography>
            <TextButton color="primary" onClick={() => navigate('/register')} variant="contained">
              <Typography variant="button" color="white">
                Cadastre-se
              </Typography>
            </TextButton>
          </LoginText>
          <FormBox component="form" gap="50px" onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}>
            <Typography variant="loginFormTitle" component="h1" color="primary">
              Login
            </Typography>
            <Grid gap="30px" container spacing={2}>
              <DefaultTextField inputName="email" text="E-mail" register={register} errors={errors} placeHolderText="seu Email" />
              <DefaultTextField inputName="password" text="Senha" register={register} errors={errors} placeHolderText="sua senha" passwordInput={true} />
            </Grid>
            <DefaultButton type="submit" variant="contained">
              <Typography variant="button" color="white">
                Entrar
              </Typography>
            </DefaultButton>
          </FormBox>
        </DisplayGap>
      </LoginRegisterPageContend>
    </LoginRegisterPage>
  )
}
