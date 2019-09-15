import React from 'react';

const ImageContainer = (props) => {

    console.log(props);
    return (
        <div className={"container"}>
            <img src={props.data.url} className={"image"}/>
            <div className={"image-frame"}/>
        </div>
    )

};

export default ImageContainer;
