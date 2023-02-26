

let data = JSON.parse(localStorage.getItem("account-data"));
    if(data === null) {
      data = [];
    }
    let formEl = document.querySelector("form");
    let nameInp = document.getElementById("name");
    let emailInp = document.getElementById("email");
    let passwordInp = document.getElementById("password");

    
    formEl.addEventListener("submit", function(event) {
         event.preventDefault();

         let obj = {
          name: nameInp.value,
          email: emailInp.value,
          password: passwordInp.value,
         }
         console.log(obj)
         data.push(obj);
         localStorage.setItem("account-data", JSON.stringify(data));
       

          if(Object.keys(obj).length == 3){

            alert("Sign up Successful");
            setTimeout(() => {
              location.replace("./index.html");
              }, 1000);
  
            
          }
          else {
    
            alert("Wrong Credentials");
    
          }
          
    })