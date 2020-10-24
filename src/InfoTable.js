import React from 'react'

function InfoTable(props) {
    let location = props.data.country ? props.data.city + ", " + props.data.region + ", " + props.data.country : "";

    // country siempre devuelve ZZ para los casos en que no encuentra el IP
    // salvo el caso del IP loopback 127.0.0.1
    if (props.data.country !== "ZZ") {
        return (
            <dl className="InfoTable">
                <div className="InfoTable-item">
                    <dt className="InfoTable-item__title">ip address</dt>
                    <dd className="InfoTable-item__description">{props.data.ip}</dd>
                </div>
                <div className="InfoTable-item">
                    <dt className="InfoTable-item__title">location</dt>
                    <dd className="InfoTable-item__description">{location}</dd>
                </div>
                <div className="InfoTable-item">
                    <dt className="InfoTable-item__title">time zone</dt>
                    <dd className="InfoTable-item__description">{props.data.timezone}</dd>
                </div>
                <div className="InfoTable-item">
                    <dt className="InfoTable-item__title">isp</dt>
                    <dd className="InfoTable-item__description">{props.data.isp}</dd>
                </div>
            </dl>
        )
    } else if (props.data.ip === "127.0.0.1") {
        return (
            <div className="InfoTable">
                <div className="InfoTable-item">
                    <dt className="InfoTable-item__title">ip address</dt>
                    <dd className="InfoTable-item__description">{props.data.ip}</dd>
                </div>
                <div className="InfoTable-item">
                    <dt className="InfoTable-item__title">isp</dt>
                    <dd className="InfoTable-item__description">{props.data.isp}</dd>
                </div>
            </div>
        )
    } else {
        return (
            <div className="InfoTable">
                <p className="InfoTable-item">Not Found</p>
            </div>
        )
    }
    
}

export default InfoTable