import * as yup from 'yup';

const formSchema = yup.object().shape({

    name: yup
    .string()
    .trim()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),

    size: yup
    .string()
    .required('size is required')
    .min(1, 'you need to pick a size'),

    sauce: yup
    .string()
    .required('sauce is required')
    .min(1, 'you need to pick a sauce'),

    special: yup
    .string()
    


})

export default formSchema;