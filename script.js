async function getProductData(url) {
  let response = await fetch(url);
  let product = await response.json();
  return product;
}

getProductData("https://dummyjson.com/products?limit=10")
  .then((data) => data.products)
  .then((products) => {
    const productList = document.getElementById("productList");
    products.forEach((product) => {
      let content = `<div class="col-12 col-lg-4 mb-3">
          <div class="card">
            <img src="${product.images[0]}" class="card-img-top img-fluid" alt="product-photo" />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <button type="button" class="btn btn-primary">See more</button>
            </div>
          </div>
        </div>`;
      productList.innerHTML += content;
    });
  })
  .catch((error) => console.log("Fetching data failed...", error));
