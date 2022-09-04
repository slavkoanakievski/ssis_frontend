import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import AllRoutes from "../auth/AllRoutesConfig";
import {Button, IconButton} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function QuizDetailsView() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const quiz = useSelector(state => state.course.quiz);
    const history = useHistory();
    const classes = useStyles(coursesViewStyle);


    useEffect(() => {
        window.scrollTo(0, 0);
        if(Boolean(id)) {
            dispatch(coursesAction.fetchQuiz(id));
        }
    }, [])


    return (
        <div className={'container p-5 mt-3'}>

            <div className={'mb-2'}>
                <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                    <KeyboardBackspaceIcon fontSize={'big'}  onClick={() => history.goBack()}/>
                </IconButton>
            </div>
            <div className={`container p-3`} style={{backgroundColor: 'rgba(255,255,255)' , height: '700px'}}>

                <div className={`row`} >
                    <div className={'col-4'} style={{fontSize: '14px'}}>
                        <div className={`row ${classes.border} d-flex`} style={{height: '30%'}}>
                            <div className={'col-6 m-auto'}>
                                Датум на креирање:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {quiz.formattedDateCreated}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '30%'}}>
                            <div className={'col-6 m-auto'}>
                                Категорија:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {quiz.category}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '30%'}}>
                            <div className={'col-6 m-auto'}>
                                Времетраење:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {quiz.duration}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`}>
                            <div>
                                Информации за квизот:
                                <br/>
                                <br/>
                                <span style={{color: 'rgba(0,0,0,.55)'}}>
                                    {quiz.description}
                                </span>
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '18%'}}>
                            <div className={'col-6 m-auto'}>
                                Ниво:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}} >
                                {quiz.level}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '18%'}}>
                            <div className={'col-6 m-auto'}>
                                Код на квизот:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}} >
                                {quiz.code}
                            </div>
                        </div>

                    </div>
                    <div className={'col-8 '} style={{height: '100%'}}>
                        <div className={'row'}>
                            <div className={'col-7 mt-2'}>
                                <span className={'font-weight-bold w-100 p-2'}
                                      style={{color: 'rgba(100,149,237)', fontWeight: 'bold', fontSize: '20px'}}>{quiz.title}
                                </span>
                            </div>
                            <div className={'col-5 d-flex justify-content-end mb-2'}>
                                <a href={'#'} className={'btn btn-lg'} style={{backgroundColor:'rgba(100,149,237)', color:'white'}}>Тестирај го твоето знаење!</a>

                            </div>
                        </div>
                        <div className={'row p-2'}>
                            <br/>
                            <br/>
                            <div style={{
                                textAlign: 'justify',
                                overflow: 'hidden',
                                color: 'rgba(0,0,0,.55)'
                            }}>
                                <h4>Опис на квизот: </h4>
                                {quiz.typeOfQuestionsExplain}
                            </div>
                        </div>
                        <div className={'row p-2 justify-content-center'}>
                            <QuestionAnswerIcon sx={{color:'rgba(0,0,0,.55)',
                            fontSize: '200px'}}/>
                            <QuestionMarkIcon sx={{color:'rgba(0,0,0,.55)',
                                fontSize: '200px'}}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default QuizDetailsView;