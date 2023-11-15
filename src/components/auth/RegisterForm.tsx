import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import YupPassword from "yup-password";
import {passwordValid, requiredError} from "../../utils/ValidateMessages";
import style from './Form.module.scss';
import show from '../../assets/images/showPassword.png';
YupPassword(Yup);

interface MyFormValues {
    username: string,
    email: string,
    password: string,
    repPassword: string
}

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required(requiredError('имя пользователя')),
    email: Yup.string()
        .email('Введите кореектный email адрес')
        .required(requiredError('email')),
    password: Yup.string()
        .min(8, 'Слишком короткий пароль')
        .minLowercase(1, passwordValid('латинскую букву'))
        .minUppercase(1, passwordValid('заглаваную латинскую букву'))
        .minNumbers(1, passwordValid('цифру'))
        .minSymbols(1, passwordValid('символ'))
        .required(requiredError('пароль')),
    repPassword: Yup.string()
        .required(requiredError('повтор пароля'))
        .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
})

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRepPassword, setShowRepPassword] = useState<boolean>(false);

    const initialValues: MyFormValues = {
        username: '',
        email: '',
        password: '',
        repPassword: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form className={style.form}>
                    <label htmlFor="username">Имя пользователя</label>
                    <Field className={style.inputField} id="username" name="username" placeholder="Введите логин" />
                    {errors.username && touched.username
                        ? <div className={style.error}>{errors.username}</div>
                        : null}

                    <label htmlFor="email">Email</label>
                    <Field className={style.inputField} id="email" name="email" placeholder="Введите логин" />
                    {errors.email && touched.email
                        ? <div className={style.error}>{errors.email}</div>
                        : null}

                    <div className={style.passwordSettings}>
                        <label htmlFor="password">Пароль</label>
                        <img src={show} onClick={() => setShowPassword(!showPassword)} alt={show}/>
                    </div>
                    <Field type={showPassword ? 'text' : 'password'}
                        className={style.inputField} id="password" name="password" placeholder="Введите пароль"/>
                    {errors.password && touched.password
                        ? <div className={style.error}>{errors.password}</div>
                        : null}

                    <div className={style.passwordSettings}>
                        <label htmlFor="repPassword">Повторите пароль</label>
                        <img src={show} onClick={() => setShowRepPassword(!showRepPassword)} alt={show}/>
                    </div>
                    <Field type={showRepPassword ? 'text' : 'password'}
                        className={style.inputField} id="repPassword" name="repPassword" placeholder="Введите пароль" />
                    {errors.repPassword && touched.repPassword
                        ? <div className={style.error}>{errors.repPassword}</div>
                        : null}


                    <button className={style.submitButton} type="submit">Продолжить</button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;