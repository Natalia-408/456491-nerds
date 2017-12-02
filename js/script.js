var link = document.querySelector(".feedback");
var popup = document.querySelector(".container-form");
var close = popup.querySelector(".btn-form-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");


    link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("container-form-show");
		 
      login.focus();
  	});
	
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("container-form-show");
	});
	
	form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин и пароль");
    } else {
      localStorage.setItem("login", login.value);
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("container-form-show")) {
        popup.classList.remove("container-form-show");
      }
    }
  });
