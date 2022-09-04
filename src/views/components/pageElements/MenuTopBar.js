import logo from '../../../img/ssis_logo.jpg';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import {IconButton} from "@mui/material";
import {useStyles} from "../../../factory/StyleFactory";
import {menuTopBarStyle} from "./style/MenuTopBarStyle";
import {Link} from "react-router-dom";

function MenuTopBar({active}) {
    const classes = useStyles(menuTopBarStyle);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 position-fixed w-100" style={{zIndex: '900'}}>
                <Link to={"/home"} className="navbar-brand m-0">
                    <img src={logo} style={{height: 50, width: 50}} className="d-inline-block align-top" alt=""/>
                </Link>
                <Link to={"/courses"} className={`${classes.mainColorText} ${classes.mainFont} ${classes.hoverStyleLogo} nav-link`} style={{fontSize: 18}}><span className={`${classes.mainColorText}`}>Систем за учење на <b>Microsoft SSIS </b></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
                </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarText">
                <ul className={`${classes.menuItemHover} navbar-nav d-flex justify-content-around w-100`}>
                    <li className="nav-item">
                        <Link to={'/home'}
                              className={active === 'Home' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Почетна
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/courses'}
                              className={active === 'Courses' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Курсеви
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/forum'}
                              className={active === 'Exam' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Форум
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/quizzes'}
                              className={active === 'Quiz' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Квизови
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-end" id="navbarText">
                <div className="d-flex justify-content-around">
                    <IconButton size={'medium'}>
                        <NotificationsRoundedIcon color={'disabled'} fontSize={'medium'}/>
                    </IconButton>
                    <IconButton size={'medium'}>
                        <InfoRoundedIcon color={'disabled'} fontSize={'medium'}/>
                    </IconButton>
                    <IconButton size={'medium'}>
                        <PersonOutlineRoundedIcon color={'disabled'} fontSize={'medium'}/>
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}
export default MenuTopBar;