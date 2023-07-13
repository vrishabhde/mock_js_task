function signup(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if(name && email && password && confirmpassword){
        if(password.length >=8 && confirmpassword.length >=8){
            if(password == confirmpassword){
                var ls = JSON.parse(localStorage.getItem("user")) || [];
                    var flag = false;
                    for(var i=0;i<ls.length;i++){
                    if(ls[i].email == email){
                        flag = true;
                    }
                }
                if(flag == false){
                    var userdata = {name,email,password,confirmpassword};
                    ls.push(userdata)
                    localStorage.setItem("user", JSON.stringify(ls));
                    alert("registration success");
                    window.location.href="./login.html";
                }else{
                    alert("user already exist");
                }
            }else{
                alert("password not matched");
            }
        }else{
            alert("password should contain minimum of 8 digit");
        }
    }else{
        alert("all fields are mandatory");
    }
}