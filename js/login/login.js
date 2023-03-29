const usuarios = [
    {
        "usuario": "felipe",
        "password": "felipe",
        "email": "felipe@gmail.com",
    }
]

let searchUser = (usuario, password, email) => {
    for(let x = 0 ; x <= usuarios.length;  x ++){
        if (usuario == usuarios[x].usuario && password == usuarios[x].password && email == usuarios[x].email) {
            console.log("Entro IF ");
            window.location = "loginUserLogueado.html";
        }else{
            alert("El usuario no existe")
        }
        
    }

}

/**
 *  if (usuario == undefined || password == undefined || email == undefined) {
        alert("Es necesario ingresar todos los datos")
    }else if (usuario == "" || password == "" || email== "") {
        alert("Es necesario ingresar todos los datos")
 * 
 */

        /*** 
function Login() {
   
    let usuario = document.querySelector("#uname").value;
    let password = document.querySelector("#psw").value;
    let email = document.querySelector("#email").value;

    console.log("Entro aqui "+ " usuario --> "+ usuario + " password -> "+ password + " email"+ email);

   if(email == undefined || email == ""){
        document.getElementById('email').style.borderBlockEndColor = 'red';
        div2 = document.getElementById('flotante');
        div2.style.display = '';
        flag = false
   }else{
    if( !(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) ){    
        document.getElementById('email').style.borderBlockEndColor = 'red';
        div = document.getElementById('flotante');
        div.style.display = '';
        flag = false
    }
   }
    

   if(usuario == undefined || usuario == ""){
    document.getElementById('uname').style.borderBlockEndColor = 'red';
        div = document.getElementById('flotante2');
        div.style.display = '';
    flag = false

   }else{
    if( !(/^\s+$/.test(usuario))){
        document.getElementById('uname').style.borderBlockEndColor = 'red';
        div = document.getElementById('flotante2');
        div.style.display = '';
        flag = false;
    }

   }


   if(password == undefined || password == ""){
    document.getElementById('psw').style.borderBlockEndColor = 'red';
        div2 = document.getElementById('flotante3');
        div2.style.display = '';
    flag = false

   }else{
    if( !(/^\s+$/.test(password)) ){
        document.getElementById('psw').style.borderBlockEndColor = 'red';
        div2 = document.getElementById('flotante3');
        div2.style.display = '';
        flag = false;
    }

   }

if(flag){
    document.write(searchUser(usuario, password, email))
}




} 
*/


function Login(){

    let usuario = document.querySelector("#uname").value;
    let password = document.querySelector("#psw").value;
    let email = document.querySelector("#email").value;
    console.log("Entro aqui "+ " usuario --> "+ usuario + " password -> "+ password + " email"+ email);


    document.write(searchUser(usuario, password, email))
    
    
}




function register() {
   
    let usuario = document.querySelector("#uname").value;
    let password = document.querySelector("#psw").value;
    let email = document.querySelector("#email").value;
    let flag = false;

    console.log("Entro aqui "+ " usuario --> "+ usuario + " password -> "+ password + " email --> "+ email);
    console.log(usuarios)
    for(let x = 0 ; x <= usuarios.length;  x ++){
        if (usuario == usuarios[x].usuario && password == usuarios[x].password && email == usuarios[x].email) {
            flag = true
            break
        }
    }

    if(!flag){
        usuarios.push({"usuario": usuario ,
        "password": password,
        "email": email
        })
        alert("Registro creado con exito")
    }else{
        alert("Ya existe un registro")
    }
    

    
    

} 