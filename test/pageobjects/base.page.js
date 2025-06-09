import { browser } from '@wdio/globals'


export default class Page {
   

constructor(url) {

        this.url = url;

    }

    open() {
        return browser.url(this.url)
    }


}
