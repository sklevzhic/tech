import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import TextError from "../Common/TextError";

const EditProfileContent = ({user, updateUserInfo, setEditMode}) => {
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
        console.log(values)
        updateUserInfo(values)
        setEditMode(false)
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
            <Field type="text" name="fullName" placeholder="fullName"/>
            <ErrorMessage name="fullName" component={TextError}/>

            <Field type="text" name="lookingForAJob" placeholder="lookingForAJob"/>
            <ErrorMessage name="lookingForAJob" component={TextError}/>

            <Field type="text" name="lookingForAJobDescription" placeholder="lookingForAJobDescription"/>
            <ErrorMessage name="lookingForAJobDescription" component={TextError}/>

            <Field type="text" name="aboutMe" placeholder="fullName"/>
            <ErrorMessage name="aboutMe" component={TextError}/>

            <div>
                <p>Контакты</p>
                {
                    Object.keys(initialValues.contacts).map(key => {
                        return <div>
                            <Field type="text" name={`contacts.${key}`} placeholder={key}/>
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

export default EditProfileContent





