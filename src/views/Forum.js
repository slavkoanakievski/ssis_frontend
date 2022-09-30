import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useHistory, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import MenuTopBar from "./components/pageElements/MenuTopBar";
import {IconButton} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ForumAddQuestion from "./modal/ForumAddQuestion";

function Forum() {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.course.questions);
    const classes = useStyles(coursesViewStyle);
    const history = useHistory();
    const [openModalForum, setOpenModalForum] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursesAction.fetchQuestions());
    }, []);

    const openModalForumQuestionSubmit = () => {
        setOpenModalForum(true)
    }
    const closeModalForumQuestionSubmit = () => {
        setOpenModalForum(false)
    }

    const addQuestionInForum = (values) => {
        dispatch(coursesAction.addQuestion(values));
    }

    return (
        <>
            <MenuTopBar active={'Forum'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container'} style={{marginTop: '80px', backgroundColor: 'white'}}>
                    <div className={'mb-2'}>
                        <div className={'row'}>
                            <div className={'col-6 d-flex justify-content-start'}>
                                <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                                    <KeyboardBackspaceIcon fontSize={'big'}  onClick={() => history.goBack()}/>
                                </IconButton>
                            </div>
                            <div className={'col-6 mt-3 d-flex ml-auto justify-content-end'}>
                                 <span className={'btn btn-success btn-lg'} style={{fontSize: '19px', backgroundColor: 'rgba(100,149,237)'}}
                                       onClick={() => openModalForumQuestionSubmit()}>
                                     Постави прашање!
                                 </span>
                            </div>

                        </div>

                    </div>
                    <div className={'row'}>
                        <h3>Форум за прашања, одговори и дополнителни материјали!</h3>
                    </div>
                    {questions && questions.map((question,index)=>{
                        return(
                            <div className={'row'}>
                                <ul style={{listStyle: 'none'}}>
                                    <span style={{fontSize: '25px'}}>{index+1}. {question.questionForumText} <span style={{fontSize: '18px'}}><i>{question.formattedDatePosted}</i></span></span>
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
                <div className={'row'}>



                </div>
            </div>

            <ForumAddQuestion show={openModalForum} closeModal={closeModalForumQuestionSubmit} addQuestionInForum={addQuestionInForum}/>
        </>
    )
}
export default Forum;