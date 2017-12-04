import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import SubmitSearch from './../1-atoms/SubmitSearch';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = { termsSearch: '' };
    this.formPreventDefault = this.formPreventDefault.bind(this);
    this.setTermsSearch = this.setTermsSearch.bind(this);
  }

  formPreventDefault(e) {
    e.preventDefault();
    this.props.history.push({
     pathname: '/items',
     search: `?q=${this.state.termsSearch}`,
     state: { terms: this.state.termsSearch }
   });
  }

  setTermsSearch(e) {
    this.setState( { termsSearch: e.target.value } );
  }

  render() {
    return (
     <form className="site-search-items" onSubmit={this.formPreventDefault}>
      <input 
        onChange={this.setTermsSearch}
        value={this.state.termsSearch}
        type="search"
        className="form-input"
        name="input-search-main"
        id="input-search-main"
        placeholder="Digite o que precisa..."/>
      <SubmitSearch/>
     </form>
     );
  }
}

export default withRouter(SearchForm);


