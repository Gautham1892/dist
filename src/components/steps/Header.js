import React from 'react';

function Header() {
  return (
    <div>
    <div style={{ backgroundColor: '#e88404', padding: '10px', height: '60px', display: 'flex', alignItems: 'center' }}>
      <p style={{ fontStyle: 'italic', color: 'white', textAlign: 'left', paddingLeft: '20px', margin: 0 }}>myDist</p>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-grey" style={{ backgroundColor: '#323236' }}>
      <a className="navbar-brand" href="#" style={{ color: '#d8e1e7' }}>myDist</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#" style={{ color: '#d8e1e7' }}>Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#" style={{ color: '#d8e1e7' }}>Features</a>
          <a className="nav-item nav-link" href="#" style={{ color: '#d8e1e7' }}>Pricing</a>
          <a className="nav-item nav-link " href="#" style={{ color: '#d8e1e7' }}>Disabled</a>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
