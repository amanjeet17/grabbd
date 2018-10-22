import React from 'react';

const Curator = (props) => {
  return(
    <div className="col-xs-12">
    {
      props.status==="Like" ? <div>
       <div className="col-xs-3 col-sm-2" style={{paddingLeft:"0px"}}>
      <img src="likeFilledWhite@3x.png" className="like iconStyle img-responsive img-rounded" alt="Like"/>
      </div>
      <div className="col-xs-7 status"> Shammi likes this place</div>
      </div> : undefined
    }
    {
      props.status==="Love" ? <div>
      <div className="col-xs-3 col-sm-2" style={{paddingLeft:"0px"}}>
      <img src="loveFilledWhite@3x.png" className="love iconStyle img-responsive img-rounded" alt="Love" />
      </div>
      <div className="col-xs-7 status"> Shammi loves this place</div>
      </div> : undefined
    }
    {
      props.status==="Hate" ? <div>
      <div className="col-xs-3 col-sm-2" style={{paddingLeft:"0px"}}>
      <img src="dislikeFilledWhite@3x.png" className="hate iconStyle img-responsive img-rounded" alt="Hate" />
      </div>
      <div className="col-xs-7 status"> Shammi disliked this place</div>
      </div>: undefined
    }
    {
      props.status ==="Try" ?  <div>
        <div className="col-xs-3 col-sm-2" style={{paddingLeft:"0px"}}>
        <img src="tryFilledWhite@3x.png" className="try iconStyle img-responsive img-rounded" alt="Try" />
        </div>
        <div className="col-xs-7 status"> Shammi wants to try this place</div>
        </div> : undefined
    }
    </div>
  )
}

export default Curator;
