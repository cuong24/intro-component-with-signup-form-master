function validateForm(){
  let fname_span = document.querySelector("form > span.fname");
  let lname_span = document.querySelector("form > span.lname");
  let email_span = document.querySelector("form > span.email");
  let pwd_span = document.querySelector("form > span.pwd");
  let fname = document.forms["main-form"]["fname"].value;
  let lname = document.forms["main-form"]["lname"].value;
  let email = document.forms["main-form"]["email"].value;
  let pwd = document.forms["main-form"]["pwd"].value;
  let email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = true;

  // Reset state
  fname_span.classList.remove("error");
  lname_span.classList.remove("error");
  email_span.classList.remove("error");
  pwd_span.classList.remove("error");
  fname_span.children[1].classList.add("hidden");
  lname_span.children[1].classList.add("hidden");
  email_span.children[1].classList.add("hidden");
  pwd_span.children[1].classList.add("hidden");

  if (fname == "") {
    fname_span.classList.add("error");
    fname_span.children[1].innerHTML = 'First name cannot be empty';
    fname_span.children[1].classList.remove("hidden");
    valid = false;
  }
  
  if (lname == "") {
    lname_span.classList.add("error");
    lname_span.children[1].innerHTML = 'Last name cannot be empty';
    lname_span.children[1].classList.remove("hidden");
    valid = false;
  }

  if (email == "") {
    email_span.classList.add("error");
    email_span.children[1].innerHTML = 'Email cannot be empty';
    email_span.children[1].classList.remove("hidden");
    valid = false;
  } else{
    if (!email_regex.test(email)) {
      email_span.classList.add("error");
      email_span.children[1].innerHTML = 'Email is not correct';
      email_span.children[1].classList.remove("hidden");
      valid = false;
    }
  }

  if (pwd == "") {
    pwd_span.classList.add("error");
    pwd_span.children[1].innerHTML = 'Password cannot be empty';
    pwd_span.children[1].classList.remove("hidden");
    valid = false;
  }

  return valid;
}