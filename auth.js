const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const firstname = getValue("firstname");
    const lastname = getValue("lastname");
    const email = getValue("email");
    const password = getValue("password");
    const city = getValue("city");
    const street = getValue("street");
    const number = getValue("number");
    const zipcode = getValue("zipcode");
    const lat = getValue("lat");
    const long = getValue("long");
    const phone = getValue("phone");
    const info = {
        email,
        username,
        password,
        name:{
            firstname,
            lastname,
        },
        address:{
            city,
            street,
            number,
            zipcode,
            geolocation:{
                lat,
                long,
            }
        },
        phone,
    };
    fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
const handleLogin = (event) => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");
    console.log(username, password);
    if ((username, password)) {
      fetch("'https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          if (data.token && data.user_id) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
            window.location.href = "index.html";
          }
        });
    }
};