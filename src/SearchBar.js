import React from 'react'

function SearchBar(props) {
    const inputStyle = {
        border: props.error ? "3px solid #FE5F55" : "none",
    }

    return (
        <form className="SearchBar" onSubmit={props.handleSubmit}>
            <input className="SearchBar__input" style={inputStyle} value={props.IP} onChange={props.handleChange} placeholder="E.g. 8.8.8.8" />
            <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
            </button>
            <p className="SearchBar__error" style={{display: props.error ? "block" : "none"}}>The input is empty</p>
        </form>
    )
}

export default SearchBar