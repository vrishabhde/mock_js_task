function login(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var currentuser;
    if (email && password) {
        var ls = JSON.parse(localStorage.getItem("user"));
        var flag = false;
        for (var i = 0; i < ls.length; i++) {
            if (ls[i].email == email && ls[i].password == password) {
                flag = true;
                currentuser = ls[i];
            }
        }
        if (flag == true) {
            localStorage.setItem("currentuser", JSON.stringify(currentuser));
            alert("login success");
            window.location.href='./home.html';
        } else {
            alert("credentials wrong");
        }
    }
}