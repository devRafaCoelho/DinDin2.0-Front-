import { Grid, Typography } from "@mui/material";
import { DefaultButton, FormBox } from "../../styles/styles";
import closeX from "../../assets/closeX.svg"
import DefaultTextField from "../defaultTextField";
import { useForm } from "react-hook-form";
import { schemaUpdateUser } from "../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextBox, XBox } from "../../styles/styles"
import { useEffect } from "react";

export default function UserForm({ setUserFormBoolean }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schemaUpdateUser),
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

    return (
        <FormBox
            onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
            textAlign='left'
            component='form'
            blur='true'
        >
            <TextBox>
                <Typography variant="dindinLogo">
                    Editar Perfil
                </Typography>
                <XBox>
                    <img onClick={() => setUserFormBoolean(false)} style={{ cursor: 'pointer' }} src={closeX} />
                </XBox>
            </TextBox>
            <Grid container spacing={2}>
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
                    placeHolderText='seu E-mail'
                />
                <DefaultTextField
                    inputName='password'
                    text='Senha'
                    register={register}
                    errors={errors}
                    placeHolderText='sua Senha'
                />
                <DefaultTextField
                    inputName='newPassword'
                    text='Nova Senha'
                    register={register}
                    errors={errors}
                    placeHolderText='sua Nova Senha'
                />
                <DefaultTextField
                    inputName='confirmPassword'
                    text='Confirme a Senha'
                    register={register}
                    errors={errors}
                    placeHolderText='sua Nova Senha'
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