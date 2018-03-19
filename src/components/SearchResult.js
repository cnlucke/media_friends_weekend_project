import React from 'react'

const SearchResult = (props) => {
  return (
      <div className="results" onClick={() => props.handleChoice(props.item)}>
        <a className="result">
          <div className="content">
            <div  className="title"
                  style={{textAlign: 'left'}}>
                  {(props.item.release_date) ?
                  `${props.title} - ${props.item.release_date.split("-")[0]}`
                  : props.title}
            </div>
          </div>
        </a>
      </div>
  )
}

export default SearchResult;
