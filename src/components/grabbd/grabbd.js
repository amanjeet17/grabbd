import React, { Component } from 'react';
import Restraunt from './restraunt';
import ImageHolder from './imageHolder';
let array;
let pageLimit;
let pagearr;
class Grabbd extends Component{
constructor(props){
  super(props);
  this.state = {
    mainImageUrl:"grabbd.jpeg",
    mainImageId:"#",
    page:1
  }
}

firstPage = (e) =>{
  let p=this.state.page;
  let item = this.props.imageData.length;
  pageLimit = item/5;
   pagearr = Array.from(new Array(pageLimit), () => 0);
  let offset = ((p+1)*5);
   array = this.props.imageData.slice((p*5),offset );

}

changePage = (e) =>{
  let x=e.target.id;
  let p=parseInt(x);
  let item = this.props.imageData.length;
  let pageLimit = item/5;
  let offset = ((p+1)*5);
   array = this.props.imageData.slice((p*5),offset );
  this.setState({
    page: p
  })

}

changeImage = (e) => {
  const imgSrc =e.target.style.backgroundImage;
  let x =imgSrc.length;
  let y= imgSrc.substring(5,x-2)
  const imgId='#'+e.target.id;
  this.setState((prevState) => ({
        mainImageUrl: y,
        mainImageId: imgId,
        pageLoag:1
      }));
}




  render() {
    this.firstPage()
    return (
      <div>
      <div className="col-xs-12 col-sm-6" style={{    marginTop: "70px"}}>

      {
        array.map((restraunt,index) =>{
          return(
          <Restraunt key={index} restraunt={restraunt} changeImage={this.changeImage} />
          )
        })
      }
      <div id="game">
      <ul className="pagination" onClick={this.changePage}>
      {
        pagearr.map((obj,i) =>{
          return(
          <li key={i} id={i}><a id={i}>{i+1}</a></li>
          )
        })
      }
      </ul>
      </div>
      </div>
      <ImageHolder state={this.state} />
      </div>
    );
  }
}

export default Grabbd;
