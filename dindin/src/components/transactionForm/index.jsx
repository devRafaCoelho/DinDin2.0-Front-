import { yupResolver } from '@hookform/resolvers/yup'
import { FormLabel, Grid, MenuItem, Select, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { mask, unMask } from 'remask'
import closeX from '../../assets/closeX.svg'
import useAppContext from '../../hooks/useAppContext'
import { schemaTransation } from '../../schemas/schemas'
import api from '../../services/api'
import { DefaultButton, FormBox, TextBox, XBox } from '../../styles/styles'
import { formatedValueInputBRL } from '../../utils/formatValue'
import { getItem } from '../../utils/storage'
import DefaultTextField from '../defaultTextField'
import { CustomTypography } from './styles'

export default function TransactionForm() {
  const [selectValue, setSelectValue] = useState('valor nulo')
  const [statusButton, setStatusButton] = useState(true)
  const { setOpenTransactionForm, categories, textTransactionForm } =
    useAppContext()
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaTransation),
    defaultValues: {
      type: '',
      value: '',
      date: '',
      description: '',
      categorie_id: ''
    }
  })

  async function onSubmit({ type, value, date, description, categorie_id }) {
    try {
      const token = getItem('token')

      const data = {
        type: statusButton ? 'entrada' : 'saida',
        value: unMask(value),
        date,
        description,
        categorie_id
      }
      console.log(data)

      if (textTransactionForm === 'Adicionar') {
        await api.post('/transaction', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      } else if (textTransactionForm === 'Editar') {
        await api.put('/transaction/${id}', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      }
      setOpenTransactionForm(false)
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
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  function handleChange(e) {
    let correctValue = formatedValueInputBRL(unMask(e.target.value))
    let arrayValue = correctValue.replace(/\d/g, '9')

    setValue('value', mask(correctValue === '0,00' ? '' : correctValue, [`${arrayValue}`]))
  }

  return (
    <FormBox
      onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
      textAlign="left"
      component="form"
      blur="true"
    >
      <TextBox>
        <Typography variant="dindinLogo">{textTransactionForm} Registro</Typography>
        <XBox>
          <img
            onClick={() => {
              setOpenTransactionForm(false)
            }}
            style={{ cursor: 'pointer' }}
            src={closeX}
          />
        </XBox>
      </TextBox>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <DefaultButton
            mrtop="50px"
            variant="contained"
            sx={{ backgroundColor: statusButton ? 'primary.secondary' : 'grey.1400' }}
            onClick={() => {
              setStatusButton(true)
            }}
          >
            <Typography variant="button" color="white">
              Entrada
            </Typography>
          </DefaultButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DefaultButton
            mrtop="50px"
            variant="contained"
            sx={{ backgroundColor: !statusButton ? 'primary.negativeButton' : 'grey.1400' }}
            onClick={() => {
              setStatusButton(false)
            }}
          >
            <Typography variant="button" color="white">
              Saída
            </Typography>
          </DefaultButton>
        </Grid>
        <DefaultTextField
          inputName="value"
          text="Valor"
          register={register}
          errors={errors}
          placeHolderText="o valor da cobrança"
          mask={handleChange}
          start="R$"
        />
        <Grid item xs={12}>
          <FormLabel htmlFor="categorie_id">
            <Typography color="#484848" variant="formLabel">
              {textTransactionForm}
            </Typography>
          </FormLabel>
          <Select
            fullWidth
            id="categorie_id"
            name="categorie_id"
            value={selectValue}
            {...register('categorie_id')}
            error={!!errors['categorie_id']}
            onChange={(e) => setSelectValue(e.target.value)}
            color="grey"
          >
            <MenuItem disabled value="valor nulo">
              <em>Selecione a categoria</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                <em>{category.description}</em>
              </MenuItem>
            ))}
          </Select>
          {errors['categorie_id'] && (
            <CustomTypography>{errors['categorie_id'].message}</CustomTypography>
          )}
        </Grid>
        <DefaultTextField
          inputName="date"
          text="Data"
          register={register}
          errors={errors}
          type="date"
        />
        <DefaultTextField
          inputName="description"
          text="Descrição"
          register={register}
          errors={errors}
          placeHolderText="a descrição"
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
