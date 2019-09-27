import React, {useState} from 'react';
import { When, Otherwise } from "react-control-statements";

const ImageContainer = (props) => {

    const [loaderMeta, setLoaderMeta] = useState({ index: 0, loaded: false});

    if( props.index !== loaderMeta.index) {
        setLoaderMeta({index: props.index, loaded: false});
    }

    const isLoaded = () => {
        console.log("Loaded...");
        setLoaderMeta({...loaderMeta, loaded: true});
    };

    const isMinifiedLoaded = () => {
        console.log("Minified Loaded...");
    };

    console.log(props);

    return (
        <div className={"container"}>
            <When condition={!loaderMeta.loaded}>
                <img src={props.data.minified} onLoad={() => isMinifiedLoaded()} className={"image image-blur"}/>
            </When>
            <Otherwise>
                <img  src={props.data.url} onLoad={() => isLoaded()} className={`${loaderMeta.loaded? "" : "display-none"} image`}/>
            </Otherwise>
            <div className={"image-frame"}/>
        </div>
    )

};

export default ImageContainer;
