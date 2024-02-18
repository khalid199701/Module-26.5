const loadProduct = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>displayProduct(data))
            .catch((err) => console.log(err));
};
const displayProduct = (products) => {
  products?.forEach(product => {
      const parent = document.getElementById("banner");
      const li = document.createElement("div");
      
      li.classList.add("col-lg-3");

      li.innerHTML = `
      <div class="">
        <img
          src=${product.image}
          class="card-img-top "
          loading="lazy"
          alt="..."
        />
      </div>
      <div class="card-body">
        <h3 class="card-title">${product.title.slice(0, 10)}</h3>
        <h5 class="card-title">${product.price}</h5>
        <p class="card-text">
          ${product.description.slice(0, 50)}
        </p>
        <a class="btn btn-primary" target="_blank" href="productDetails.html?id=${product.id}">Details</a>
      </div>
      `;

      parent.appendChild(li);
  });
};
const loadDoctors = (search) => {
    document.getElementById("doctors").innerHTML = "";
    console.log(search);
    fetch(
      `'https://fakestoreapi.com/products/?search=${
        search ? search : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          displyDoctors(data?.results);
        } 
        else {
          document.getElementById("doctors").innerHTML = "";
        }
    });
};
const displyDoctors = (doctors) => {
    doctors?.forEach((doctor) => {
      // console.log(doctor);
      const parent = document.getElementById("doctors");
      const div = document.createElement("div");
      div.classList.add("doc-card");
      div.innerHTML = `
          <img class="doc-img" src=${doctor.image} alt="" />
                <h5>${doctor?.title}</h5>
                <h6>${doctor?.description}</h6>
                
                <button > <a target="_blank" href="productDetails.html?doctorId=${
                  doctor.id
                }">Details</a> </button>
          `;
  
      parent.appendChild(div);
    });
  };

  const loadCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          const parent = document.getElementById("drop-spe");
          const li = document.createElement("li");
          li.classList.add("dropdown-item");
          li.innerHTML = `
            <li> <a target="_blank" href="category.html?doctorId=${item}">${item}</a></li>
          `;
          parent.appendChild(li);
        });
    });
};

loadProduct();
loadCategory();