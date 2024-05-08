import React from "react";
import "../css/IpAddressInfo.css";

function IpAddressInfo() {
    return (
        <div className="info">
            <div className="ip-address">
                <div className="title">IP Address</div>
                <div className="data">192.212.174.101</div>
            </div>
            <div className="location">
                <div className="title">Location</div>
                <div className="data">Brooklyn, NY 10001</div>
            </div>
            <div className="timezone">
                <div className="title">Timezone</div>
                <div className="data">UTC -05:00</div>
            </div>
            <div className="isp">
                <div className="title">ISP</div>
                <div className="data">SpaceX Starlink</div>
            </div>
        </div>
    );
}

export default IpAddressInfo;