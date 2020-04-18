import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

const Option = (props) => (
    <li>
        {props.description}

        <Button
            onClick={(e) => {
                props.handleDeleteSingleOption(props.description)
            }}
            variant={"danger"}
            size="sm">
            <FontAwesomeIcon icon={faTrash} />
        </Button>
    </li>
);


export default Option;

