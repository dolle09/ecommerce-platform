// Fetch products from backend
fetch("products.php")
.then(response => response.json())
.then(data => {
  let output = "";
  data.forEach(p => {
    output += `<p>${p.name} - $${p.price}</p>`;
  });
  document.getElementById("products").innerHTML = output;
})
.catch(err => {
  document.getElementById("products").innerHTML = "Failed to load products";
});