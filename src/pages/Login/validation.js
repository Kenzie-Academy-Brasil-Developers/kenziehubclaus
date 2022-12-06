import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email: yup
        .string()
        .required('O email é obrigatório')
        .email('Não é um email válido'),
    password: yup
        .string()
        .required('A senha é obrigatória')
});