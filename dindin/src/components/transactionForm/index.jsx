import { yupResolver } from '@hookform/resolvers/yup'
import { FormLabel, Grid, MenuItem, Select, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { mask, unMask } from 'remask'
import closeX from '../../assets/closeX.svg'
import useAppContext from '../../hooks/useAppContext'
import { schemaTransition } from '../../schemas/schemas'
import { DefaultButton, FormBox, TextBox, XBox } from '../../styles/styles'
import { formatedValueInputBRL } from '../../utils/formatValue'
import DefaultTextField from '../defaultTextField'
import { CustomTypography } from './styles'

export default function TransactionForm({ text }) {
  const [selectValue, setSelectValue] = useState('valor nulo')
  const { setOpenAddTransactionForm, setOpenEditTransactionForm } = useAppContext()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaTransition)
  })

  function onSubmit({ email, password }) {
    console.log(email, password)
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
      <Grid container spacing={2}>
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
          <FormLabel htmlFor="category">
            <Typography color="#484848" variant="formLabel">
              {text}
            </Typography>
          </FormLabel>
          <Select
            fullWidth
            id="category"
            name="category"
            value={selectValue}
            {...register('category')}
            error={!!errors['category']}
            onChange={(e) => setSelectValue(e.target.value)}
            color="grey"
          >
            <MenuItem disabled value="valor nulo">
              <em>Selecione a categoria</em>
            </MenuItem>
            <MenuItem value="coisa linda">
              <em>coisa linda</em>
            </MenuItem>
            <MenuItem value="coisa feia">
              <em>coisa feia</em>
            </MenuItem>
            <MenuItem value="horroroso">
              <em>horroroso</em>
            </MenuItem>
            <MenuItem value="aaaa">
              <em>aaaa</em>
            </MenuItem>
          </Select>
          {errors['category'] && <CustomTypography>{errors['category'].message}</CustomTypography>}
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
