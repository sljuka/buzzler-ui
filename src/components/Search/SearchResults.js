import Radium from 'radium'
import React from 'react'
import { mediaQueries } from '../../styles/global'

class SearchResults extends React.Component {

  static propTypes = {
    clearSearchResults: React.PropTypes.func.isRequired,
    onSearchResultClick: React.PropTypes.func.isRequired,
    searchResults: React.PropTypes.array.isRequired
  }

  render () {
    const {
      clearSearchResults,
      onSearchResultClick,
      searchResults
    } = this.props

    if (!searchResults || searchResults.length === 0) return null

    return (
      <div style={style.resultContainer}>
        <button style={style.button} onClick={clearSearchResults}>x</button>
        {searchResults.map(item =>
          <div
            key={item.id}
            onMouseDown={() => onSearchResultClick(item.name)}
            style={style.resultItem}
          >
            {item.name}
          </div>
        )}
      </div>
    )
  }
}

const { small, medium, big } = mediaQueries(700, 990)
const style = {
  button: {
    float: 'right'
  },
  resultContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #ccc',
    position: 'absolute',
    [small]: {
      width: '80%'
    },
    [medium]: {
      width: 270
    },
    [big]: {
      width: 350
    }
  },
  resultItem: {
    cursor: 'pointer',
    display: 'block',
    padding: '2px 20px',
    ':hover': {
      backgroundColor: 'rgba(248, 248, 248, 0.8)'
    }
  }
}

export default Radium(SearchResults)
