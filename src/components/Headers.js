import React from 'react';


const Headers = () => {
    return (
        <div className={"header"}>
            <div className={"header-items"}>
                {/*<span className={"hide-in-mobile"} style={{fontWeight: 'bold', fontSize: '15px'}}>Destination</span>*/}
                <div className={"logo-container"}>
                    <div className={"logo"}>
                        THE VOYAGER TRIP
                    </div>
                    <div className={"logo-subtitle"}>Travel Beyond</div>
                </div>
                {/*<span className={"hide-in-mobile"} style={{float: 'right', fontSize: '15px'}}>Login</span>*/}
            </div>
        </div>
    )
};

export default Headers;
