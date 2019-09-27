import React from'react';


const FooterDetail = (props) => {
    return(
        <div className={"content-container"}>
            <div className={"content-header"}>What about it?</div>
            <p className={"content-info"}>{props.data.content}</p>
        </div>
    );
};

export default FooterDetail
