import React from 'react'
import SearchResult from './SearchResult'

export default class Search extends React.Component {
  state = {
    search: '',
  }

  handleSearch = (e) => {
    this.setState({search: e.target.value}, () => {
      if (this.state.search.length > 0) {
        this.props.handleSearch(this.state.search)
      }
    })
  }

  handleChoice = (choice) => {
    this.setState({search: ''}, () => this.props.handleChoice(choice))

  }

  render() {
    const searchResults = this.props.items.map((item) => {
        return <SearchResult  title={item.title || item.name}
                              key={item.id}
                              handleChoice={(choice) => this.handleChoice(choice)}
                              item={item}/>
    })
    return (
      <div className="ui fluid category search focus">
        <div className="ui icon input">
          <input  className="prompt"
            type="text"
            placeholder="Search movies and shows..."
            onChange={this.handleSearch}
            value={this.state.search}
            />
          <i className="search icon" onClick={(searchTerm) => this.props.handleSearch(this.state.search)} />
        </div>
        {(this.state.search) ?
          <div className="results transition visible search-results">
            {searchResults}
          </div>
          : null
        }
      </div>
    )
  }
}

Search.defaultProps = {
  titles: []
};

// .ui[class*="center aligned"].segment
