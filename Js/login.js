function loguear(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "Jose" && password == "1234") {
        window.location = "/index.html";
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }

}