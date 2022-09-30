import Modal from "react-bootstrap/Modal";
import {useHistory} from "react-router-dom";

function ResultsReviewModal({show, results}) {
    const history = useHistory();

    return (
        <>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                centered={false}
            >
                <Modal.Header>
                    <div className='container'>
                        <div className='row'>
                            <div className="col text-center">
                                <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>Резултати од квизот</h5>
                                <span style={{fontSize: '25px'}} className={results>=50 ? "font-weight-bold text-success" : "font-weight-bold text-danger"}>{results>=50 ? 'Го положивте квизот': 'Квизот НЕ е положен'}</span>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                   <h3 className={'text-center'}> Освоивте вкупно: {results} поени</h3>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-white" onClick={() => history.push("/quizzes")}>Close</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default ResultsReviewModal;