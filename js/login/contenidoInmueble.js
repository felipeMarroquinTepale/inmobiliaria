
  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  function serial_maker () {
  
    var prefix = '';
    var seq = 0;
    return {
      set_prefix: function (p) {
        prefix = String(p);
      },
      set_seq: function (s) {
        seq = s;
      },
      gensym: function () {
        var result = prefix + seq;
        seq += 1;
        return result;
      }
    };
  };

  window.onload = function(){

    const item = {
        "id": 0,
        "name": "",
        "description": "",
        "month": "",
        "tipo": ""
      }

    listaImagenes.innerHTML = ``;
    itemList = JSON.parse(localStorage.getItem('listItems')) ?? []


    
    if(isObjEmpty(itemList)){

        let seqer = serial_maker()
        serial_maker().set_prefix('');
        serial_maker().set_seq('100');
        item.id = serial_maker().gensym()
        item.name  = "Felipe"
        item.month  = "20000"
        item.description = "La propiedad cuenta con:250 metros cuadrados, planta numero 3. Numero de recibo unico: 298df2"
        item.tipo = "Departamento"
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
            <button class="buttonList" id="boton-ubicacion" title="ubicación iconos" onclick="gps(${value.id}" onclick="window.location.href = 'ubicacion.html'" type="submit">ubicacion</button>
            <button  class="buttonList2" id=""  onclick="find(${value.id})" onclick="window.location.href = 'inmuebleDetails.html'">detalles</button>
            <button  class="buttonList3" id="" onclick="removeData(${value.id})" onclick="window.location.href = 'eliminarEspacio.html'" >eliminar</button>
            </li>`
    
    })
}



