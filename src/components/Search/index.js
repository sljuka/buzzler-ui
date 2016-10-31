import Radium from 'radium'
import React from 'react'

const Search = (props) => {
  const {
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
        />
        {searchResults.length > 0 &&
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
        }
      </div>
    </div>
  )
}

Search.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
  onSearchResultClick: React.PropTypes.func.isRequired,
  onSearchBlur: React.PropTypes.func,
  searchResults: React.PropTypes.array.isRequired,
  searchValue: React.PropTypes.string
}

export default Radium(Search)

const style = {
  searchRoot: {
    position: 'relative',
    width: 100,
    padding: 10
  },
  input: {
    height: 30,
    width: 400
  },
  resultContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #ccc',
    position: 'absolute'
  },
  resultItem: {
    display: 'block',
    width: 200,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(248, 248, 248, 0.8)'
    }
  }
}
