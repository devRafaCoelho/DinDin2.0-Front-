import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import closeX from '../../assets/closeX.svg'
import { schemaUpdateUser } from '../../schemas/schemas'
import api from '../../services/api'
import { DefaultButton, FormBox, TextBox, XBox } from '../../styles/styles'
import { getItem } from '../../utils/storage'
import DefaultTextField from '../defaultTextField'
import useAppContext from '../../hooks/useAppContext'

export default function UserForm() {
  const { userData, setUserData, setOpenUserForm, functionGetUser } = useAppContext()
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaUpdateUser),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      newPassword: '',
      confirmPassword: ''
    }
  })

  async function onSubmit({ name, email, password, newPassword }) {
    try {
      const token = getItem('token')

      const data = {
        name: name.trim(),
        email,
        password: password,
        newPassword: newPassword || undefined
      }

      await api.put('/user', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUserData(data)
      functionGetUser()
      setOpenUserForm()
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

  useEffect(() => {
    setValue('name', userData.name)
    setValue('email', userData.email)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <FormBox
      onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
      textAlign="left"
      component="form"
      blur="true"
    >
      <TextBox>
        <Typography variant="dindinLogo">Editar Perfil</Typography>
        <XBox>
          <img onClick={() => setOpenUserForm(false)} style={{ cursor: 'pointer' }} src={closeX} />
        </XBox>
      </TextBox>
      <Grid container spacing={4}>
        <DefaultTextField
          inputName="name"
          text="Nome"
          register={register}
          errors={errors}
          placeHolderText="seu nome"
        />
        <DefaultTextField
          inputName="email"
          text="E-mail"
          register={register}
          errors={errors}
          placeHolderText="seu E-mail"
        />
        <DefaultTextField
          inputName="password"
          text="Senha"
          register={register}
          errors={errors}
          placeHolderText="sua Senha"
          passwordInput={true}
        />
        <DefaultTextField
          inputName="newPassword"
          text="Nova Senha"
          register={register}
          errors={errors}
          placeHolderText="sua Nova Senha"
          passwordInput={true}
        />
        <DefaultTextField
          inputName="confirmPassword"
          text="Confirme a Senha"
          register={register}
          errors={errors}
          placeHolderText="sua Nova Senha"
          passwordInput={true}
        />
      </Grid>
      <DefaultButton mrtop="50px" middle="50%" type="submit" variant="contained">
        <Typography variant="button" color="white">
          Confirmar
        </Typography>
      </DefaultButton>
    </FormBox>
  )
}
