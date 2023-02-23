let LSdata = JSON.parse(localStorage.getItem("account-data"))
   
    let formEl = document.querySelector("form");
    let email = document.getElementById("user")
        let password = document.getElementById("password");

        console.log(email.value, password.value)

      formEl.addEventListener("submit", function(event) {
        event.preventDefault();


        
        
        
        console.log(email, password)

        let flag =false;

        LSdata.forEach(function(el) {
          
          if(el.email == email.value && el.password == password.value) {

            flag = true;
            
          }
        });



        if(flag){

          alert("Log in Successful");

        }
        else {

          alert("Wrong Credentials");

        }
      });
