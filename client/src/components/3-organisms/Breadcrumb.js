import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <section className="site-breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li className="item">
              <a href="" title="Item 1" className="link">Item 1</a>
            </li>
            <li className="item">
              <a href="" title="Item 2" className="link">Item 2</a>
            </li>
            <li className="item">
              <a href="" title="Item 3" className="link">Item 3</a>
            </li>
          </ol>
        </div>
      </section>
      );
  }
}

export default Breadcrumb;