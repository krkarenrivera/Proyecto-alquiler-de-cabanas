/*Funciones cabañas*/

function detalleCabana(){

    $.ajax({

        url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "GET",
        dataType :"JSON",
        success :function(respuesta){

            console.log(respuesta);
            mostrarTablaCab(respuesta.items)
        }
    });
}

function mostrarTablaCab(items){


    let myTable = "<table>";
     
    for(i=0 ; i < items.length;i++){
        
        myTable+= "<tr>";   
        myTable+= "<td>"+items[i].id +"</td>";
        myTable+= "<td>"+items[i].name+"</td>";
        myTable+= "<td>"+items[i].rooms +"</td>";
        myTable+= "<td>"+items[i].brand +"</td>";
        myTable+= "<td>"+items[i].category_id+"</td>";
        myTable+="<td><button onclick ='borrarCab("+ items[i].id+")'>Borrar</button>";
        myTable+="<td><button onclick ='redirecCab()'>Actualizar</button>";
        myTable+= "</tr>";

    }
    myTable+= "</table>";
    $("#resultado").append(myTable);

}

function redirecCab(){

    window.location.href="ActualizarCabanas.html";
}

/*Registro de datos cabañas*/

function registroCab(){

    let myData ={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

let dataToSend = JSON.stringify(myData);
$.ajax({

    url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cabin/cabin",
    type: "POST",
    data: myData,
    dataType: "JSON",
    success(respuesta){

        $("#resultado").empty();
        $("#id").val("");
        $("#brand").val("");
        $("#rooms").val("");
        $("#category_id").val("");
        $("#name").val("");
        detalleCabana();
        alert("Se ha guadado el dato")
    }
});
}

/*Actualizar informacion cabañas*/
function actualizarCab(){

    let myData ={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

let dataToSend = JSON.stringify(myData);
$.ajax({

    url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cabin/cabin",
    type: "PUT",
    data: dataToSend,
    contentType:"application/JSON",
    dataType: "JSON",
    success: function(respuesta){

        $("#resultado").empty();
        $("#id").val("");
        $("#brand").val("");
        $("#rooms").val("");
        $("#category_id").val("");
        $("#name").val("");
        detalleCabana();
        alert("Se ha actualizado")
    }
});
}

/* Borrar datos Cabañas*/

function borrarCab(idCliente){

    let myData ={
        id : idCliente
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            detalleCabana();
            alert("Se ha eliminado.")
        }
    });
}

 /*Funciones clientes*/

function detalleClientes(){

    $.ajax({

        url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType :"JSON",
        success :function(respuestaCli){

            console.log(respuestaCli);
            mostrarTablaCli(respuestaCli.items)
        }
    });
}

function mostrarTablaCli(items){


    let myTable2 = "<table2>";
    for(i=0 ; i < items.length;i++){


        myTable2+= "<br>";
        myTable2+= "<td>"+items[i].id +"- "+"</td>";
        myTable2+= "<td>"+items[i].name +"- "+"</td>";
        myTable2+= "<td>"+items[i].email +"- "+"</td>";
        myTable2+= "<td>"+items[i].age+" "+"</td>";
        myTable2+="<td><button onclick ='borrarCli("+ items[i].id+")'>Borrar</button>";
        myTable2+="<td><button onclick ='redirecClie()'>Actualizar</button>";
        myTable2+= "</br>";

    }
    myTable2+= "</table2>";
    $("#resultado2").append(myTable2);

}
function redirecClie(){

    window.location.href="ActualizarClientes.html";
}

/*Registro de datos clientes*/

function registroCli(){

    let myData ={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

let dataToSend = JSON.stringify(myData);
$.ajax({

    url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client",
    type: "POST",
    data: myData,
    dataType: "JSON",
    success(respuestaCli){

        $("#resultado2").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        detalleClientes();
        alert("Se ha guadado el dato")

    }
});
}
/*Actualizar informacion clientes*/
function actualizarCli(){

    let myData ={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

let dataToSend = JSON.stringify(myData);
$.ajax({

    url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client",
    type: "PUT",
    data: dataToSend,
    contentType:"application/JSON",
    dataType: "JSON",
    success: function(respuestaCli){

        $("#resultado2").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        detalleClientes();
        alert("Se ha actualizado")
    }
});
}

/* Borrar datos Cliente*/

function borrarCli(idCliente){

    let myData ={
        id : idCliente
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            detalleCabana();
            alert("Se ha eliminado.")
        }
    });
}

/*Funciones Mensajes*/

function detalleMensaje(){

    $.ajax({

        url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        dataType :"JSON",
        success :function(respuestaMen){

            console.log(respuestaMen);
            mostrarTablaMen(respuestaMen.items)
        }
    });
}

function mostrarTablaMen(items){


    let myTable3 = "<table3>";
    for(i=0 ; i < items.length;i++){


        myTable3+= "<br>";
        myTable3+= "<td>"+items[i].id +"- "+"</td>";
        myTable3+= "<td>"+items[i].messagetext +"</td>";
        myTable3+="<td><button onclick ='borrarMen("+ items[i].id+")'>Borrar</button>";
        myTable3+="<td><button onclick ='redirecMen()'>Actualizar</button>";
        myTable3+= "</br>";

    }
    myTable3+= "</table3>";
    $("#resultado3").append(myTable3);

}

function redirecMen(){

    window.location.href="ActualizarMensaje.html";
}

/*Registro de datos Mensajes*/

function registroMen(){

    let myData ={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

let dataToSend = JSON.stringify(myData);
$.ajax({

    url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message",
    type: "POST",
    data: myData,
    dataType: "JSON",
    success(respuestaMen){

        $("#resultado3").empty();
        $("#id").val("");
        $("#messagetext").val("");
        detalleMensaje();
        alert("Se ha guadado el dato")
    }
});
}

/* Borrar datos Mensajes*/

function borrarMen(idMen){

    let myData ={
        id : idMen
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType:"JSON",
        success:function(respuestaMen){
            $("#resultado3").empty();
            detalleMensaje();
            alert("Se ha eliminado.")
        }
    });
    }

/*Actualizar informacion mensajes*/
function actualizarMen(){

    let myData ={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),

    };

let dataToSend = JSON.stringify(myData);
$.ajax({

    url:"https://g9a57240d8d860f-r2oj2f73pu6lrxwm.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message",
    type: "PUT",
    data: dataToSend,
    contentType:"application/JSON",
    dataType: "JSON",
    success: function(respuestaMen){

        $("#resultado3").empty();
        $("#id").val("");
        $("#messagetext").val("");
        detalleMensaje();
        alert("Se ha actualizado")
    }
});
}