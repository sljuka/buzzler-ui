import Radium from 'radium'
import React from 'react'
import SearchResults from './SearchResults'
import { mediaQueries } from '../../styles/global'

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
          onFocus={() => onSearchChange(searchValue)}
          onChange={({ target: { value } }) => onSearchChange(value)}
          onKeyDown={e => {
            if (e.keyCode === 27) clearSearchResults()
          }}
          placeholder='Search processes'
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

const { small, medium, big } = mediaQueries(700, 990)
const style = {
  searchRoot: {
    [small]: {
      width: '100%'
    },
    padding: 10,
    position: 'relative'
  },
  input: {
    [small]: {
      width: '100%'
    },
    [medium]: {
      width: 400
    },
    [big]: {
      width: 500
    },
    width: 300,
    padding: 20,
    fontSize: '1.1em',
    height: 30,
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16),0 0 0 1px rgba(0,0,0,0.08)',
    border: 0
  }
}
