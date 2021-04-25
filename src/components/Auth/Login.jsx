import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Redirect} from "react-router-dom"
import * as yup from 'yup';
import TextError from "../Common/TextError";

const Login = (props) => {
    let initialValues = {email: '', password: '',captcha:'', toggle: true, address: ''}

    const onSubmit = values => {
        props.login(values)
    }

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }


    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        <Form>
            <Field type="email" name="email" placeholder="email"/>
            <ErrorMessage name="email" component={TextError}/>
            <Field type="password" name="password" placeholder="password"/>
            <ErrorMessage name="password" component={TextError}/>
            <Field type="checkbox" name="toggle"/>
            {props.captcha && <img alt="dfd" src={props.captcha}/>}
            {props.captcha && <div>
                <Field type="text" name="captcha" placeholder="captcha"/>
                <ErrorMessage name="captcha" component={TextError}/>
            </div>}

            <button type="submit">
                Submit
            </button>
        </Form>
    </Formik>
}

export default Login;

