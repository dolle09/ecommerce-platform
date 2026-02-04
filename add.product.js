function addProduct(){
  fetch("add_product.php",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      category_id: 1
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}