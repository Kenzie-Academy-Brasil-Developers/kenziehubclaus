import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('O nome é obrigatório')
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .max(200, 'O nome precisa ter no máximo 200 caracteres'),
    email: yup
        .string()
        .required('Você precisa digitar o email')
        .email('Digite um email válido'),
    password: yup
        .string()
        .required('Você precisa digitar a senha')
        .min(8, 'Sua senha precisa de no mínimo 8 caracteres')
        .matches(/(?=.*?[0-9])/, 'É necessário um número')
        .matches(/(?=.*?[A-Z])/, 'É necessária uma letra maiúscula')
        .matches(/(?=.*?[a-z])/, 'É necessária uma letra minúscula')
        .matches(/(?=.*?[#?!@$%^&*-])/, 'É necessário um caractere especial'),
    passwordConfirm: yup
        .string()
        .required('Você precisa confirmar a senha')
        .oneOf([yup.ref('password')], 'As senhas precisam ser iguais'),
    bio: yup
        .string()
        .required('Você precisa digitar uma bio'),
    contact: yup
        .string()
        .required('Você precisa digitar um telefone de contato'),
    course_module: yup
        .string()
        .required('Você precisa escolher um módulo de curso')
});