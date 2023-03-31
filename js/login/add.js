
const uname = document.getElementById('uname');
const rentmont = document.getElementById('rentmont');
const caractprop = document.getElementById('caractprop');
const tiponmueble = document.getElementById('tiponmueble');
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

function addInmobiliario(){
    const item = {
        "id": 0,
        "name": "",
        "description": "",
        "month": "",
        "tipo": ""
      }
      
    let seqer = serial_maker()
        serial_maker().set_prefix('');
        serial_maker().set_seq('100');
        item.id = serial_maker().gensym()
        item.name  = uname.value
        item.month  = rentmont.value
        item.description = caractprop.value
        item.tipo = tiponmueble.value
        itemList.push(item)
        localStorage.setItem('listItems', JSON.stringify(itemList))

    

    alert( "Inmobiliaria Registrada")
    setTimeout(() => document.location.href = "contenidoInmuebles.html", 1000);

}