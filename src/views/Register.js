import * as yup from "yup";
import {FormikProvider, useFormik} from "formik";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {useStyles} from "../factory/StyleFactory";
import {loginStyle} from "./style/LoginStyle";
import {useEffect} from "react";


const validationSchema = yup.object({
    name: yup.string("Името е задолжително").required("Името е задолжително"),
    surname: yup.string("Презимето е задолжително").required("Презимето е задолжително"),
    username: yup.string("Корисничкото име е задолжително").required("Корисничкото име е задолжително"),
    email: yup.string("Внеси валидна емаил адреса").required("Емаилот е задолжителен").email("Внеси валидна емаил адреса"),
    password: yup.string("Лозинката е задолжителна").required("Лозинката е задолжителна"),
    repeatPassword: yup.string("„Повтори ја лозинката“ ").required("Повтори ја лозинката").oneOf([yup.ref('password'), null], 'Лозинките мора да се исти!')
});
function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(loginStyle);

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    const initialValues = {
        name: '' ,
        surname: '' ,
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
            history.push("/login");
        }
    });


    return (
        <div className={'container p-5 mt-3 d-flex'}>
            <div className={`container p-3 m-auto`} style={{backgroundColor: 'rgba(255,255,255)' , height: '620px'}}>
                <div className={`row mt-3`} >
                    <div className={'col-1'}>

                    </div>

                    <div className={'col-10'}>
                        <p className={'text-center mb-2'} style={{color: 'rgb(100,149,237)', fontSize: '40px', marginBottom:'-5px'}}>Креирај акаунт</p>
                        <FormikProvider value={formik}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className={'row'}>
                                    <div className={'col-6'}>
                                        <div>
                                            <TextField id="name"
                                                       name="name"
                                                       className={classes.inputField}
                                                       label="Име *"
                                                       value={formik.values.name}
                                                       onBlur={formik.handleBlur}
                                                       onChange={formik.handleChange}
                                                       error={formik.touched.name && Boolean(formik.errors.name)}
                                                       fullWidth={true}
                                                       margin={"normal"}
                                                       placeholder="Внеси име..."/>
                                            {formik.touched.name && Boolean(formik.errors.name) ? (
                                                <span className={`${classes.errorText}`}>{formik.errors.name}</span>): null }
                                        </div>
                                    </div>
                                    <div className={'col-6'}>
                                        <div>
                                            <TextField id="surname"
                                                       name="surname"
                                                       className={classes.inputField}
                                                       label="Презиме *"
                                                       value={formik.values.surname}
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       error={formik.touched.surname && Boolean(formik.errors.surname)}
                                                       fullWidth={true}
                                                       margin={"normal"}
                                                       placeholder="Внеси презиме..."/>
                                            {formik.touched.surname && Boolean(formik.errors.surname) ? (
                                                <span className={`${classes.errorText}`}>{formik.errors.surname}</span>): null }
                                        </div>
                                    </div>

                                </div>

                                <div className={'row'}>
                                    <div className={'col-6'}>
                                        <TextField id="username"
                                                   name="username"
                                                   className={classes.inputField}
                                                   label="Корисничко име *"
                                                   value={formik.values.username}
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   error={formik.touched.username && Boolean(formik.errors.username)}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   placeholder="Внеси корисничко име..."/>
                                        {formik.touched.username && Boolean(formik.errors.username) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.username}</span>): null }
                                    </div>
                                    <div className={'col-6'}>
                                        <TextField id="email"
                                                   name="email"
                                                   className={classes.inputField}
                                                   label="Емаил *"
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.email}
                                                   onChange={formik.handleChange}
                                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   placeholder="Внеси емаил..."/>
                                        {formik.touched.email && Boolean(formik.errors.email) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.email}</span>): null }
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-6'}>
                                        <TextField id="password"
                                                   name="password"
                                                   className={classes.inputField}
                                                   label="Лозинка *"
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.password}
                                                   onChange={formik.handleChange}
                                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   type={'password'}
                                                   placeholder="Внеси лозинка..."/>
                                        {formik.touched.password && Boolean(formik.errors.password) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.password}</span>): null }
                                    </div>
                                    <div className={'col-6'}>
                                        <TextField id="repeatPassword"
                                                   name="repeatPassword"
                                                   className={classes.inputField}
                                                   label="Внеси ја повторно лозинката *"
                                                   value={formik.values.repeatPassword}
                                                   onChange={formik.handleChange}
                                                   error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                                                   onBlur={formik.handleBlur}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   type={'password'}
                                                   placeholder="Внеси лозинка..."/>
                                        {formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.repeatPassword}</span>): null }
                                    </div>
                                </div>
                                <div className={'row'} style={{marginRight:'5px', marginTop:'10px', marginLeft:'4px'}}>
                                    <div className={'d-flex justify-content-center'}>
                                        <p>  <a style={{color: 'rgb(100,149,237)', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => history.push("/login")}>Најави се!</a></p>
                                    </div>
                                    <Button sx={{borderColor: 'rgb(100,149,237)',
                                        backgroundColor: 'rgb(100,149,237)',
                                        marginTop: '8px',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        height: '50px',
                                        '&:hover': {
                                            backgroundColor: 'rgb(100,149,237)',
                                            border: ' 10px solid rgb(100,149,237)',
                                            boxShadow: 'none',
                                        }}}
                                            fullWidth={true}
                                            type={'submit'}>
                                        Регистрирај се!
                                    </Button>
                                </div>

                            </form>
                        </FormikProvider>

                    </div>
                    <div className={'col-1'}>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Register;