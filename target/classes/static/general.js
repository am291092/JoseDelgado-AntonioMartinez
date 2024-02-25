'use strict'

function llamadaAjax(){
	
	var nombre=$("#nombre").val();
	
	
	var datosJson={
		dni: "1234",
		nombre:nombre,
		apellido1:"Sisisi",
		apellido2:"Nononono",
		edad: "25"
	}
	
	
	$.ajax({
		type: "POST",
		url: "/llamadaAjax",
		contentType: "application/json; charset=utf-8",
		data:JSON.stringify(datosJson),
		success: function(data){
			  window.location = "/llamadaAjax2?nombre=" + encodeURIComponent(datosJson.nombre);
			
		}
		}
	);
	
	
}