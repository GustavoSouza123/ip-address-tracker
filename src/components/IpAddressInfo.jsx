import React from "react";
import "../css/IpAddressInfo.css";

function IpAddressInfo({ info }) {
    return (
        <div className="info">
            <div className="ip-address">
                <div className="title">IP Address</div>
                <div className="data">
                    {info.ip || '-'}
                </div>
            </div>
            <div className="location">
                <div className="title">Location</div>
                <div className="data">
                    {info.country && info.region
                        ? info.region + ', ' + info.country
                        : '-'
                    }
                </div>
            </div>
            <div className="timezone">
                <div className="title">Timezone</div>
                <div className="data">
                    {info.timezone ? 'UTC ' + info.timezone : '-'}
                </div>
            </div>
            <div className="isp">
                <div className="title">ISP</div>
                <div className="data">
                    {info.isp || '-'}
                </div>
            </div>
        </div>
    );
}

export default IpAddressInfo;