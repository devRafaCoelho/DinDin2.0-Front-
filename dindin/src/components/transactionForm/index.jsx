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

export default function TransactionForm({ text }) {
  const [selectValue, setSelectValue] = useState('valor nulo')
  const [statusEntryButton, setStatusEntryButton] = useState(true)
  const [statusExitButton, setStatusExitButton] = useState(false)
  const { setOpenAddTransactionForm, setOpenEditTransactionForm, categories, setCategories } =
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

  async function getCategories() {
    try {
      const token = getItem('token')

      const response = await api.get('/categorie', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setCategories(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function onSubmit({ type, value, date, description, categorie_id }) {
    try {
      const token = getItem('token')

      const data = {
        type: statusEntryButton ? 'entrada' : 'saida',
        value,
        date,
        description,
        categorie_id
      }
      console.log(data)

      if (text === 'Adicionar') {
        await api.post('/transaction', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      } else if (text === 'Editar') {
        await api.put('/transaction/${id}', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      }

      setOpenAddTransactionForm()
      setOpenEditTransactionForm()
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
    getCategories()
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
        <Typography variant="dindinLogo">{text} Registro</Typography>
        <XBox>
          <img
            onClick={() => {
              setOpenAddTransactionForm(false)
              setOpenEditTransactionForm(false)
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
            sx={{ backgroundColor: statusEntryButton ? 'primary.secondary' : 'grey.1400' }}
            onClick={() => {
              setStatusEntryButton(true)
              setStatusExitButton(false)
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
            sx={{ backgroundColor: statusExitButton ? 'primary.negativeButton' : 'grey.1400' }}
            onClick={() => {
              setStatusEntryButton(false)
              setStatusExitButton(true)
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
              {text}
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
