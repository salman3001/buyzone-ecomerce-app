import * as yup from 'yup';
const createAccountFormSchema = yup.object().shape({
	firstName: yup.string().required('This Field is required').min(2, 'Minimum charectors 2 required'),
	lastName: yup.string().required('This Field is required').min(2, 'Minimum charectors 2 required'),
	email: yup.string().email('Not a valid email').required('This Field is required'),
	password: yup
		.string()
		.min(6, 'Minimum charector should be 6')
		.max(12, 'max charectors should be 12')
		.required('This Field is required'),
});

export default createAccountFormSchema;
