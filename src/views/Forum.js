import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import MenuTopBar from "./components/pageElements/MenuTopBar";
import {IconButton} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Forum() {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.course.questions);
    const classes = useStyles(coursesViewStyle);
    const history = useHistory();


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursesAction.fetchQuestions());
    }, []);

    return (
        <>
            <MenuTopBar active={'Forum'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container'} style={{marginTop: '80px', backgroundColor: 'white'}}>
                    <div className={'mb-2'}>
                        <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                            <KeyboardBackspaceIcon fontSize={'big'}  onClick={() => history.goBack()}/>
                        </IconButton>
                    </div>
                    <div className={'row'}>
                        <h3>Форум за прашања, одговори и дополнителни материјали!</h3>
                    </div>
                        {questions && questions.map((question,index)=>{
                            return(
                                <div className={'row'}>
                                    <ul style={{listStyle: 'none'}}>
                                        <span style={{fontSize: '25px'}}>{index+1}. {question.questionForumText}</span>
                                        {question.answers.map((answer, i)=>{
                                            return(
                                                <div style={{marginLeft: '40px'}}>
                                                    <p>Одговори: </p>
                                                <li >{answer.split("--")[0]}</li>
                                            <br/>
                                                    <li >{answer.split("--")[1]}</li>
                                                    <li >{answer.split("--")[2]}</li>
                                                </div>
                                            )
                                            }
                                        )}
                                    </ul>

                                </div>
                            )
                        })}

                </div>
            </div>
        </>
    )
    }
    export default Forum;