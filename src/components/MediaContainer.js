import React from 'react';
import MediaList from './MediaList'

export default class MediaContainer extends React.Component {
  state = {
    items: null,
    selectedItem: null,
  }

  render() {
    console.log("MediaContainer props:", this.props)
    return(
      <div className="html ui top attached segment">
        <MediaList  items={this.props.items}
                    onRating={this.props.onRating}
                    menu={this.props.currentMenu}
                    onWatchList={this.props.onWatchList}
                    currentMenu={this.props.currentMenu}/>
      </div>
    )
  }
}

MediaContainer.defaultProps = {
  selectedItem: null,
  items: null
}
