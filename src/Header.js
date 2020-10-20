import React from 'react'

import SearchBar from './SearchBar'
import InfoTable from './InfoTable'

function Header() {
    return (
        <header className="Header">
            <h1 className="Header__title">IP Address Tracker</h1>
            <SearchBar />
            <InfoTable />
        </header>
    )
}

export default Header