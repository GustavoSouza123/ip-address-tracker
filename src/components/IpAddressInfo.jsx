import React from "react";
import "../css/IpAddressInfo.css";

function IpAddressInfo({ info }) {
    const ip = info.ip || '-';
    const location = info.country && info.region 
        ? info.region + ', ' + info.country
        : '-';
    const timezone = info.timezone ? 'UTC ' + info.timezone : '-'
    const isp = info.isp || '-';

    return (
        <div className="info">
            <div className="ip-address">
                <div className="title">IP Address</div>
                <div className="data">
                    <p title={ip}>{ip}</p>
                </div>
            </div>
            <div className="location">
                <div className="title">Location</div>
                <div className="data">
                    <p title={location}>{location}</p>
                </div>
            </div>
            <div className="timezone">
                <div className="title">Timezone</div>
                <div className="data">
                    <p title={timezone}>{timezone}</p>
                </div>
            </div>
            <div className="isp">
                <div className="title">ISP</div>
                <div className="data">
                    <p title={isp}>{isp}</p>
                </div>
            </div>
        </div>
    );
}

export default IpAddressInfo;