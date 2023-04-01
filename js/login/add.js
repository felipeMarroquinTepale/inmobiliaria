
const uname = document.getElementById('uname');
const rentmont = document.getElementById('rentmont');
const caractprop = document.getElementById('caractprop');
const tiponmueble = document.getElementById('tiponmueble');
const comprador = document.getElementById('comprador');

let list = document.getElementById("myList");
itemList = JSON.parse(localStorage.getItem('listItems')) ?? []

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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function addInmobiliario(){
    const item = {
        "id": 0,
        "name": "",
        "description": "",
        "month": "",
        "tipo": "",
        "comprador":""
      }
      

        item.id = getRandomInt(100)
        item.name  = uname.value
        item.month  = rentmont.value
        item.description = caractprop.value
        item.tipo = tiponmueble.value
        item.comprador = comprador.value
        itemList.push(item)
        localStorage.setItem('listItems', JSON.stringify(itemList))

    

    alert( "Inmobiliaria Registrada")
    setTimeout(() => document.location.href = "contenidoInmuebles.html", 1000);

}