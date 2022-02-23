let signUpForm = () =>{
    document.getElementById('cen').innerHTML = `
        <div class="user">
            <form class="form" onsubmit='signUp()'>
                <p>Usuario</p>
                <input type="text" class="bordeinterior" id="nombre" name="nombre" required>
                <p>Email</p>
                <input type="email" class="bordeinterior" id="email" name="email" required>
                <p>Contraseña</p>
                <input type="password" class="bordeinterior" id="password" name="password" required><br>
                <div class="in">
                    <input type="submit"  class="submit" value="Enviar" > 
                </div>
            </form>
        </div>`
}

let logForm = () =>{
    document.getElementById('cen').innerHTML = `
        <div class="user">
            <form class="form" onsubmit='logear()'>
                <p>Usuario</p>
                <input type="text" class="bordeinterior" id="nombre" name="nombre">
                <p>Contraseña</p>
                <input type="password" class="bordeinterior" id="password" name="password"><br>
                <div class="in">
                    <input type="submit"  class="submit" value="Ingresar"> 
                </div>
                <div id="error">
                </div>
            </form>
        </div>`
}

let signUp = (e)=>{
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let usuario = {nombre: nombre, password: password, email: email};
    let json = JSON.stringify(usuario);
    localStorage.setItem('Usuarios', json);

    logForm()
}

let logear = (e)=>{
    event.preventDefault()
    
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    let user = JSON.parse(localStorage.getItem('Usuarios'))

    if(nombre != user.nombre){
        document.getElementById('error').innerHTML= `<p class='mensajeerror'>¡Nombre incorrecto!</p>`
    } else if (nombre == user.nombre && password == user.password) {
        log = nombre
        console.log(nombre)
        console.log(log)
        document.getElementById('error').innerHTML= `<p class='mensaje'>Ingresando...</p>`
        setTimeout(() => { window.location='juegos.html'}, 3000)
    } else{
        document.getElementById('error').innerHTML= `<p class='mensajeerror'>¡Password incorrecto!</p>`
    }
}

let option = () =>{
    log != null ? window.location='juegos.html' : window.location='registrar.html'
}

let log = "";


