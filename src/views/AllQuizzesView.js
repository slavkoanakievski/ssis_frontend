import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useEffect, useState} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import QuizIcon from '@mui/icons-material/Quiz';
import MenuTopBar from "./components/pageElements/MenuTopBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Chip} from "@mui/material";
import {IconButton} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ResultsReviewModal from "./modal/ResultsReviewModal";



function AllQuizzesView() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles(coursesViewStyle);
    const quizzes = useSelector(state => state.course.quizzes);
    const id = useParams();
    const [openResultModal, setOpenResultModal] = useState(false);
    const [result, setResult] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursesAction.fetchQuizzes());
        if(Boolean(id.id))
        {
            setOpenResultModal(true);
            setResult(id.id)
        }
    }, []);


    return (
       <>
           <MenuTopBar active={"Quiz"}/>
           <div className={`${classes.bodyStyle} p-3`}>
               <div className={'container'} style={{marginTop: '80px'}}>
                   <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}} onClick={() => history.goBack()}>
                       <KeyboardBackspaceIcon fontSize={'big'}  />
                   </IconButton>
                   <span style={{fontSize:'40px', color: 'rgba(100,149,237)'}}>Квизови</span>
               <div className={'row justify-content-around '}>
           {quizzes && quizzes.map((quiz)=>
               {
                   return(

                           <div className={'col-4'}>
                               <div className={'card text-center align-items-center'} style={{width: '20rem', marginBottom: '20px'}}>
                                   <QuizIcon sx={{color: 'rgba(112,128,144)', fontSize: '150px'}}/>
                                       <div className={'card-body '}>
                                           <h5 className={'card-title'}>{quiz.title}</h5>
                                           <p className={'card-text'}>
                                               <AccessTimeIcon
                                                   sx={{color: 'rgba(112,128,144)', fontSize: '30px'}}/>
                                               <Chip size={'small'} label={<b><u>{quiz.duration}</u></b>}
                                                     sx={{color: 'rgba(112,128,144)', fontSize: '15px'}}/>
                                           </p>
                                           <span href="/quizDetailsView" className="btn btn-primary" style={{backgroundColor: 'rgba(100,149,237)'}} onClick={() => history.push("/quizzes/" + quiz.id)}>Реши го квизот!</span>
                                       </div>
                               </div>
                           </div>

                   )
               }
           )}
               </div>
               </div>
           </div>
           <ResultsReviewModal show={openResultModal} results={result} />
       </>
    )
}
export default AllQuizzesView;
