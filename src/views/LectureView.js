import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import MenuTopBar from "./components/pageElements/MenuTopBar";
import etl_explained from '../img/etl_explained.png';
import {IconButton} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function LectureView() {
    const classes = useStyles(coursesViewStyle);
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    return (
            <>
                <MenuTopBar active={'Course'}/>
                <div className={`${classes.bodyStyle} p-3`}>
                    <div className={'container'} style={{marginTop: '80px', backgroundColor: 'rgba(255,255,255)'}}>
                        <div className={'mb-2'}>
                            <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                                <KeyboardBackspaceIcon fontSize={'big'}  onClick={() => history.goBack()}/>
                            </IconButton>
                        </div>
                        <div className={'row mb-2'}>
                            <div className={'col-8'}>
                            <h4 className={'mb-4'}>1. ETL процес и негова примена</h4>
                            </div>
                            <div className={'col-4 mt-1 text-end'}>
                                <a href={'/quizzes'} className={'btn btn-lg'} style={{backgroundColor:'rgba(100,149,237)', color:'white'}}>Тестирај го твоето знаење!</a>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                ETL, што значи извлекување, трансформација и вчитување, е процес на интеграција на податоци кој комбинира податоци од повеќе извори на податоци во единствена, конзистентна продавница на податоци што се вчитува во складиште на податоци или друг целен систем. ETL обезбедува основа за аналитика на податоци и работни текови на машинско учење. Преку низа деловни правила, ETL ги чисти и организира податоците на начин кој одговара на специфични потреби за деловна интелигенција, како месечно известување, но може да се справи и со понапредна аналитика, која може да ги подобри процесите на задната страна или искуствата на крајните корисници. ETL често се користи од страна на организацијата за:
                                <ul>
                                    <li>Извлекување податоци од наследни системи</li>
                                    <li>Чистење на податоците за да го подобрите квалитетот на податоците и да воспоставите конзистентност</li>
                                    <li>Вчитување податоци во целна база на податоци</li>

                                </ul>
                            </div>
                            <div className={'col-6'}>
                                <img src={etl_explained} style={{width: '100%', height:'400px'}} className={'mt-1'}/>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-6'}>
                            <iframe className={'mt-2'} width="560" height="315" src="https://www.youtube.com/embed/wyn-PkJB3Lk"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                            <div className={'col-6'}>
                                <ul className={'mt-2'}>
                                    <li>Екстракт (Extract)
                                        За време на екстракцијата на податоците, необработените податоци се копираат или извезуваат од изворните локации во област за поставување. Тимовите за управување со податоци можат да извлечат податоци од различни извори на податоци, кои можат да бидат структурирани или неструктурирани. Тие извори вклучуваат, но се</li>
                                    <li>Трансформација (Transform)
                                        Во областа за поставување, необработените податоци се подложени на обработка на податоци. Овде, податоците се трансформираат и консолидираат за нивната наменета аналитичка употреба</li>
                                    <li>Вчитај (Load)
                                        Во овој последен чекор, трансформираните податоци се преместуваат од областа за поставување во целен склад за податоци. Вообичаено, ова вклучува почетно вчитување на сите податоци, проследено со периодично вчитување на поединечни промени на податоците и, поретко, целосно освежување за бришење и замена на податоците во складиштето. За повеќето организации кои користат ETL, процесот е автоматизиран, добро дефиниран, континуиран и сериски управуван. Вообичаено, ETL се одвива за време на слободни часови кога сообраќајот на изворните системи и складиштето на податоци е на најниско ниво.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default LectureView;