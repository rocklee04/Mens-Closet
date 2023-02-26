let data = JSON.parse(localStorage.getItem("account-data"));
    if(data === null) {
      data = [];
    }
console.log(data);
    let email = document.getElementById("email");
function submit() {
    for(let i = 0; i< data.length; i++) {
        if(data[i].email == email.value) {
            alert("Your order is succesfully placed");
        }
        else {
            alert("Wrong Credentials");
        }
        
        console.log("true");
        localStorage.clear();
        setTimeout(() => {
        location.replace("./index.html");
        }, 1000);
    }
}    
console.log("true");

let submitbtn = document.getElementById("place");
 
submitbtn.addEventListener(("click"), function() {
    submit();
})