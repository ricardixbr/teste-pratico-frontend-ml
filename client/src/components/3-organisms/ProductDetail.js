import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

class ProductDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { item : {}, isLoading : "true" };
  }

  componentDidMount(){

    const id = this.props.match.params.id;    

    fetch( `http://localhost:3001/api/items/${id}`, { method: 'GET'} )
    .then((response) => {
      if ( response.ok ) {
       return response.json().then(data => {
        this.setState(data.item);
        this.setState({'isLoading' : false});
      });
     }
   })
    .catch((err) => {
      console.log('Ocorreu um problema a operação de busca: ' + err.message);
    });
  }

  render() {
    if ( !this.state.isLoading ) {
      const { picture, title, condition, sold_quantity, price, description } = this.state;
      const { currency, amount, decimals } = price;
      return (
        <div>
          <Breadcrumb/>
          <article className="product-detail">
            <div className="container">
              <div className="inner">
                <div className="product-headline">
                  <img className="product-image" src={picture} alt={title} />
                  <div className="price-info">
                    <p className="product-conditions">{condition} - {sold_quantity} vendidos</p>
                    <p className="product-title">{title}</p>
                    <p className="product-price">
                      <span className="main-value">{currency}{amount}</span>
                      <span className="cents">{decimals}</span>
                    </p>
                    <a href="" title="Comprar" className="action-button">Comprar</a>
                  </div>
                </div>
                <div className="more-info">
                  <h2 className="product-title">{title}</h2>
                  <p className="product-description">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        );
    } else {
      return null;
    }
  }
}

export default ProductDetail;
