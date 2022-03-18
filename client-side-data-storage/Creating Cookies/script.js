
window.onload = function() {

  // Key Value
  const keyValue = 'login=32asdasd2asd'; //숫자들은 해쉬토큰이라고 불리며 아무숫자,영어조합 해도됨

  // Expiration
  const now = new Date();
  now.setTime(now.getTime() + 24 * 60 * 60 * 1000); //24 = 1day, 24hour = 24* 60min , 60min = 1sx60 x60, 1000ms = 1s -> 1more day after now

  const expires = 'expires=' + now.toUTCString(); //convert data to string

  // Cookie String
  const cookie = keyValue + ';' + expires;

  // Create Cookie
  document.cookie = cookie;

};
