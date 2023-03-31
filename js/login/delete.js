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