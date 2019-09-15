import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import CSSTransition from "react-transition-group/CSSTransition";


const Destinations = (props) => {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div>
            <div className={"destinations"}>
                <div className={"destinations-content"}>{props.data.titleCard}</div>
                <div style={{lineHeight: "100px"}}>
                    <Button variant="outlined" className={"destination-button"}
                            onClick={() => setShowMessage(true)}>Discover</Button>
                </div>
            </div>
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="destination-modal"
                unmountOnExit
            >
                <div className={"destination-container"}>
                    <p>
                        This alert message is being transitioned in and
                        out of the DOM.
                    </p>
                    <Button onClick={() => setShowMessage(false)}>Close</Button>
                </div>
            </CSSTransition>
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="header-modal"
                unmountOnExit
            >
                <div className={"header-container"}/>
            </CSSTransition>
        </div>
    )
};

export default Destinations;
