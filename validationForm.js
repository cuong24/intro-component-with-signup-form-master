function validateForm(){
  let fname_span = document.querySelector("form > span.fname");
  let lname_span = document.querySelector("form > span.lname");
  let email_span = document.querySelector("form > span.email");
  let pwd_span = document.querySelector("form > span.pwd");
  let fname = document.forms["main-form"]["fname"].value;
  let lname = document.forms["main-form"]["lname"].value;
  let email = document.forms["main-form"]["email"].value;
  let pwd = document.forms["main-form"]["pwd"].value;
  let valid = true;

  // Reset state
  fname_span.classList.remove("error");
  lname_span.classList.remove("error");
  email_span.classList.remove("error");
  pwd_span.classList.remove("error");

  if (fname == "") {
    fname_span.classList.add("error");
    console.log(fname_span.childNodes);
    fname_span.lastChild
    valid = false;
  }
  
  if (lname == "") {
    lname_span.classList.add("error");
    console.log(lname_span.childNodes);
    valid = false;
  }

  if (email == "") {
    email_span.classList.add("error");
    valid = false;
  }

  if (pwd == "") {
    pwd_span.classList.add("error");
    valid = false;
  }

  return valid;
}