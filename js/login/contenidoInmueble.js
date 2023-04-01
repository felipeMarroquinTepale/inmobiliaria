
  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  window.onload = function(){

    const item = {
        "id": 0,
        "name": "",
        "description": "",
        "month": "",
        "tipo": "",
        "comprador":""
      }

    listaImagenes.innerHTML = ``;
    itemList = JSON.parse(localStorage.getItem('listItems')) ?? []


    
    if(isObjEmpty(itemList)){

        item.id = getRandomInt(100)
        item.name  = "Felipe"
        item.month  = "20000"
        item.description = "La propiedad cuenta con:250 metros cuadrados, planta numero 3. Numero de recibo unico: 298df2"
        item.tipo = "Departamento"
        item.comprador = "Jose perez Leon"
        itemList.push(item)
        localStorage.setItem('listItems', JSON.stringify(itemList))

    }
    console.log(itemList)
    itemList = JSON.parse(localStorage.getItem('listItems')) ?? []
    itemList.forEach(function (value, i){

        var listaImagenes = document.getElementById('listaImagenes')
        console.log(value.name)
        listaImagenes.innerHTML += `
        <li>
            <img src="../inmobiliaria/img/contenidoInmuebles/imgContent.png" style="width: 25%" alt="Imagen 1">
            <p class="id">ID: ${i+1}</p>
            <p>Propietario:  ${value.name} . ${value.description} Tipo de inmueble: ${value.tipo}  </p>
            <p class="price">$ ${value.month}</p>
            <p>Nombre de comprador: ${value.comprador}</p>
            <button class="buttonList" id="boton-ubicacion" title="ubicación iconos"  onclick="window.location.href = 'ubicacion.html'" type="submit">ubicacion</button>
            <button  class="buttonList2" id=""   onclick="window.location.href = 'inmuebleDetails.html?id=${value.id}'">detalles</button>
            <button  class="buttonList3" id="" onclick="window.location.href = 'eliminarEspacio.html?id=${value.id}'" >eliminar</button>
            </li>`
    
    })
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



