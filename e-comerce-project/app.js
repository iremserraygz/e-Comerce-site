 const wrapper =  document.querySelector(".wrapper");

 const Menu = document.querySelectorAll(".Menu");

Menu.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("You clicked!"+ index)
    });
});

// Arama işlevi
function searchProducts() {
    let input = document.querySelector(".searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h3").innerText.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
