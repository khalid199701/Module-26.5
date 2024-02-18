const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("doctorId");
    console.log(param);
    fetch(`https://fakestoreapi.com/products/category/${param}`)
      .then((res) => res.json())
      .then((data) => displayDetails(data));
};

const displayDetails = (doctors) => {
    const parent = document.getElementById("doc-details");
    doctors.forEach(doctor => {
        const div = document.createElement("div");
        div.classList.add("doc-details-container");
        div.innerHTML = `
            <div class="doctor-img">
                <img class="h-50" src=${doctor.image} alt="" />
            </div>
            <div class="doc-info">
                <h1>${doctor.title}</h1>
                <h4>${doctor.price}</h4>
                <p>${doctor.description}</p>
            </div>
        `;
        parent.appendChild(div);
    });
};

getparams();