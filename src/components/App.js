import React, { Component } from 'react';
import '../App.css';
import MediaContainer from './MediaContainer';
import Search from './Search'
import Menu from './Menu'
const URL1 = 'https://api.themoviedb.org/3/search/multi?api_key=625636fd09b073d7a5b8a815b469ee71&language=en-US&query='
const URL2 = '&page=1&include_adult=false'

class App extends Component {
  state = {
    search: '',
    items: [],
    selectedItem: null,
    activeMenu: 'home',
    rated: [],
    watchlist: []
  }

  onRating = (ratedItem) => {
    let ratedObjs = this.state.rated.filter((item) => item.id !== ratedItem.id)
    let allRated = [...ratedObjs, ratedItem]
    allRated.sort((a, b) => b.rating - a.rating)
    this.setState({ rated: allRated}, ()=> console.log("new state after rating:", this.state.rated))
  }

  onWatchList = (savedItem) => {
    console.log("here!", savedItem)
    const savedObjs = this.state.watchlist.filter((item) => item.id !== savedItem.id)
    this.setState({ watchlist: [...savedObjs, savedItem]}, ()=> console.log("new state after rating:", this.state.watchlist))
  }

  onMenuChange = (menu) => {
    this.setState({activeMenu: menu, selectedItem: null})
  }

  updateSearch = (searchTerm) => {
    this.setState({search: searchTerm}, () => this.fetchItems())
  }

  fetchItems() {
    fetch(URL1 + this.state.search + URL2)
      .then(res => res.json())
      .then(items => {
        //sort by popularity first
        items.results.sort((a,b) => b.popularity - a.popularity)
        this.setState({items: items.results})
      }
    )
  }

  chooseItem = (choice) => {
    choice.rating = null //adding field for later use
    this.setState({selectedItem: choice, search: ''})
  }

  determineItems() {
    switch(this.state.activeMenu) {
    case 'home':
      if (this.state.selectedItem) {
        return [this.state.selectedItem]
      }
      break;
    case 'rated':
        return this.state.rated
        break;
    default:
        return this.state.watchlist
    }
  }

  render() {
    return (
      <div className="ui inverted vertical center aligned segment" id="cover">
        <div className="ui container">
          <Menu active={this.state.activeMenu} onMenuChange={this.onMenuChange}/>
        </div>
          {(this.state.activeMenu === 'home' && !this.state.selectedItem) ?
              <div className="ui text container">
                <h1 className="ui inverted header">
                  What Have You Watched Lately?
                </h1>
                <p>
                  Rate movies and tv shows or add to your watchlist!
                </p>
                <Search handleSearch={this.updateSearch}
                        items={this.state.items}
                        searchTerm={this.state.search}
                        handleChoice={this.chooseItem}/>
              </div>
            : <MediaContainer selectedItem={[this.state.selectedItem]}
                              items={this.determineItems()}
                              currentMenu={this.state.activeMenu}
                              onRating={this.onRating}
                              onWatchList={this.onWatchList}/>
          }
      </div>
    );
  }
}

export default App;
