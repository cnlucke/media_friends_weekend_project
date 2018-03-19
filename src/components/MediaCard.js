import React from 'react'
import { Button, Card, Image, Icon, Rating } from 'semantic-ui-react'

const BASE_URL = 'https://image.tmdb.org/t/p/w300'

export default class MediaCard extends React.Component {
  state = {
    rating: 0,
    showRating: false  
  }

  handleRate = (e, { rating }) => {
    let newObj = this.props.item
    newObj.rating = rating
      this.setState({ rating }, () => this.props.onRating(newObj))
  }

  revealRating = (e) => {
    this.setState({showRating: true})
  }

  handleWatchlist(value) {
    this.props.onWatchList(value)
  }

  render() {
    return (
      <Card raised="true">
        <Card.Content>
          <Image src={BASE_URL + this.props.item.poster_path} />
          <Card.Header>
            {this.props.item.title}
          </Card.Header>
          <Card.Meta>
            Released on {this.props.item.release_date}
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
              <Button color='green' icon labelPosition='left' onClick={() => this.handleWatchlist(this.props.item)}>
                <Icon name='plus' />
                Watch Later
              </Button>
              <Button.Or />
              <Button color='yellow' icon labelPosition='right' onClick={this.revealRating}>
                <Icon name='list' />
                See Details
              </Button>
            </div>
        </Card.Content>
              <Card.Content extra>
                <Rating icon='star'
                defaultRating={this.props.item.rating || 1}
                maxRating={10}
                value={this.state.rating}
                onRate={this.handleRate}/>
              </Card.Content>
      </Card>
    )
  }
}

MediaCard.defaultProps = {
  rating: null
}
