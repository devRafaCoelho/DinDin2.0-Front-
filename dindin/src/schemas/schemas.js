import * as yup from 'yup'

export const schemaRegister = yup.object().shape({
  name: yup.string().required('Este campo deve ser preenchido'),
  email: yup.string().required('Este campo deve ser preenchido'),
  password: yup.string().required('Este campo deve ser preenchido'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não são iguais')
    .required('Este campo deve ser preenchido')
})

export const schemaLogin = yup.object().shape({
  email: yup.string().required('Este campo deve ser preenchido'),
  password: yup.string().required('Este campo deve ser preenchido')
})

export const schemaUpdateUser = yup.object().shape({
  name: yup.string().required('Este campo deve ser preenchido'),
  email: yup.string().required('Este campo deve ser preenchido'),
  password: yup.string().required('Este campo deve ser preenchido'),
  newPassword: yup.string().nullable(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'As senhas não são iguais')
    .nullable()
})

export const schemaTransation = yup.object().shape({
  value: yup.string().required('Este campo deve ser preenchido'),
  date: yup.string().required('Este campo deve ser preenchido'),
  category_id: yup
    .string()
    .notOneOf(['valor nulo'], 'Selecione um valor')
    .required('Este campo deve ser preenchido'),
  description: yup.string().nullable()
})
