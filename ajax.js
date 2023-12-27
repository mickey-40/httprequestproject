//Load all users
const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

// create function getusers
function getUsers (e) {
  e.preventDefault();


  const http = new XMLHttpRequest();


  http.open("GET", "users.json", true);

  http.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
    }
  }

  http.send();
}