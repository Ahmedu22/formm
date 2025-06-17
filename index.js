document.getElementById("userForm")
.addEventListner("submit", function (e){
    e.preventDefault();
});

const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
}
fetch("http//localhost:3000/users", {
    method: "post",
    headers:{
        "content-type": "application/json",
    },
    body: JSON.stringify(userData),
})