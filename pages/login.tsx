import React from 'react';
import Layout from '../components/Layout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginFormSchema from '../formValidationSchemas/loginFormSchema';
import Link from 'next/link';

const Login = () => {
	return (
		<Layout title="Log In">
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={loginFormSchema}
				onSubmit={(values) => {
					alert(values.email + ' You are loged in');
				}}
			>
				{({ errors, touched }) => (
					<Form className="form-control mx-auto my-[10%] h-full max-w-md gap-2 px-4">
						<h1 className="pb-2 text-2xl">Please enter your detail !</h1>
						<label htmlFor="email">Email</label>
						<Field
							name="email"
							className={` input ${errors.email && touched.email ? 'input-error' : 'input-primary'}`}
						/>
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
							<Link href={'/createAccount'} className="link-primary link ">
								Create an account
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};

export default Login;

// const errorText=()=>(
//     <div className=''></div>
// )
