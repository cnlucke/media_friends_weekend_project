import React from 'react'

const Menu = (props) => {
  return (
    <div className="ui massive borderless inverted menu">
      <div className="item" style={{ margin: 'auto', width: '50%'}}>
        <div className="ui massive secondary inverted pointing menu">
          <a className={(props.active === 'home') ? "active item" : "item"}
             onClick={() => props.onMenuChange('home')}>Home</a>
          <a className={(props.active === 'rated') ? "active item" : "item"}
            onClick={() => props.onMenuChange('rated')}>Rated</a>
          <a className={(props.active === 'watchlist') ? "active item" : "item"}
            onClick={() => props.onMenuChange('watchlist')}>Watchlist</a>
        </div>
      </div>
    </div>
  )
}

export default Menu;
