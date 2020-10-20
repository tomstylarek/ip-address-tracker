import React from 'react'

function InfoTable() {
    return (
        <dl className="InfoTable">
            <div className="InfoTable-item">
                <dt className="InfoTable-item__title">ip address</dt>
                <dd className="InfoTable-item__description">123123123123</dd>
            </div>
            <div className="InfoTable-item">
                <dt className="InfoTable-item__title">location</dt>
                <dd className="InfoTable-item__description">Argentina</dd>
            </div>
            <div className="InfoTable-item">
                <dt className="InfoTable-item__title">time zone</dt>
                <dd className="InfoTable-item__description">234</dd>
            </div>
            <div className="InfoTable-item">
                <dt className="InfoTable-item__title">isp</dt>
                <dd className="InfoTable-item__description">asda</dd>
            </div>
        </dl>
    )
}

export default InfoTable