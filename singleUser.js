const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("id");
    fetch(`https://fakestoreapi.com/users/${param}`)
      .then((res) => res.json())
      .then((data) => displayDetails(data));
};

const displayDetails = (doctor) => {
    console.log(doctor);
    const parent = document.getElementById("doc-details");
    const div = document.createElement("div");
    div.classList.add("doc-details-container");
    div.innerHTML = `
    <div class="doc-info">
      <h1>Username: ${doctor.username} </h1>
      <h4>Email: ${doctor.email} </h4>
      <p>Firstname: ${doctor.name.firstname}</p>
      <p>Lastname: ${doctor.name.lastname}</p>
      <p>${doctor.address.city}</p>
      <p>${doctor.address.street}</p>
      <p>${doctor.address.number}</p>
      <p>${doctor.address.zipcode}</p>
      <p>${doctor.phone}</p>
    </div>
      `;
    parent.appendChild(div);
  };
  getparams();