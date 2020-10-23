import React from 'react'

import SearchBar from './SearchBar'
import InfoTable from './InfoTable'

function Header(props) {
    return (
        <header className="Header">
            <h1 className="Header__title">IP Address Tracker</h1>
            <SearchBar 
                IP={props.IP}
                error={props.error}
                handleChange={props.handleChange} 
                handleSubmit={props.handleSubmit} 
            />
            <InfoTable />
        </header>
    )
}

export default Header