import React from "react";
import * as yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TextError from "../Common/TextError";
import {Select, TextField} from "formik-material-ui";
import {Button, FormControl, Grid, InputAdornment, MenuItem} from "@material-ui/core";
import icons from "../global/global";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const ProfileEdit = ({user, toogleMode, updateUserInfo, isUpdateProfile}) => {
    // const classes = useStyles()
    let initialValues = {
        aboutMe: user.aboutMe,
        lookingForAJob: user.lookingForAJob,
        lookingForAJobDescription: user.lookingForAJobDescription,
        fullName: user.fullName,
        contacts: {
            facebook: user.contacts.facebook,
            github: user.contacts.github,
            instagram: user.contacts.instagram,
            mainLink: user.contacts.mainLink,
            twitter: user.contacts.twitter,
            vk: user.contacts.vk,
            website: user.contacts.website,
            youtube: user.contacts.youtube,
        }
    }

    const onSubmit = values => {
        updateUserInfo(values)
        toogleMode()
    }

    const validationSchema = yup.object({
        aboutMe: yup
            .string('Enter your email'),
        fullName: yup
            .string('Enter your fullName'),
        lookingForAJob: yup
            .string('Enter your password'),
        lookingForAJobDescription: yup
            .string('Enter your password'),

    });

    return <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <Field component={TextField} margin="dense" fullWidth type="text" label="ФИО" variant="outlined"
                       name="fullName"
                       placeholder="ФИО"/>
                <ErrorMessage name="fullName" component={TextError}/>


                <Field variant="outlined" margin="dense" as="select" name="lookingForAJob" component={Select}>
                    <MenuItem value={true}>Да</MenuItem>
                    <MenuItem value={false}>Нет</MenuItem>
                </Field>

                <Field component={TextField} margin="dense" fullWidth type="text" label="Комментарий" variant="outlined"
                       name="lookingForAJobDescription" placeholder="Комментарий"/>
                <ErrorMessage name="lookingForAJobDescription" component={TextError}/>

                <Field component={TextField} margin="dense" fullWidth type="text" label="О себе" variant="outlined"
                       name="aboutMe"
                       placeholder="fullName"/>
                <ErrorMessage name="aboutMe" component={TextError}/>

                <div>
                    <p>Контакты</p>
                    {
                        Object.keys(initialValues.contacts).map(key => {
                            let Icon = icons[key]
                            return <div key={key}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <Icon/>
                                    </Grid>
                                    <Grid item>
                                        <Field fullWidth variant="outlined" margin="dense" component={TextField}
                                               type="text"
                                               name={`contacts.${key}`}
                                               placeholder={key}/>
                                        <ErrorMessage name={`contacts.${key}`} component={TextError}/>
                                    </Grid>
                                </Grid>
                            </div>
                        })
                    }
                </div>
                <Button variant="contained"
                        color="primary" type="submit">Отправить </Button>

            </Form>
        </Formik>
    </>
}

export default ProfileEdit
