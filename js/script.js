/* cookiebar */

function checkCookies(){
    if(!localStorage.unz_cookies_accepted) {
      var cookies_message = document.getElementById("cookies-message"); 
      cookies_message.style.display="block" 
    } 
  } 
  window.onload = checkCookies;

  function closeCookieBanner(){ 
    localStorage.unz_cookies_accepted = true; 
    document.getElementById("cookies-message-container").removeChild(document.getElementById("cookies-message"));
  }