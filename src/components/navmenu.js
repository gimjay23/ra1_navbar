import React from 'react';
class Navmenu extends React.Component {
    render() {
        return(
        <ul className="App-lists">
          <li><a className="App-list" href="#home.html" target="_blank">HOME</a>|</li>
          <li><a className="App-list" href="#about.html" target="_blank">ABOUT US</a>|</li>
          <li><a className="App-list" href="#wwdo.html" target="_blank">WHAT WE DO</a>|</li>
          <li><a className="App-list" href="#affiliates.html" target="_blank">AFFILIATES</a>|</li>
          <li><a className="App-list" href="#careers.html" target="_blank">CAREERS</a>|</li>
          <li><a className="App-list" href="#contact.html" target="_blank">CONTACT US</a></li>
        </ul>
        )
    }
}

export default Navmenu;