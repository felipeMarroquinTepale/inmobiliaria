// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form  = document.getElementsByTagName('form')[0];

const uname = document.getElementById('uname');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const unameError = document.querySelector('#uname + span.error');
const emailError = document.querySelector('#email + span.error');
const pswError = document.querySelector('#psw + span.error');
const button = document.querySelector('#button');
var done=0;
uname.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (uname.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    unameError.innerHTML = ''; // Restablece el contenido del mensaje
    unameError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError(1);
  }
});

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError(2);
  }
});

psw.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (psw.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    pswError.innerHTML = ''; // Restablece el contenido del mensaje
    pswError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError(3);
  }
});



function showError(opt) {


  switch (opt) {
    case 1:
      if(uname.validity.valueMissing) {
        // Si el campo está vacío
        // muestra el mensaje de error siguiente.
        unameError.textContent = 'El campo es requerido.';
      }else if(uname.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            sizeInput = uname.minLength
            sizeInt = uname.value.length
            unameError.textContent = 'El valor debe tener longitud minima de ' + sizeInput + ' caracteres; ha introducido '+ sizeInt + '.';
          
       }else if(uname.validity.patternMismatch) {
        // Si el campo no contiene una dirección de correo electrónico
        // muestra el mensaje de error siguiente.
    
        unameError.textContent = 'El valor no debe contener mayusculas, numeros, espacios, caracteres especiales';
      
      }

      unameError.className = 'error activo';

    break;

    case 2:
      if(email.validity.valueMissing) {
        // Si el campo está vacío
        // muestra el mensaje de error siguiente.
        emailError.textContent = 'El campo es requerido.';
      }else if(email.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            sizeInput = email.minLength
            sizeInt = email.value.length
            emailError.textContent = 'El valor debe tener longitud minima de ' + sizeInput + ' caracteres; ha introducido '+ sizeInt + '.';
          
      }  else if(email.validity.typeMismatch) {
        // Si el campo no contiene una dirección de correo electrónico
        // muestra el mensaje de error siguiente.
    
        emailError.textContent = 'El valor debe coincidir en formato correo.';
      } 
    
      // Establece el estilo apropiado
      
      emailError.className = 'error activo';

    break;

    case 3:
      if(psw.validity.valueMissing) {
        // Si el campo está vacío
        // muestra el mensaje de error siguiente.
        pswError.textContent = 'El campo es requerido.';
      }else if(psw.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            sizeInput = psw.minLength
            sizeInt = psw.value.length
            pswError.textContent = 'El valor debe tener longitud minima de ' + sizeInput + ' caracteres; ha introducido '+ sizeInt + '.';
          
      } else if(psw.validity.patternMismatch) {
        // Si el campo no contiene una dirección de correo electrónico
        // muestra el mensaje de error siguiente.
    
        pswError.textContent = 'El valor no debe contener espacios, caracteres especiales';
      } 
    
      // Establece el estilo apropiado
      
      pswError.className = 'error activo';
    break;

  }
}

function validateclick(){
  button.addEventListener('click', function (event) {
    // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
  
    if(!uname.validity.valid || uname.value.length <= 0) {
      // Si no es así, mostramos un mensaje de error apropiado
      showError(1);
      // Luego evitamos que se envíe el formulario cancelando el evento
      event.preventDefault();
    }
    if(!email.validity.valid || email.value.length <= 0) {
      // Si no es así, mostramos un mensaje de error apropiado
      showError(2);
      // Luego evitamos que se envíe el formulario cancelando el evento
      event.preventDefault();
    }
    if(!psw.validity.valid || psw.value.length <= 0) {
      // Si no es así, mostramos un mensaje de error apropiado
      showError(3);
      // Luego evitamos que se envíe el formulario cancelando el evento
      event.preventDefault();
    }
  
  });

}




function login(){
  
  validateclick();

  if( (uname.value == "felipedmt") && (email.value == "felipe123@gmail.com") && (psw.value == "felipe12345")){
    alert("Estas logueado")
    setTimeout(()=> document.location.href="loginUserLogueado.html",1000);
  }else if(uname.value == '' && email.value == '' && psw.value == ''){
    alert("Necesitas completar el formulario")
  }else{
    alert("El cliente no existe")
  }

}


function register(){
  
  validateclick();

  if( (uname.value != '' && email.value != '' && psw.value != '')){
    alert("Estas registrado")
    setTimeout(()=> document.location.href="loginUserLogueado.html",1000);
  }else if(uname.value == '' && email.value == '' && psw.value == ''){
    alert("Necesitas completar el formulario")
  }else{
    alert("El cliente no existe")
  }

}

