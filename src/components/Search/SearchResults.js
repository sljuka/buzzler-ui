import Radium from 'radium'
import React from 'react'
import ReactDOM from 'react-dom'
import { mediaQueries } from '../../styles/global'

class SearchResults extends React.Component {

  static propTypes = {
    clearSearchResults: React.PropTypes.func.isRequired,
    onSearchResultClick: React.PropTypes.func.isRequired,
    searchResults: React.PropTypes.array.isRequired
  }

  componentDidMount () {
    document.getElementById('root').addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount () {
    document.getElementById('root').removeEventListener('click', this.handleDocumentClick)
  }

  handleDocumentClick = (evt) => {
    const { clearSearchResults } = this.props
    const area = ReactDOM.findDOMNode(this.refs.area)

    if (area && !area.contains(evt.target))
      clearSearchResults()
  }

  render () {
    const {
      clearSearchResults,
      onSearchResultClick,
      searchResults
    } = this.props

    if (!searchResults || searchResults.length === 0) return null

    return (
      <div ref='area' style={style.resultContainer}>
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
