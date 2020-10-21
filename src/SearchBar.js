import React from 'react'

function SearchBar() {
    return (
        <form className="SearchBar">
            <input className="SearchBar__input" />
            <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
            </button>
        </form>
    )
}

export default SearchBar