import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {Redirect} from "react-router-dom"
import * as yup from 'yup';
import {connect} from "react-redux";
import TextError from "../../Common/TextError";

class Login extends React.Component {
    render() {
        let initialValues = {email: '', password: '', toggle: true, address: ''}

        const onSubmit = values => {
            this.props.login(values)
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

        if (this.props.isAuth) {
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
                    {/*<Field type="address" name="address">{*/}
                    {/*    (props) => {*/}
                    {/*        const {fields, form, meta} = props*/}
                    {/*        return <input type="text" {...fields}/>*/}
                    {/*    }*/}
                    {/*}</Field>*/}
                    {/*<ErrorMessage name="address" component={TextError}/>*/}

                    <button type="submit">
                        Submit
                    </button>
                </Form>
        </Formik>
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps)(Login);

