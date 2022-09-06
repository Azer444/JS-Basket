let basgetBtns = document.querySelectorAll("#product .card a");

let products = [];

if (localStorage.getItem("product" != null)) {
    products = JSON.parse(localStorage.getItem("products"))
}

basgetBtns.forEach(basgetBtn => {
    basgetBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDect = this.previousElementSibling.innerText;
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        let exitsProduct = products.find(m => m.id == productId);

        if (exitsProduct != undefined) {
            exitsProduct.count += 1;
        }else{
            products.push({
                id: productId,
                name: productName,
                desc: productDect,
                Image: productImage,
                count: 1
            });
        }


        localStorage.setItem("products", JSON.stringify(products));

    })
});