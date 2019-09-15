import React from 'react';


const Headers = () => {
    return (
        <div className={"header"}>
            <div className={"header-items"}>
                <span style={{fontWeight: 'bold', fontSize: '15px'}}>Destination</span>
                <div style={{float: 'right', fontSize: '15px'}}>
                    Login
                </div>
            </div>
        </div>
    )
}

export default Headers;
