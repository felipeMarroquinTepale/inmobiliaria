const valores = window.location.search;
console.log(valores);
const urlParams = new URLSearchParams(valores);
const id = urlParams.get('id');
console.log(id)

window.onload = function(){
    let itemsList = JSON.parse(localStorage.getItem('listItems')) ?? []
    itemsList.forEach(function (value){
        if(value.id == id){


            var listaImagenes = document.getElementById('listaImagenes')
            console.log(value.name)
            listaImagenes.innerHTML += `
            <li>
                <img src="../inmobiliaria/img/contenidoInmuebles/imgContent.png" style="width: 25%" alt="Imagen 1">
                <p class="id">ID: ${value.id}</p>
                <p>Propietario:  ${value.name} . ${value.description} Tipo de inmueble: ${value.tipo}  </p>
                <p class="price">$ ${value.month}</p>
                <p>Nombre del comprador: ${value.comprador}</p>
                <button id="boton-editar" onclick="editar()" type="submit">Editar</button>
                <button id="boton-borrar" onclick="eliminar()"  type="submit">Borrar</button>
                </li>`

        }
    })
}

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

