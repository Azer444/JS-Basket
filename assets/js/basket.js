let products = [];

if (localStorage.getItem("products" != null)) {
    products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body");




for (const product of products) {
    tableBody.innerHTML += `<tr>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
  </tr>`
}