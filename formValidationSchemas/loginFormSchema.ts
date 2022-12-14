import * as yup from 'yup';
const loginFormSchema = yup.object().shape({
	email: yup.string().email('Not a valid email').required('This field is required'),
	password: yup
		.string()
		.min(6, 'minimum charectors should be six')
		.max(12, 'max charectors should be 12')
		.required('This field is required'),
});

export default loginFormSchema;
