import React, {useEffect, useState} from 'react';
import {Close} from "@material-ui/icons";
import DetailWindowMode from "./DetailWindowMode";
import DetailMobileMode from "./DetailMobileMode";
import {If} from "react-control-statements";


const DestinationDetails = (props) => {

    useEffect(() => {
        fetch("https://7shau56ywf.execute-api.us-east-2.amazonaws.com/Dev/voyager/resource")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setDestinations(result);
            })
            .catch((error) => console.log(error))
    }, []);

    const [destinations, setDestinations] = useState([]);

    const toggleDetailsModal = () => {
        props.toggleDetailsModal();
    };

    let destinationDetails = destinations.find(d => d.id === props.detailId);

    return (
        <div className={"destination-container"}>
            <div className={"destination-details-content"}>
                <div className={"modal-close"}><Close className={"close-button"}
                                                      onClick={() => toggleDetailsModal()}/></div>
                <If condition={destinationDetails}>
                    <DetailWindowMode destination={destinationDetails}/>
                    <DetailMobileMode destination={destinationDetails}/>
                </If>
                <div className={"window-mode"} style={{marginTop: "100px"}}>
                    <div className={"content-header"}>What about it?</div>
                    <p className={"content-info"}>{props.content}</p>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;
