import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

class ListItems extends Component {

  constructor(props) {
    super(props);
    this.state = { items : [] };
  }


  componentDidMount(){

    let query = '';
    let url = '';

    if ( this.props.location.state !== undefined ) {
      query = this.props.location.state.terms;
      url = `http://localhost:3001/api/items?q=${query}`;
    } else {
      query = this.props.history.location.search;
      url = `http://localhost:3001/api/items${query}`;
    }

    fetch( url, { method: 'GET'} )
    .then((response) => {
      if ( response.ok ) {
       return response.json().then(data => {
        this.setState(data);
      });
     }
   })
    .catch((err) => {
      console.log('Ocorreu um problema a operação de busca: ' + err.message);
    });
  }

  render() {

    const itemsResultSearch = this.state.items.map((el) => {

      const { id, title, picture, price, condition } = el;
      const { amount, currency, decimals } = price;

      return (
        <li key={id} className="item">
          <Link to={`/item/${id}`} title={title} className="link">
            <div className="main-info">
              <img className="item-image" src={picture} alt={title} />
              <div className="info">
                <p className="item-price">{currency} {amount},{decimals}</p>
                <h2 className="item-title">{title}</h2>
              </div>
            </div>
            <p className="item-conditions">{condition}</p>
          </Link>
        </li>
        )

    })


    return (
      <div>
        <Breadcrumb/>
        <section className="site-list-items">
          <div className="container">
          <ol className="list-items">
            { itemsResultSearch }
          </ol>
        </div>
        </section>
      </div>
      );
  }
}


export default ListItems;