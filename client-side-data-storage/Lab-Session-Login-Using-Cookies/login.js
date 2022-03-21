'use strict'

window.onload = function() {

  const username = 'cheyun';
  const password = '123456';


  // Handle Button Event
  document.getElementById('login-button').addEventListener('click', function() {
    const formUsername = document.getElementById('formUsername').value;
    const formPassword = document.getElementById('formPassword').value;

    if(username === formUsername && password === formPassword){
      createCookie('loggedIn', true);
      createCookie('loginUsername', username);
      createCookie('visits', 1);
      window.location = 'index.html'; // redirect to home page
    }else if(formUsername === '' || formPassword === ''){
      alert('This fields cannot be empty!');
    }else{
      alert('Username or Password is wrong!');
    }

  });

  function createCookie(name, value){
    // Key Value Pairs
    const keyValue = name + '=' + value;

    // Expiration
    const now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000);

    const expires = 'expires=' + now.toUTCString();

    // Cookie String
    const cookieStr = keyValue + ';' + expires;

    // Create cookie
    document.cookie = cookieStr;
  }

};
