import React from 'react';
import Curator from './curatorStatus';
const Restraunt = (props) => {
  return(
    <div className="restaurant"  >
    <div className="row">
     <div className="col-xs-4">
      <div className="restrauntImageDiv-1 row img-responsive img-rounded row-eq-height" onClick={props.changeImage} id={props.restraunt.venue_id} style={{backgroundImage: `url(${"http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/"+props.restraunt.venue_photo_arr[0]})`}}>
      </div>
      <div className="restrauntImageDiv-1 row img-responsive img-rounded row-eq-height" onClick={props.changeImage} id={props.restraunt.venue_id} style={{backgroundImage: `url(${"http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/"+props.restraunt.venue_photo_arr[1]})`}}>
      </div>
     </div>

     <div className="col-xs-8">
      <div className="restrauntImageDiv-0 row img-responsive img-rounded row-eq-height" onClick={props.changeImage} id={props.restraunt.venue_id} style={{backgroundImage: `url(${"http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/"+props.restraunt.venue_photo_arr[2]})`}}>
      </div>
     </div>
    </div>
     <div className="restraunt-name"  style={{width:"100%"}}>{props.restraunt.venue_name}</div>
     <div className="restraunt-type">{props.restraunt.venue_category}</div>
     <div className="restraunt-address">
        <div className="address-locality">
        {props.restraunt.venue_address}
        </div>
        <div className="address-region">
        {props.restraunt.venue_city},{props.restraunt.venue_country}
        </div>
     </div>
     <div className="curator-status">
      <Curator status={props.restraunt.venue_friend_grabbd_state } />
     </div>
     <div className="comment-status">
      <div className="commentor">
      <b> {props.restraunt.venue_featured_comment_user}</b>
      </div>
      <div className="comment">
      {props.restraunt.venue_featured_comment}
      </div>
     </div>
     <hr />
     </div>
  )
}


export default Restraunt;
