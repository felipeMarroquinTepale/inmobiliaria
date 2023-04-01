const valores = window.location.search;
console.log(valores);
const urlParams = new URLSearchParams(valores);
const id = urlParams.get('id');
console.log(id)

function deleteSpace(){

    itemsList = JSON.parse(localStorage.getItem('listItems')) ?? []
    itemsList = itemsList.filter(function(value){ 
        return value.id != id; 
    });
    // localStorage.clear();
    localStorage.setItem('listItems', JSON.stringify(itemsList))


    alert( "Inmobiliaria Eliminada")
    setTimeout(() => document.location.href = "contenidoInmuebles.html", 1000);
}
function editar(){
    setTimeout(() => document.location.href = "modificarEspacio.html?id="+id, 1000);
}

function eliminar(){
    setTimeout(() => document.location.href = "eliminarEspacio.html?id="+id, 1000);
}

