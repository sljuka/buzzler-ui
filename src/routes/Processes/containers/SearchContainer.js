import Search from '../../../components/Search'
import { connect } from 'react-redux'
import { debounceSearchProcesses, clearSearchResults, openProcess } from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    onSearchChange: (value) => dispatch(debounceSearchProcesses(value)),
    onSearchResultClick: (processName) => dispatch(openProcess(processName)),
    onSearchBlur: () => dispatch(clearSearchResults())
  }
}

const mapStateToProps = (state, ownProps) => ({
  searchValue: state.forms.processes.search.value,
  searchResults: state.processes.searchResults
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
