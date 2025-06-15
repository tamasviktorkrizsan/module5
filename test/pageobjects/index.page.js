import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class IndexPage extends BasePage {
    
 
  constructor(url){
    super(url)
  }


  get sortTitle(){  
    return $('.grid-title');
  }


  get accountTitle(){  
    return $('[data-test="page-title"]');
  }


  get searchTerm(){
    return $('[data-test="search-term"]');
  }


  get searchCaption(){
    return $('[data-test="search-caption"]');
  }


  get dropdownMenu(){
    return $('[data-test="nav-menu"]');
  }


  get logoutButton(){
    return $('//*[@data-test="nav-sign-out"]');
  }


  get languageSelector(){
    return $('[data-test="language-select"]');
  }

  get DeButton(){
    return $('[data-test="lang-de"]');
  }

  get searchResults(){
    return $$('a.card');
  }

  get cardTitle(){
    return $('[data-test="product-name"]');
  }

  get noResultsText(){
    return $('[data-test="no-results"]');
  }

 get searchBox(){
    return $('[id="search-query"]');
  }

  async setSearchBox(text){
    await this.searchBox.setValue(text);
  }

  get searchButton(){
    return $('[data-test="search-submit"');
  }

}

export default IndexPage;
