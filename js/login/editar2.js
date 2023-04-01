const valores = window.location.search;
console.log(valores);
const urlParams = new URLSearchParams(valores);
const id = urlParams.get('id');
console.log(id)
window.onload = function(){
    let itemsList = JSON.parse(localStorage.getItem('listItems')) ?? []
    itemsList.forEach(function (value){
        if(value.id == id){
            console.log(id);
            document.getElementById('rentmont').value = value.month
            document.getElementById('uname').value = value.name
            document.getElementById('caractprop').value = value.description
            document.getElementById('tiponmueble').value = value.tipo
        }
    })
}



function updateSpace(){


    // validateclick();

    let itemsList2 = JSON.parse(localStorage.getItem('listItems')) ?? []
    itemsList2.forEach(function(value){
        if(value.id == id){
            console.log(id);
            value.month = document.getElementById('rentmont').value
            value.name = document.getElementById('uname').value
            value.description  = document.getElementById('caractprop').value
            value.tipo = document.getElementById('tiponmueble').value
        }
    });

    // localStorage.clear();
    localStorage.setItem('listItems', JSON.stringify(itemsList2))


    if(uname.value=='' || rentmont.value=='' || caractprop.value==''|| tiponmueble.value==''){
        alert("Necesitas completar el formulario")
    }else{
        alert( "Inmobiliaria Actualizada")
        setTimeout(() => document.location.href = "contenidoInmuebles.html", 1000);
    }
}



function editar(){
    setTimeout(() => document.location.href = "modificarEspacio.html?id="+id, 1000);
}






// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form = document.getElementsByTagName('form')[0];

const uname = document.getElementById('uname');
const rentmont = document.getElementById('rentmont');
const caractprop = document.getElementById('caractprop');
const tiponmueble = document.getElementById('tiponmueble');


const unameError = document.querySelector('#uname + span.error');
const rentmontError = document.querySelector('#rentmont + span.error');
const caractpropError = document.querySelector('#caractprop + span.error');
const tiponmuebleError = document.querySelector('#tiponmueble + span.error');

const button = document.querySelector('#button');
var done = 0;


const item = {
  "uname": "",
  "rentmont": "",
  "caractprop": "",
  "tiponmueble": ""
}

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

rentmont.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (rentmont.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    rentmontError.innerHTML = ''; // Restablece el contenido del mensaje
    rentmontError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError(2);
  }
});

caractprop.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (caractprop.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    caractpropError.innerHTML = ''; // Restablece el contenido del mensaje
    caractpropError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError(3);
  }
});

tiponmueble.addEventListener('input',function(event){
    // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (tiponmueble.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    tiponmuebleError.innerHTML = ''; // Restablece el contenido del mensaje
    tiponmuebleError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError(3);
  }
})



function showError(opt) {

  switch (opt) {
    case 1:
      if (uname.validity.valueMissing) {
        // Si el campo está vacío
        // muestra el mensaje de error siguiente.
        unameError.textContent = 'El campo es requerido.';
      } else if (uname.validity.tooShort) {
        // Si los datos son demasiado cortos
        // muestra el mensaje de error siguiente.
        sizeInput = uname.minLength
        sizeInt = uname.value.length
        unameError.textContent = 'El valor debe tener longitud minima de ' + sizeInput + ' caracteres; ha introducido ' + sizeInt + '.';
      }

      unameError.className = 'error activo';

      break;

    case 2:
      if (rentmont.validity.valueMissing) {
        // Si el campo está vacío
        // muestra el mensaje de error siguiente.
        rentmontError.textContent = 'El campo es requerido.';
      }
      // Establece el estilo apropiado
      rentmontError.className = 'error activo';
      break;

    case 3:
      if (caractprop.validity.valueMissing) {
        // Si el campo está vacío
        // muestra el mensaje de error siguiente.
        caractpropError.textContent = 'El campo es requerido.';
      } else if (caractprop.validity.tooShort) {
        // Si los datos son demasiado cortos
        // muestra el mensaje de error siguiente.
        sizeInput = caractprop.minLength
        sizeInt = caractprop.value.length
        caractpropError.textContent = 'El valor debe tener longitud minima de ' + sizeInput + ' caracteres; ha introducido ' + sizeInt + '.';

      }
      // Establece el estilo apropiado
      caractpropError.className = 'error activo';
      break;

      case 4:
        if (tiponmueble.validity.valueMissing) {
          // Si el campo está vacío
          // muestra el mensaje de error siguiente.
          tiponmuebleError.textContent = 'El campo es requerido.';
        } else if (tiponmueble.validity.tooShort) {
          // Si los datos son demasiado cortos
          // muestra el mensaje de error siguiente.
          sizeInput = tiponmueble.minLength
          sizeInt = tiponmueble.value.length
          tiponmuebleError.textContent = 'El valor debe tener longitud minima de ' + sizeInput + ' caracteres; ha introducido ' + sizeInt + '.';

        }
        // Establece el estilo apropiado
        tiponmuebleError.className = 'error activo';
        break;

  }
}



function validateclick() {

  button.addEventListener('click', function (event) {
    // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

    if (!uname.validity.valid || uname.value.length <= 0) {
      // Si no es así, mostramos un mensaje de error apropiado
      showError(1);
      // Luego evitamos que se envíe el formulario cancelando el evento
      event.preventDefault();
    }
    if (!rentmont.validity.valid || rentmont.value.length <= 0) {
      // Si no es así, mostramos un mensaje de error apropiado
      showError(2);
      // Luego evitamos que se envíe el formulario cancelando el evento
      event.preventDefault();
    }
    if (!caractprop.validity.valid || caractprop.value.length <= 0) {
      // Si no es así, mostramos un mensaje de error apropiado
      showError(3);
      // Luego evitamos que se envíe el formulario cancelando el evento
      event.preventDefault();
    }

    if (!tiponmueble.validity.valid || tiponmueble.value.length <= 0) {
        // Si no es así, mostramos un mensaje de error apropiado
        showError(3);
        // Luego evitamos que se envíe el formulario cancelando el evento
        event.preventDefault();
      }
  });

}



