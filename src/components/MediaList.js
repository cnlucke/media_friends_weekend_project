import React from 'react'
import MediaCard from './MediaCard'
import { Grid } from 'semantic-ui-react'

const MediaList = (props) => {
  const cards = props.items.map((item) => {
      return  <Grid.Column stretched={true}>
                <MediaCard item={item}
                           key={item.id}
                           onRating={props.onRating}
                           onWatchList={props.onWatchList}/>
              </Grid.Column>
      })

  return(
    <Grid centered columns={4} stretched={true}>
        {cards}
    </Grid>
  )
}

export default MediaList;
