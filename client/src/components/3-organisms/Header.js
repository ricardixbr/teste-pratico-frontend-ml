import React, { Component } from 'react';
import Logo from './../1-atoms/Logo';
import SearchForm from './../2-molecules/SearchForm';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <Logo/>
          <SearchForm/>
        </div>
      </header>
      );
  }
}

export default Header;