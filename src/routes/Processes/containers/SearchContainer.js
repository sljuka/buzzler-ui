import Search from '../../../components/Search'
import { connect } from 'react-redux'
import { debounceSearchProcesses, clearSearchResults, openProcess } from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    onSearchBlur: () => dispatch(clearSearchResults()),
    onSearchChange: (value) => dispatch(debounceSearchProcesses(value)),
    onSearchResultClick: (processName) => dispatch(openProcess(processName))
  }
}

const mapStateToProps = (state, ownProps) => ({
  searchResults: state.processes.searchResults,
  searchValue: state.forms.processes.search.value
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
