import React from 'react'

function InfoTable(props) {
    let location = props.data.country ? props.data.city + ", " + props.data.region + ", " + props.data.country : "";
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
}

export default InfoTable