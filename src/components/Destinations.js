import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import HeaderOverlay from "./HeaderOverlay";
import DestinationDetails from "./DestinationDetails";
import CSSTransition from "react-transition-group/CSSTransition";


const Destinations = (props) => {
    const [showDetailsPage, setShowDetailsPage] = useState(false);

    const toggleDetailsModal = () => {
        setShowDetailsPage(!showDetailsPage);
    };

    return (
        <div>
            <div className={"destinations"}>
                <div className={"destinations-content"}>{props.data.titleCard}</div>
                <div style={{lineHeight: "100px"}}>
                    <Button variant="outlined" className={"destination-button"}
                            onClick={() => setShowDetailsPage(true)}>Discover</Button>
                </div>
            </div>
            <CSSTransition
                style={{display: showDetailsPage ? "none" : "block"}}
                in={showDetailsPage}
                timeout={300}
                classNames="destination-modal"
                unmountOnExit
            >
                <DestinationDetails content={props.data.content} detailId={props.data.id} toggleDetailsModal={() => toggleDetailsModal()}/>
            </CSSTransition>
            <HeaderOverlay showDetailsPage={showDetailsPage}/>
        </div>
    )
};

export default Destinations;
