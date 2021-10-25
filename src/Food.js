import React from 'react'
function Food({name, image}) {
    return (
        <div>
            <h2>I love {name}</h2>
            <img src={image} alt={name}/>
        </div>);
}

export default Food;