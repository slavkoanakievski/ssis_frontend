import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useHistory, useParams} from "react-router-dom";
import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useEffect} from "react";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {LinearProgress, Link} from "@material-ui/core";
import etl from '../img/etl.jpg';
import FiberNewIcon from '@mui/icons-material/FiberNew';

function HomeView() {
    const classes = useStyles(coursesViewStyle);
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <MenuTopBar active={'Home'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container justify-content-center'} style={{marginTop: '80px'}}>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <div className={'card align-items-center'} style={{width: '21rem', backgroundColor: 'rgba(240,230,200)'}}>
                                    <div className={'card-body'}>
                                        <h5 className={'card-title text-center'}><CircleIcon  sx={{color: 'rgba(100,149,237)', fontSize: '22px, paddingRight: 5px'}}/>Вкупно студенти</h5>
                                        <p className={'card-text text-center'} style={{fontSize: '28px'}}><ArrowCircleUpIcon  sx={{color: 'rgba(34,139,34)', fontSize: '35px', marginRight: '5px', marginBottom: '7px'}}/><b>3000+</b></p>
                                        <LinearProgress variant="determinate" value={30} />
                                        <p>30% раст во последната година</p>
                                    </div>

                             </div>
                            </div>
                        <div className={'col-4'}>
                            <div className={'card align-items-center'} style={{width: '21rem', backgroundColor: 'rgba(221,215,215)' }}>
                                <div className={'card-body'}>
                                    <h5 className={'card-title text-center'}><CircleIcon  sx={{color: 'rgba(100,149,237)', fontSize: '22px, paddingRight: 5px'}}/>Нови студенти</h5>
                                    <p className={'card-text text-center'} style={{fontSize: '28px'}}><ArrowCircleUpIcon  sx={{color: 'rgba(34,139,34)', fontSize: '35px', marginRight: '5px', marginBottom: '7px'}}/><b>230</b></p>
                                    <LinearProgress variant="determinate" value={70} />
                                    <p>70% раст во последниот месец</p>
                                </div>


                            </div>
                        </div>
                        <div className={'col-4'}>
                            <div className={'card align-items-center'} style={{width: '21rem', backgroundColor: 'rgba(240,230,200)'}}>
                                <div className={'card-body'}>
                                    <h5 className={'card-title text-center'}><CircleIcon  sx={{color: 'rgba(100,149,237)', fontSize: '22px, paddingRight: 5px'}}/>Број на курсеви</h5>
                                    <p className={'card-text text-center'} style={{fontSize: '28px'}}><ArrowCircleUpIcon  sx={{color: 'rgba(34,139,34)', fontSize: '35px', marginRight: '5px', marginBottom: '7px'}}/><b>6</b></p>
                                    <LinearProgress variant="determinate" value={100} />
                                    <p>2 нови курса следниот месец</p>
                                </div>

                            </div>
                        </div>
                        </div>

                    <div className={'row mt-5'} style={{ backgroundColor: 'rgba(255,255,255)', borderRadius: '15px', width: '95%', height: '320px'}}>
                        <div className={'col-8'}>
                            <FiberNewIcon style={{fontSize: '70px', color: 'rgba(34,139,34)'}}/>

                            <h4 className={'text-center'} style={{marginTop: '10px'}}>Сакаш да го збогатиш твоето знаење во областа на ETL процес и обработка на податоци?</h4>
                            <h3 className={'text-center '} >Новиот курс е веќе достапен! </h3>
                            <h3 className={'text-center'}>
                                <Link href="/courses" underline="hover" style={{color: 'rgba(100,149,237)'}}>
                                    {'Кликни овде за повеќе детали!'}
                                </Link>
                            </h3>


                        </div>

                        <div className={'col-4'}>
                            <img src={etl} style={{height: 300, width: 300}} className="d-inline-block align-top" alt=""/>
                        </div>

                    </div>
                    </div>
                </div>
        </>
    )
}
export default HomeView;