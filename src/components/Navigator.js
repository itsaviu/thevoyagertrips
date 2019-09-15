import React from 'react';
import Fab from "@material-ui/core/Fab";
import {ArrowBack, ArrowForward} from "@material-ui/icons";

const Navigator = (props) => {

    const goNext = () => {
        props.nextIndex()
    };

    const goBack = () => {
        props.backIndex();
    };

    return (
        <div className={"navigator"}>
            <Fab className={"fab-but"} onClick={() => goBack()}><ArrowBack/></Fab>
            <Fab className={"fab-but"} onClick={() => goNext()}><ArrowForward/></Fab>
        </div>
    );
};

export default Navigator;
