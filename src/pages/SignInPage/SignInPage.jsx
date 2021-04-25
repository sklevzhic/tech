import * as yup from "yup";
// import {Redirect} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TextError from "../../components/Common/TextError";
import React from "react";
import {Button, Card, CardMedia, Container, Grid, Icon, TextField} from "@material-ui/core";
import useStyles from './SignInPage.css'

const SignInPage = ({captchaUrl, isAuth, login, isButtonActive, buttonActivitySwitch}) => {
    const classes = useStyles()

    let initialValues = {email: '', password: '', captcha: '', toggle: true, address: ''}

    const onSubmit = values => {
        login(values)
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

    // if (props.isAuth) {
    //     return <Redirect to="/profile"/>
    // }


    return <Card>
                <CardMedia
                    className={classes.heightImage}
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Field fullWidth type="email" name="email" placeholder="email"/>
                    <ErrorMessage name="email" component={TextError}/>
                    <Field  fullWidth type="password" name="password" placeholder="password"/>
                    <ErrorMessage name="password" component={TextError}/>
                    <Field  type="checkbox" name="toggle"/>
                    {captchaUrl && <img src={captchaUrl}/>}
                    {captchaUrl && <div>
                        <Field type="text" name="captcha" placeholder="captcha"/>
                        <ErrorMessage name="captcha" component={TextError}/>
                    </div>}


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isButtonActive}
                        endIcon={<Icon>send</Icon>}
                    >
                        Login
                    </Button>
                </Form>
            </Formik>
            </Card>
}

export default SignInPage