import Radium from 'radium'
import React from 'react'
import SearchResults from './SearchResults'

const Search = (props) => {
  const {
    clearSearchResults,
    onSearchChange,
    onSearchResultClick,
    searchResults,
    searchValue
  } = props

  return (
    <div>
      <div style={style.searchRoot}>
        <input
          style={style.input}
          type='text'
          value={searchValue}
          onChange={({ target: { value } }) => onSearchChange(value)}
          onKeyDown={e => {
            if (e.keyCode === 27) clearSearchResults()
          }}
        />
        <SearchResults
          clearSearchResults={clearSearchResults}
          onSearchResultClick={onSearchResultClick}
          searchResults={searchResults}
        />
      </div>
    </div>
  )
}

Search.propTypes = {
  clearSearchResults: React.PropTypes.func.isRequired,
  onSearchChange: React.PropTypes.func.isRequired,
  onSearchResultClick: React.PropTypes.func.isRequired,
  searchResults: React.PropTypes.array.isRequired,
  searchValue: React.PropTypes.string
}

export default Radium(Search)

const style = {
  searchRoot: {
    padding: 10,
    position: 'relative',
    width: 100
  },
  input: {
    height: 30,
    width: 400
  }
}
