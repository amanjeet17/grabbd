import React from 'react';

const Topbar =() => {
  return(
      <div>
      <div className="container-fluid supertop"></div>
      <nav className="Topbar  col-xs-12" data-spy="affix" data-offset-top="0">
        <div className="container-fluid">
          <div className="navbar-header w3-hide-small col-sm-6">
            
            <a className="navbar-brand  " href="#" style={{color:"white"}}>GRABBD.com</a>
          </div>
          <div>
            <div className="col-sm-6 col-xs-12" id="myNavbar">
            <button type="button" className="btn btn-grabbd col-xs-5 col-sm-5">Create your own list</button>
            <button type="button" className="btn btn-grabbd col-xs-5 col-sm-5 ">Save your List</button>

            </div>
          </div>
        </div>
      </nav>
      </div>
    )
}
export default Topbar;
