import React from 'react'
import heroImage from '../images/juniorpastrami.jpeg'
function MainImage(){
    return(
<div className="image-container">
    <img className="main-image" alt="sandwich" src={heroImage} />
</div>
    )
}

export default MainImage