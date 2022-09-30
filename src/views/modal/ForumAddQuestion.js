import Modal from "react-bootstrap/Modal";
import {TextField} from "@mui/material";
import {useStyles} from "../../factory/StyleFactory";
import {loginStyle} from "../style/LoginStyle";
import {useEffect, useState} from "react";
import {FormikProvider, useFormik} from "formik";
import * as yup from "yup";
import {coursesAction} from "../../redux/action/coursesAction";








const validationSchema = yup.object({
    questionText: yup.string("Текст на прашањето е задолжително!").required("Текст на прашањето е задолжително!"),
});
function ForumAddQuestion({show, closeModal, addQuestionInForum}) {

    const classes = useStyles(loginStyle);

    useEffect(() => {
        formik.setValues({
            ...formik.values,
            questionText: ''
        })
        formik.setTouched({
            questionText: false
        })
    }, [show]);


    const initialValues = {
        questionText: ''
    }


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
            addQuestionInForum(values)
            closeModal()
        }
    });



    return (
        <>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                centered={false}
            >
                <Modal.Header>
                    <div className='container'>
                        <div className='row'>
                            <div className="col text-center">
                                <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>
                                    Додади прашање во форумот
                                </h5>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <FormikProvider value={formik} >
                    <form onSubmit={formik.handleSubmit}>
                        <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                            <TextField
                                id="questionText"
                                name="questionText"
                                className={classes.inputField}
                                label="Прашање *"
                                value={formik.values.questionText}
                                multiline={true}
                                rows={5}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.questionText && Boolean(formik.errors.questionText)}
                                fullWidth={true}
                                margin={"normal"}
                                placeholder="Ве молиме внесете текст на прашањето..."/>
                            {formik.touched.questionText && Boolean(formik.errors.questionText) ? (
                                <span className={`${classes.errorText}`}>{formik.errors.questionText}</span>): null }
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-white" onClick={closeModal}>Затвори</button>
                            <button type="submit" className="btn btn-success">Додади</button>
                        </Modal.Footer>
                    </form>
                </FormikProvider>
            </Modal>
        </>



    )
}
export default ForumAddQuestion;