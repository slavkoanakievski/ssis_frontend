import Modal from "react-bootstrap/Modal";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {FormikProvider} from "formik";


function SubmitExam({show, closeModal, formik}) {
    return (
        <Modal
            show={show}
            onHide={closeModal}
            backdrop="static"
            keyboard={false}
            centered={false}
        >
            <Modal.Header>
                <div className='container'>
                    <div className='row'>

                    </div>
                </div>
                <a type="button" className="close">
                    <IconButton size={'small'}>
                        <CloseIcon onClick={closeModal} fontSize={'small'}/>
                    </IconButton>
                </a>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                        <button type="button" className="btn" onClick={closeModal}>Close</button>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </FormikProvider>
            </Modal.Footer>
        </Modal>
    )
}
export default SubmitExam;