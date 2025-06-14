import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class LoginPage extends BasePage {
    
    constructor(url){
    super(url)
  }



get registerTitle(){

return $('[data-test="register-link"]');


}


  get email(){
    return $('[id="email"]');
  }

  get password(){
    return $('[id="password"]');
  }

  async setEmail(email){
    await this.email.setValue(email);
  }

  async setPassword(password){
    await this.password.setValue(password);
  }



  get loginButton(){
    return $('[data-test="login-submit"]');
  }


get emailError(){
    return $('[id="email-error"]');
  }




 get passwordError(){
    return $('[id="password-error"]');
  }



  get loginError(){
    return $('[data-test="login-error"]');
  }






// expect.to
// getText()



 /*  async checkErrorMessage(message){
    await expect(this.errorMessage.getValue(message));
  }
 */

}


export default LoginPage;
