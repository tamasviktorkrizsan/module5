import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class IndexPage extends BasePage {
    
 
constructor(url){
    super(url)
  }


get sortTitle(){  


return $('/html/body/app-root/app-header/nav/div/div/div/ul/li[1]/a');

}


get dropdownMenu(){

return $('//*[@data-test="nav-menu"]');

}

get languageSelector(){

return $('//*[@id="language"]');

}


get logoutButton(){

    return $('//*[@data-test="nav-sign-out"]');
}


get DeButton(){
  return $('/html/body/app-root/app-header/nav/div/div/div/ul/li[1]/a');
}

get searchResults(){
  return $('/html/body/app-root/div/app-overview');
}


async checkSortTitleLanguage(text){  

  
    await expect(this.sortTitle.getValue(text));
  }


  async checkSearchResults(text){  

  
    await expect(this.searchResults.getValue(text));
  }



 get searchBox(){
    return $('[id="search-query"]');
  }

  async setSearchBox(text){
    await this.searchBox.setValue(text);
  }


  get searchButton(){
    return $('/html/body/app-root/div/app-overview/div[3]/div[1]/form[2]/div/button[2]');
  }













}


export default IndexPage;
