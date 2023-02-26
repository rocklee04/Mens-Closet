
    let Cart = JSON.parse(localStorage.getItem("items")) || [];
    
    let productCont = document.getElementById("product-container");
    let sortbysel = document.getElementById("sortby");

    let data = [];
    async function Fetchdata() {
      try{
        let res = await fetch('https://rocklee.pythonanywhere.com/shirts')
        res = await res.json();
        data = res.shirtsInfoList;     
        console.log(data);   
        Display(data);
        
      }catch(err) {
        console.log(err);
      }
    }
    Fetchdata();

    function Display(data) {
      productCont.innerHTML = "";
      data.forEach((product) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("h4");
        let btn = document.createElement("button");

        image.src = product.image_url;
        name.textContent = product.title;
        price.textContent = `$${product.price}`;
        btn.textContent = "Add to Bag";
        

        btn.addEventListener("click", function() {
          if(checkDuplicate(product)) {
            alert("Product Already in Cart")
          }
          else {
            Cart.push({...product, quantity:1});
            localStorage.setItem("items", JSON.stringify(Cart));
            alert("Product Added To Cart");
          }
        })


        console.log(Cart)
        card.append(image, name, price, btn);
        productCont.append(card);
      });
    }

    function checkDuplicate(product){
      for(let i = 0; i<Cart.length; i++) {
        if(Cart[i].id == product.id) {
          return true;
        }
      }
      return false;
    }

    sortbysel.addEventListener("change", function() {

      if(sortbysel.value === "ab") {
        Display(data);
      }else {
        if(sortbysel.value == "htl"){
          let filtered = data.sort(function(a, b){
            return b.price - a.price;
          });
          Display(filtered);
        }
        if(sortbysel.value == "lth") {
          let filtered = data.sort(function(a, b) {
            return a.price - b.price;
          });
          Display(filtered);
        }
      }
   
    })

  let park = document.getElementById("pv");
  let peter =document.getElementById("pe");
  let ray = document.getElementById("Ray");
  let van = document.getElementById("VAN");
  let arrow = document.getElementById("ARROW");


  park.addEventListener("click", (event) => {
    let isChecked = event.target.checked;
    if(!isChecked) {
      Display(data);
    }
    else {
      let filtered = data.filter((el) => (el.title == park.value))
      Display(filtered);
    }
    
  })

  peter.addEventListener("click", (event) => {
    let isChecked = event.target.checked;
    if(!isChecked) {
      Display(data);
    }
    else {
      let filtered = data.filter((el) => (el.title == peter.value))
      Display(filtered);
    }
    
  })
  ray.addEventListener("click", (event) => {
    let isChecked = event.target.checked;
    if(!isChecked) {
      Display(data);
    }
    else {
      let filtered = data.filter((el) => (el.title == ray.value))
      Display(filtered);
    }
    
  })
  van.addEventListener("click", (event) => {
    let isChecked = event.target.checked;
    if(!isChecked) {
      Display(data);
    }
    else {
      let filtered = data.filter((el) => (el.title == van.value))
      Display(filtered);
    }
    
  })
  arrow.addEventListener("click", (event) => {
    let isChecked = event.target.checked;
    if(!isChecked) {
      Display(data);
    }
    else {
      let filtered = data.filter((el) => (el.title == arrow.value))
      Display(filtered);
    }
    
  })
