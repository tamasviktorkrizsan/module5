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
    return $('[data-test="email"]');
  }

  get password(){
    return $('[data-test="password"]');
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

}


export default LoginPage;
