import * as yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TextError from "../../components/Common/TextError";
import React from "react";
import {Button, Card, Container, FormControlLabel, Icon} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Checkbox, TextField} from 'formik-material-ui';
import s from './SignInPage.module.scss'
import Preloader from "../../components/Preloader";
import {Redirect} from "react-router-dom";

const SignInPage = ({captchaUrl, isAuth, login, isButtonDisabled}) => {
    const [checked, setChecked] = React.useState(false);

    let initialValues = {email: '', password: '', captcha: '', toggle: true, address: ''}

    const onSubmit = values => {
        login(values)
    }

    if (isAuth) {
        return <Redirect  to={"/profile"}/>
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



    return <Container
        component="main"
        maxWidth="xs"
        className={s.test}
    >
        <Card className={s.formWrapper}>
            <Typography component="h1" align="center" variant="h5">
                Sign in
            </Typography>
            {isButtonDisabled && <Preloader/>}

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Field
                        fullWidth
                        component={TextField}
                        margin="dense"
                        type="email"
                        name="email"
                        placeholder="email"
                        label="Email"
                        variant="outlined"

                    />
                    <Field
                        fullWidth
                        component={TextField}
                        margin="dense"
                        type="password"
                        name="password"
                        placeholder="password"
                        label="Password"
                        variant="outlined"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Field
                            component={Checkbox}
                            type={"checkbox"}
                            checked={checked}
                            color="primary"
                            onChange={() => setChecked(!checked)}
                        />}
                        label="Запомнить пароль"
                        labelPlacement="start"
                    />

                    {captchaUrl && <img src={captchaUrl} alt="img"/>}
                    {captchaUrl && <div>
                        <Field type="text" name="captcha" placeholder="captcha"/>
                        <ErrorMessage name="captcha" component={TextError}/>
                    </div>}


                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        margin="dense"

                        disabled={isButtonDisabled}
                        endIcon={<Icon>send</Icon>}
                    >
                        Login
                    </Button>
                </Form>
            </Formik>
        </Card>
    </Container>
}

export default SignInPage