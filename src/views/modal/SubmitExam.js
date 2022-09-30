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
                        <div style={{fontSize: '22px'}} className={'col-12 text-center'}>
                            Тестирање за алатката Microsoft SSIS
                        </div>

                    </div>
                </div>
                <a type="button" className="close">
                    <IconButton size={'small'}>
                        <CloseIcon onClick={closeModal} fontSize={'small'}/>
                    </IconButton>
                </a>
            </Modal.Header>
            <Modal.Body>
                <div className={'col-12 text-center'}>
                    <b style={{color: 'grey'}}>Дали сте сигурни дека сакате да завршите со решавање на тестот?</b>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                        <button type="button" className="btn btn-danger m-2" onClick={closeModal}>Откажи</button>
                        <button type="submit" className="btn btn-success">Заврши!</button>
                    </form>
                </FormikProvider>
            </Modal.Footer>
        </Modal>
    )
}
export default SubmitExam;