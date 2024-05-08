import React from "react";
import "../css/IpAddressInfo.css";

function IpAddressInfo() {
    return (
        <div className="info">
            <div className="ip-address"></div>
            <div className="location"></div>
            <div className="timezone"></div>
            <div className="isp"></div>
        </div>
    );
}

export default IpAddressInfo;