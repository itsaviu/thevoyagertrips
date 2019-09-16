import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";


const HeaderOverlay = (props) => {

    return (
        <CSSTransition
            in={props.showDetailsPage}
            timeout={300}
            classNames="header-modal"
            unmountOnExit
        >
            <div className={"header-container"}/>
        </CSSTransition>
    );
};

export default HeaderOverlay;
