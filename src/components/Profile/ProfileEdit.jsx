import React from "react";
import * as yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TextError from "../Common/TextError";
import {TextField} from "formik-material-ui";

const ProfileEdit = ({user, toogleMode, updateUserInfo}) => {
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

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        <Form>
            <Field component={TextField} fullWidth type="text"  label="fullName" variant="outlined" name="fullName" placeholder="fullName"/>
            <ErrorMessage name="fullName" component={TextError}/>

            <Field component={TextField} fullWidth type="text" label="lookingForAJob" variant="outlined" name="lookingForAJob" placeholder="lookingForAJob"/>
            <ErrorMessage name="lookingForAJob" component={TextError}/>

            <Field component={TextField} fullWidth type="text" label="lookingForAJobDescription" variant="outlined" name="lookingForAJobDescription" placeholder="lookingForAJobDescription"/>
            <ErrorMessage name="lookingForAJobDescription" component={TextError}/>

            <Field component={TextField} fullWidth type="text" label="aboutMe" variant="outlined" name="aboutMe" placeholder="fullName"/>
            <ErrorMessage name="aboutMe" component={TextError}/>

            <div>
                <p>Контакты</p>
                {
                    Object.keys(initialValues.contacts).map(key => {
                        return <div key={key}>
                            <Field fullWidth component={TextField} type="text" name={`contacts.${key}`} placeholder={key}/>
                            <ErrorMessage name={`contacts.${key}`} component={TextError}/>
                        </div>
                    })
                }
            </div>

            <button type="submit">
                Submit
            </button>
        </Form>
    </Formik>
}

export default ProfileEdit
