import { Grid, Typography } from "@mui/material";
import { DefaultButton, FormBox } from "../../styles/styles";
import closeX from "../../assets/closeX.svg"
import DefaultTextField from "../defaultTextField";
import { useForm } from "react-hook-form";
import { schemaTransition } from "../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextBox, XBox } from "../../styles/styles"
import { useEffect } from "react";
import { mask, unMask } from 'remask'
import { formatedValueInputBRL } from '../../utils/formatValue'

export default function TransitionForm({ setTransitionFormBoolean, text }) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schemaTransition),
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
        let correctValue = formatedValueInputBRL(unMask(e.target.value));
        let arrayValue = correctValue.replace(/\d/g, '9')

        setValue('value', mask((correctValue === '0,00' ? '' : correctValue), [`${arrayValue}`]))
    }

    return (
        <FormBox
            onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
            textAlign='left'
            component='form'
            blur='true'
        >
            <TextBox>
                <Typography variant="dindinLogo">
                    {text} Registro
                </Typography>
                <XBox>
                    <img onClick={() => setTransitionFormBoolean(false)} style={{ cursor: 'pointer' }} src={closeX} />
                </XBox>
            </TextBox>
            <Grid container spacing={2}>
                <DefaultTextField
                    inputName='value'
                    text='Valor'
                    register={register}
                    errors={errors}
                    placeHolderText='o valor da cobrança'
                    mask={handleChange}
                    start='R$'
                />
                <DefaultTextField
                    inputName='date'
                    text='Data'
                    register={register}
                    errors={errors}
                    type='date'
                />
                <DefaultTextField
                    inputName='description'
                    text='Descrição'
                    register={register}
                    errors={errors}
                    placeHolderText='a descrição'
                />
            </Grid>
            <DefaultButton mrtop='50px' middle='50%' type='submit' variant="contained">
                <Typography variant='button' color='white'>
                    Confirmar
                </Typography>
            </DefaultButton>
        </FormBox>
    )
}