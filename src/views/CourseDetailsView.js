import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import {useStyles} from "../factory/StyleFactory";
import {useHistory, useParams} from "react-router-dom";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {Button, IconButton} from "@material-ui/core";
import * as PropTypes from "prop-types";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function WestIcon(props) {
    return null;
}

WestIcon.propTypes = {
    onClick: PropTypes.func,
    fontSize: PropTypes.string
};

function StartIcon(props) {
    return null;
}

StartIcon.propTypes = {
    fontSize: PropTypes.string,
    sx: PropTypes.shape({color: PropTypes.string})
};

function CourseDetailsView() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const course = useSelector(state => state.course.course);
    const history = useHistory();
    const classes = useStyles(coursesViewStyle);


    useEffect(() => {
        window.scrollTo(0, 0);
        if(Boolean(id)) {
            dispatch(coursesAction.fetchCourse(id));
        }
    }, [])

    return (
        <div className={'container p-5 mt-3'}>
            <div className={'mb-2'}>
                <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                    <KeyboardBackspaceIcon fontSize={'big'}  onClick={() => history.goBack()}/>
                </IconButton>
            </div>

            <div className={`container p-3`} style={{backgroundColor: 'rgba(255,255,255)' , height: '680px'}}>
                <div className={`row`} >
                    <div className={'col-4'} style={{fontSize: '14px'}}>
                        <div className={`row ${classes.border} d-flex`} style={{height: '30%'}}>
                            <div className={'col-6 m-auto'}>
                                Датум на креирање:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.formattedDateCreated}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '30%'}}>
                            <div className={'col-6 m-auto'}>
                                Категорија:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.category}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '30%'}}>
                            <div className={'col-6 m-auto'}>
                                Запишани студенти:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.studentsEnrolled}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`}>
                            <div>
                                За курсот:
                                <br/>
                                <br/>
                                <span style={{color: 'rgba(0,0,0,.55)'}}>
                                    {course.description}
                                </span>
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '18%'}}>
                            <div className={'col-6 m-auto'}>
                                Ниво:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}} >
                                {course.level}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '19%'}}>

                            <div className={`col-6  m-auto`}>
                                <div className={'row d-flex justify-content-center m-auto'}>
                                    Лекции:
                                </div>
                                <div className={'row justify-content-center m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {course.lectures?.length}
                                </div>
                            </div>
                            <div className={`col-6 m-auto`}>
                                <div className={'row d-flex justify-content-center m-auto'}>
                                    Оценка
                                </div>
                                <div className={'row justify-content-center m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {course.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-8 '} style={{height: '100%'}}>
                        <div className={'row'}>
                            <div className={'col-6 mt-2'}>
                                <span className={'font-weight-bold w-100 p-2'}
                                      style={{color: 'rgba(100,149,237)', fontWeight: 'bold', fontSize: '20px'}}>{course.title}
                                </span>
                            </div>
                            <div className={'col-6 d-flex justify-content-end mb-2'}>
                                <Button variant="outlined"
                                        sx={{color: 'rgba(100,149,237)',
                                            borderColor: 'rgba(100,149,237)',
                                            marginTop: '8px',
                                            '&:hover': {
                                                backgroundColor: 'rgba(100,149,237)',
                                                borderColor: 'rgba(100,149,237)',
                                                boxShadow: 'none',
                                            }}}
                                        endIcon={<StartIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10)', }} />}>
                                    Започни со учење
                                </Button>
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
                                {course.description}
                            </div>
                        </div>
                        <div className={'row p-2'}>
                            {course.lectures?.map((topic, i) => {
                                return (
                                    <div className={`mb-2 ${classes.hoverMainColorBorder}`} style={{height: '60px', borderLeft: '5px solid rgba(0,0,0,.15)'}} >
                                        <div style={{color: 'rgba(0,0,0,.55)', cursor: 'pointer'}} className={'justify-content-center align-self-center mt-2'}>
                                            <span style={{fontWeight: 'bold'}}>{i+1}. {topic.split("--")[0]}</span>
                                            <br/>
                                            {topic.split("--")[1]}
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default CourseDetailsView;