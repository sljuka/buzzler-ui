import React from 'react'

class SearchResults extends React.Component {

  static propTypes = {
    searchResults: React.PropTypes.string.isRequired,
    onSearchResultClick: React.PropTypes.func.isRequired
  }

  render () {
    const { searchResults, onSearchResultClick } = this.props

    return (
      <div style={style.resultContainer}>
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

const style = {
  resultItem: {
    display: 'block',
    width: 200,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgb(248, 248, 248, 0.5)'
    }
  }
}

export default SearchResults
