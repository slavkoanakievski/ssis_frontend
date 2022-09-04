import MenuTopBar from "./components/pageElements/MenuTopBar";
import {FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";

function Exam() {

    const classes = useStyles(coursesViewStyle);
    const history = useHistory();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    <h3 className={'mb-5'}> Квиз прашања</h3>
                    <div className={'row'}>
                        <div className={'col-10 '}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"><b>Што претставува скратеницата ЕTL процес?</b></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"

                            >
                                <FormControlLabel value="Extract, Transform, Load" control={<Radio />} label="Extract, Transform, Load" />
                                <FormControlLabel value="Extract, Transform" control={<Radio />} label="Extract, Truncate, Load" />
                                <FormControlLabel value="Load" control={<Radio />} label="Extract, Truncate, Loading" />
                            </RadioGroup>
                        </FormControl>
                        </div>


                    </div>
                    <div className={'row'}>
                        <div className={'col-10 pt-5'}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"><b>Која копомнента се користи за спојување на табели (она што во SQL e join)?</b></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"

                                >
                                    <FormControlLabel value="Extract, Transform, Load" control={<Radio />} label="Lookup" />
                                    <FormControlLabel value="Extract, Transform" control={<Radio />} label="Derived Column" />
                                    <FormControlLabel value="Load" control={<Radio />} label="Data flow" />
                                    <FormControlLabel value="asd" control={<Radio />} label="Conditional Split" />
                                </RadioGroup>
                            </FormControl>
                        </div>


                    </div>
                    <div className={'row'}>
                        <div className={'col-10 pt-5'}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"><b>Што е SSIS?</b></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"

                                >
                                    <FormControlLabel value="Extract, Transform, Load" control={<Radio />} label="System Intefgation Services" />
                                    <FormControlLabel value="Extract, Transform" control={<Radio />} label="SQL System Intefgation Services" />
                                    <FormControlLabel value="Load" control={<Radio />} label="SQL Server Integration Services" />
                                </RadioGroup>
                            </FormControl>
                        </div>


                    </div>

                    <div className={'row'}>
                        <div className={'col-10 pt-5'}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"><b>Која компонента се користи за спојување на резултати?</b></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"

                                >
                                    <FormControlLabel value="Extract, Transform, Load" control={<Radio />} label="Merge Join" />
                                    <FormControlLabel value="Extract, Transform" control={<Radio />} label="Lookup" />
                                    <FormControlLabel value="Load" control={<Radio />} label="Derived Column" />
                                    <FormControlLabel value="as" control={<Radio />} label="Conditional Split" />
                                </RadioGroup>
                            </FormControl>
                        </div>


                    </div>
                    <a href={"/quizzes"} className={'btn btn-success m-3'}>Заврши го тестот!</a>
            </div>
            </div>
        </>
    )

}
export default Exam;
