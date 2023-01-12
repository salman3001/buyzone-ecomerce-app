import React, { useReducer } from 'react';
import Layout from '../components/Layout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginFormSchema from '../formValidationSchemas/loginFormSchema';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Alert from '../components/Alert';

const Login = () => {
	const router = useRouter();
	const { query } = useRouter();
	const { data: session } = useSession();
	if (session) {
		router.push((query.redirect as string) || '/');
	} else {
		return <Layout title="Log In">{<FormComponent />}</Layout>;
	}
};

export default Login;

const FormComponent = () => {
	const router = useRouter();
	const { query } = useRouter();
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={loginFormSchema}
			onSubmit={(values) => {
				signIn('credentials', values);
			}}
		>
			{({ errors, touched, handleSubmit }) => (
				<Form
					className="form-control mx-auto my-[10%] h-full max-w-md gap-2 px-4"
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
				>
					{query.error ? <Alert type="alert-error">{`invalid credentials`}</Alert> : null}
					<h1 className="pb-2 text-2xl">Please enter your detail !</h1>
					<label htmlFor="email">Email</label>
					<Field name="email" className={` input ${errors.email && touched.email ? 'input-error' : 'input-primary'}`} />
					<ErrorMessage name="email" component="div" className="text-error" />
					<label htmlFor="password">Password</label>
					<Field
						name="password"
						type="password"
						className={` input ${errors.password && touched.password ? 'input-error' : 'input-primary'}`}
					/>
					<ErrorMessage name="password" component="div" className="text-error" />
					<button type="submit" className="btn-primary btn my-2 ">
						Login
					</button>
					<p className="self-center pt-2 text-center ">
						Dont have an account ? <br />
						<Link href={'/createAccount?redirect=/login'} className="link-primary link ">
							Create an account
						</Link>
					</p>
				</Form>
			)}
		</Formik>
	);
};
