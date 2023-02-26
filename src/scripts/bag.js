     let Cart = JSON.parse(localStorage.getItem("items")) || [];


    let container = document.getElementById("cart-container");
    function display(Cart) {
      container.innerHTML = "";
      let totalorder = document.getElementById("order-quantity");
        totalorder.innerText = Cart.length;
      Cart.forEach((product, index) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("h4");
        let remove = document.createElement("button");
        let inc = document.createElement("button");
        let dec = document.createElement("button");
        let quantity = document.createElement("span");

        remove.classList.add("remove");
        inc.classList.add("plus");
        dec.classList.add("minus");

        image.src = product.image_url;
        name.innerText = product.title;
        price.innerText = `$${product.price}`;
        remove.innerText = "Remove";
        inc.innerText = "+";
        dec.innerText = "-";
        quantity.innerText = product.quantity;

        remove.addEventListener("click", () => {
          Cart = Cart.filter((pro,i) => {
            return i != index;
          })
          localStorage.setItem("cart", JSON.stringify(Cart));
          display(Cart);
        });

        inc.addEventListener("click", () => {
          product = product.quantity++;

          localStorage.setItem("cart", JSON.stringify(Cart))
          display(Cart);
        });

        dec.addEventListener("click", () => {
    
          if(product.quantity>1) {
            product = product.quantity--;
            localStorage.setItem("cart", JSON.stringify(Cart))
            display(Cart);
          }
        });

        

        let sum = 0;

        for(let i = 0; i<Cart.length; i++) {
          sum += Cart[i].price*Cart[i].quantity;
        }

        document.getElementById("cart-total").innerText = sum;

        let grandtotal = (sum + 17.95);
        document.getElementById("grand-total").innerText =`$${grandtotal}`;

        card.append(image, name, price, inc, quantity,dec, remove)
        container.append(card);
      });


    }
    display(Cart);