import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useHistory} from "react-router-dom";
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import BookmarksTwoToneIcon from '@mui/icons-material/BookmarksTwoTone';
import StairsTwoToneIcon from '@mui/icons-material/StairsTwoTone';
import {Chip} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import {IconButton, LinearProgress} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function CoursesView() {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.course.courses);
    const classes = useStyles(coursesViewStyle);
    const history = useHistory();


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursesAction.fetchCourses());
    }, []);

    return (
        <>
            <MenuTopBar active={'Courses'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container'} style={{marginTop: '80px'}}>
                    <div className={'mb-2'}>
                        <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}} onClick={() => history.goBack()}>
                            <KeyboardBackspaceIcon fontSize={'big'}  />
                        </IconButton>
                    </div>
                    <span className={'row mb-4'}>
                        <span>
                            <LocalLibraryTwoToneIcon
                                sx={{color: 'rgba(112,128,144)', fontSize: '60px', marginBottom: '18px'}}/>
                            <span style={{
                                fontSize: '35px',
                                color: 'rgba(112,128,144)',
                                marginLeft: '10px'
                            }}><b>Курсеви</b></span>
                        </span>
                         <hr style={{width: '1200px'}}/>

                    </span>
                    {courses.map((course, index) => {
                        return(
                    <div className={'row align-items-center'} style={{
                        backgroundColor: 'rgba(255,255,255)',
                        height: '80px',
                        cursor: 'pointer',
                        width: '95%',
                        borderRadius: '15px',
                        marginTop:'25px',
                        border: '1px solid black'
                    }}>

                        <div className={'col-3'}>

                                <BookmarksTwoToneIcon
                                    sx={{color: 'rgba(112,128,144)', fontSize: '40px'}}/>
                                <span  style={{fontSize: '15px', color: 'rgba(112,128,144)'}}><b>{index+1}. {course.title}</b> </span>
                        </div>
                        <div className={'col-2'}>
                                <StairsTwoToneIcon
                                    sx={{color: 'rgba(112,128,144)', fontSize: '30px'}}/>
                                <Chip size={'small'} label={<b><u>Ниво: {course.level}</u></b>}
                                      sx={{color: 'rgba(112,128,144)', fontSize: '13px'}}/>
                        </div>
                        <div className={'col-2'}>
                                <AccessTimeIcon
                                    sx={{color: 'rgba(112,128,144)', fontSize: '30px'}}/>
                                <Chip size={'small'} label={<b><u>{course.duration}</u></b>}
                                      sx={{color: 'rgba(112,128,144)', fontSize: '15px'}}/>
                        </div>
                            <div className={'col-3'}>
                                <ClassTwoToneIcon
                                    sx={{color: 'rgba(112,128,144)', fontSize: '30px', marginLeft: '5px'}}/>
                                <Chip size={'small'} label={<b><u>Категорија: {course.category}</u></b>}
                                      sx={{color: 'rgba(112,128,144)', fontSize: '13px'}}/>
                            </div>
                        <div className={'col-2'}>
                                <span className={'btn btn-success'} style={{fontSize: '12px', backgroundColor: 'rgba(100,149,237)'}}
                                onClick={() => history.push("/courses/" + course.id)}>Започни со учење</span>
                        </div>


                    </div>


                        )
                        })}
                </div>
            </div>
        </>
)
}
export default CoursesView;