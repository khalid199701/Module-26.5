const loadUsers = () => {
    fetch(`https://fakestoreapi.com/users`)
        .then((res) => res.json())
        .then((data) => displayDetails(data))
        .catch((err) => console.log(err));
};

const displayDetails = (users) => {
    const parent = document.getElementById("doc-details");
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${user.id}</th>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.name.firstname}</td>
            <td>${user.name.lastname}</td>
            <td>${user.address.city}</td>
            <td>${user.phone}</td>
            <a class="btn btn-primary" target="_blank" href="singleUser.html?id=${user.id}">Details</a>
            <td></td>
        `;
        parent.appendChild(row);
    });
};

loadUsers();