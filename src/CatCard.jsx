import React from 'react'

const CatCard = ({ cat: { name, temperament, origin, description } }) => {
    return (
        <div className="cat">
            <div>
          <span>{name}</span>
          </div>
          <div>
            <img src={name.Poster !== 'N/A' ? name.Poster : 'https://via.placeholder.com/400'} />
          </div>
          <div>
            <span>{name}</span>
            {/* <h3>{cat.breed}</h3> */}
          </div>
        </div>
        )
    }
    
    export default CatCard