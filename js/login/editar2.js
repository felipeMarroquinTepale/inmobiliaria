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


    alert( "Inmobiliaria Actualizada")
    setTimeout(() => document.location.href = "contenidoInmuebles.html", 1000);
}
function editar(){
    setTimeout(() => document.location.href = "modificarEspacio.html?id="+id, 1000);
}
