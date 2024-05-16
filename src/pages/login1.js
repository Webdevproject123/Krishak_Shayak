import React, {Fragment} from 'react';
import Menu from "./Menu";
import "./styles.css";
import {signup} from "../services/user-service";


function login(){
    return(
        <Fragment>
         <div >
            <Menu/>
        </div>
         <section class="wrapper">
      <div class="form signup">
        <header>Signup</header>
        <form action="#">
          <input type="text" placeholder="Full name" required id="n1" />
          <input type="text" placeholder="Email address" required id="e1" />
          <input type="password" placeholder="Password" required id="p1"/>
          <input type="password" placeholder="Confirm Password" id="p2"/>
          <div class="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label for="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" onclick="create_account()"/>
        </form>
      </div>

      <div class="form login">
        <header>Login</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>

      
      <script src="loginscript.js"></script>
    </section>
    
        </Fragment>
    )
}

export default login;