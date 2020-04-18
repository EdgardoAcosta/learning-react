import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const OptionModal = (props) => (
    <Modal show={!!props.selectedOption} onHide={props.handleClearSelectedOption}>
        <Modal.Header closeButton>
            <Modal.Title>You select was</Modal.Title>
        </Modal.Header>
        <Modal.Body>test</Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={props.handleClearSelectedOption}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);

export default OptionModal
