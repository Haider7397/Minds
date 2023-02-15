import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../assets/css/ModalPage.css";

export default function ModalPage({ show, message ,handleExit, handleReset }) {
    return (
        <div>
            <Modal
                show={show}
                onHide={()=>handleExit()}
                backdrop="static"
                keyboard={false}
            >
               <div className="backside">
               <Modal.Header className='remover'>
                    <Modal.Title>{message}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you wish to play again?
                </Modal.Body>
                <Modal.Footer className='remover'>
                    <Button variant="secondary"  onClick={()=>handleExit()}>
                        Exit
                    </Button>
                    <Button variant="primary" className='buttonColor'  onClick={()=>handleReset()}>Play Again</Button>
                </Modal.Footer>
               </div>
            </Modal>
        </div>
    );
}