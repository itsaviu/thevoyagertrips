import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import {Close} from "@material-ui/icons";


const DestinationDetails = (props) => {

    const toggleDetailsModal = () => {
        props.toggleDetailsModal();
    };

    return (
        <CSSTransition
            in={props.showDetailsPage}
            timeout={300}
            classNames="destination-modal"
            unmountOnExit
        >
            <div className={"destination-container"}>
                <div className={"destination-details-content"}>
                    <div className={"modal-close"}><Close className={"close-button"} onClick={() => toggleDetailsModal()}/></div>
                    <p>
                        This alert message is being transitioned in and
                        out of the DOM.
                    </p>
                </div>
            </div>
        </CSSTransition>
    );
};

export default DestinationDetails;
