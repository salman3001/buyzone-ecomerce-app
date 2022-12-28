import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import createAccountFormSchema from '../formValidationSchemas/createAccountFormSchema';
import Link from 'next/link';
import axios from 'axios';
import Alert from '../components/Alert';
import { useRouter } from 'next/router';

const CreateAccount = () => {
	const [error, setEror] = useState<null | string>(null);
	const router = useRouter();
	const { query } = router;
	return (
		<Layout title="Create Account">
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: '',
				}}
				validationSchema={createAccountFormSchema}
				onSubmit={async (values, { resetForm }) => {
					setEror(null);
					try {
						const res = await axios.post('/api/signup', values);
						alert(`hello ${res.data.firstName}! Your Account has been created! Redirecting`);
						setEror(null);
						resetForm();
						await setTimeout(() => {
							router.push((query.redirect as string) || '/');
						}, 500);
					} catch (error: any) {
						setEror(error.response.data.message);
					}
				}}
			>
				{({ errors, touched, isSubmitting, handleSubmit }) => (
					<Form className="ma x-w-md form-control m-4	mx-auto gap-2 px-4" onSubmit={handleSubmit}>
						<h1 className="pb-2 text-2xl">Please enter your detail !</h1>
						<label htmlFor="firstName" className="label py-0">
							First Name
						</label>
						<Field
							name="firstName"
							className={`input  ${errors.firstName && touched.firstName ? 'input-error' : 'input-primary'}`}
						/>
						<ErrorMessage component="div" name="firstName" className="text-error" />
						<label htmlFor="lastName" className="label py-0">
							Last Name
						</label>
						<Field
							name="lastName"
							className={`input  ${errors.lastName && touched.lastName ? 'input-error' : 'input-primary'}`}
						/>
						<ErrorMessage component="div" name="lastName" className="text-error" />
						<label htmlFor="email" className="label py-0">
							Email
						</label>
						<Field
							name="email"
							className={`input  ${errors.email && touched.email ? 'input-error' : 'input-primary'}`}
						/>
						<ErrorMessage component="div" name="email" className="text-error" />
						<label htmlFor="password" className="label py-0">
							Password
						</label>
						<Field
							name="password"
							className={`input  ${errors.password && touched.password ? 'input-error' : 'input-primary'}`}
						/>
						<ErrorMessage component="div" name="password" className="text-error" />
						{error ? <Alert type="alert-error">{error}</Alert> : null}
						<button type="submit" className={`${isSubmitting ? `btn-disabled` : `btn-primary`} btn my-4`}>
							Create Account
						</button>
						<p className="self-center text-center ">
							Alread have an account ? <br />
							<Link href="/login" className="link-primary link ">
								Log In
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};

export default CreateAccount;
