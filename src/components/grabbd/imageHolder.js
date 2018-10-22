
import React from 'react';
const ImageHolder = (props) => {
  return(
    <a href={props.state.mainImageId}>
    <nav className="rightside w3-hide-small bgimg col-sm-6 " style={{marginLeft:"50%",overflow: "hidden",backgroundImage: `url(${props.state.mainImageUrl})`}}>
    </nav>
    </a>
  )
}
export default ImageHolder;
