import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import HeaderOverlay from "./HeaderOverlay";
import DestinationDetails from "./DestinationDetails";


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
            <DestinationDetails
                showDetailsPage={showDetailsPage}
                toggleDetailsModal={() => toggleDetailsModal()}/>
            <HeaderOverlay showDetailsPage={showDetailsPage}/>
        </div>
    )
};

export default Destinations;
