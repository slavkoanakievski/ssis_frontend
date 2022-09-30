import logo from '../img/ssis_logo.jpg';
import * as yup from "yup";
import {useEffect, useState} from "react";
import {FormikProvider, useFormik} from "formik";
import {useHistory, useParams} from "react-router-dom";
import {coursesAction} from "../redux/action/coursesAction";

import {useDispatch} from "react-redux";
import {Button, Checkbox, TextField} from "@mui/material";
import {useStyles} from "../factory/StyleFactory";
import {loginStyle} from "./style/LoginStyle";

const validationSchema = yup.object({
    username: yup.string("Корисничкото име е задолжително!").required("Корисничкото име е задолжително!"),
    password: yup.string("Лозинката е задолжителна").required("Лозинката е задолжителна"),
});
function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(loginStyle);
    const success = useParams();

    useEffect(() => {
        window.scroll(0,0)
        formik.setValues({
            ...formik.values,
            name: '',
            description: '',
            url: ''
        })
        formik.setTouched({
            name: false,
            description: false,
            url: false
        })
        dispatch(coursesAction.fetchCourses());
    }, []);

    const initialValues = {
        username: '' ,
        password: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
            history.push("/home");
        }
    });


    return (
        <>
            <div className={'container p-1 mt-1 d-flex justify-content-center'}>
                <div className={`row bg-white position-relative justify-content-center`} style={{height: '600px', width: '800px'}}>

                    <div className={'col-8 mt-5 justify-content-center '}>
                        <p className={'text-center'} style={{color: 'rgb(100,149,237)', fontSize: '34px', marginBottom:'-5px'}}>Систем за изучување на Microsoft SSIS алатката</p>
                        <FormikProvider value={formik} >
                            <form onSubmit={formik.handleSubmit}>
                                <div style={{marginTop: '20px'}}>
                                    <TextField id="username"
                                               name="username"
                                               className={classes.inputField}
                                               label="Корисничко име *"
                                               value={formik.values.username}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}
                                               error={formik.touched.username && Boolean(formik.errors.username)}
                                               fullWidth={true}
                                               margin={"normal"}
                                               placeholder="Ве молиме внесете корисничко име..."/>
                                    {formik.touched.username && Boolean(formik.errors.username) ? (
                                        <span className={`${classes.errorText}`}>{formik.errors.username}</span>): null }
                                </div>
                                <div>
                                    <TextField id="password"
                                               name="password"
                                               className={classes.inputField}
                                               label="Лозинка *"
                                               value={formik.values.password}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}
                                               error={formik.touched.password && Boolean(formik.errors.password)}
                                               fullWidth={true}
                                               margin={"normal"}
                                               type={'password'}
                                               placeholder="Ве молиме внесете лозинка..."/>
                                    {formik.touched.password && Boolean(formik.errors.password) ? (
                                        <span className={`${classes.errorText}`}>{formik.errors.password}</span>): null }
                                </div>
                                <div className={'row mt-2'}>
                                    <div className={'col-4'}>
                                        <Checkbox size="medium"

                                                  sx={{
                                                      marginTop: '-5px',
                                                      marginLeft: '-5px',
                                                      color: '#939393',
                                                      '&.Mui-checked': {
                                                          color: 'rgb(100,149,237)',
                                                      },
                                                  }}/>
                                        <span className={'mt-1'}>Зачувај ме!</span>
                                    </div>
                                </div>
                                <div className={'row'} style={{marginRight:'2px', marginTop:'42px'}}>
                                    <div className={'d-flex justify-content-center'}>
                                        <p> <a style={{color: 'rgb(100,149,237)', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => history.push("/register")}>Регистрирај се!</a></p>
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
                                        Најави се!
                                    </Button>
                                </div>
                            </form>
                        </FormikProvider>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;