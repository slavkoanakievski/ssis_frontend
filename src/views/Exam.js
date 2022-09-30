import MenuTopBar from "./components/pageElements/MenuTopBar";
import {FormControlLabel, IconButton, Radio, RadioGroup} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {examAction} from "../redux/action/examAction";
import SubmitExam from "./modal/SubmitExam";
import {useFormik} from "formik";

function Exam() {
    const id = useParams();
    const classes = useStyles(coursesViewStyle);
    const history = useHistory();
    const dispatch = useDispatch();
    const exam  = useSelector(state => state.exam.exam);
    const answers  = useSelector(state => state.exam.answers);
    const [openSubmitExam, setOpenSubmitExam] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if(Boolean(id)) {
            dispatch(examAction.getExam(id.id));
        }
    }, []);

    const selectAnswer = (questionId, value) => {
        dispatch(examAction.changeAnswer(questionId, value));
    }

    const closeSubmitExamModal = () => {
        setOpenSubmitExam(false)
    }

    const formik = useFormik({
        enableReinitialize: true,
        onSubmit: values => {
            dispatch(examAction.finishExam(answers, exam.id, success => {
                history.push("/quizzes/result/" + Math.round(success))
                window.location.reload(false);
            }));
        }
    });

    return (
        <>
            <MenuTopBar active={'Quiz'}/>
            <div className={`${classes.bodyStyle} p-3`}>

                <div className={'container'} style={{marginTop: '80px', backgroundColor: 'white', width:'800px'}}>
                    <div className={'mb-2'}>
                        <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                            <KeyboardBackspaceIcon fontSize={'big'}  onClick={() => history.goBack()}/>
                        </IconButton>
                    </div>
                    <h3 className={'mb-5 text-center'} style={{color:'rgb(100,149,237)'}}> Проверка на знаењето преку квиз</h3>
                    <div className={'row'}>
                        {exam && exam?.questions?.map((question, i) => {
                            return (
                                <div className={'row'}>
                                    <div className={'col-2'}>

                                    </div>
                                    <div className={'col-8'} style={{
                                        textAlign: 'justify',
                                        overflow: 'hidden',
                                        color: 'rgb(100,149,237)'
                                    }}>
                                            <span style={{
                                                fontWeight: 'bold'
                                            }}>
                                                {i+1}. {question.text}
                                            </span>
                                        <div className={'p-4'} style={{
                                            textAlign: 'justify',
                                            overflow: 'hidden',
                                            color: 'rgba(0,0,0,.55)'
                                        }}>
                                            <RadioGroup id="answers" name="answers" onChange={(e) => selectAnswer(question?.id, e?.target?.value)}>
                                                {question && question?.answers?.map((answer, j) => {
                                                    return (
                                                        <div className={'row'}>
                                                            <FormControlLabel control={
                                                                <Radio sx={{
                                                                    color: 'rgb(100,149,237)',
                                                                    '&.Mui-checked': {
                                                                        color: 'rgb(100,149,237)',
                                                                    },
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgb(100,149,237)'
                                                                    },
                                                                }} size={'small'}
                                                                checked={answers?.find((ans) => ans.id === question.id).answer === j+1}/>
                                                            } value={j+1} label={<span style={{ fontSize: '14px' }}>{answer}</span>}/>
                                                        </div>
                                                    )

                                                })}
                                            </RadioGroup>


                                        </div>
                                        <hr/>
                                    </div>

                                </div>

                            )
                        })}
                    </div>
                    <div className={'text-center'}>
                    <a onClick={() => setOpenSubmitExam(true)} className={'btn btn-success btn-lg m-3'}>Заврши го тестот!</a>
                    </div>
                </div>
            </div>
            <SubmitExam show={openSubmitExam} closeModal={closeSubmitExamModal} formik={formik}/>
        </>
    )

}
export default Exam;
