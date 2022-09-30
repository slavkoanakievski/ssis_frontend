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

                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                   <h1> Results are: {results}</h1>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-white" onClick={() => history.push("/quizzes")}>Close</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default ResultsReviewModal;