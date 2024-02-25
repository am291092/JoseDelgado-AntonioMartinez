//eventlisteners






function ingresar() {
	 if (isNaN(Number(document.getElementById("nuevasFichas").value)) || Number(document.getElementById("nuevasFichas").value) <= 0) {
    document.getElementById("error").innerHTML = "Error de insercion de fichas. Vuelva a intentarlo";
  }
  else{
	  	var saldoNuevo=Number(document.getElementById("nuevasFichas").value)+Number(document.getElementById("misFichas").innerHTML);
	console.log(saldoNuevo);
	var cliente = {
		correo: document.getElementById("correo").innerHTML,
		saldo: saldoNuevo
			
	};
	
	$.ajax(
		{
			type: 'POST',
			url: '/dinero/ingresar',
			contentType: "application/json; charset=utf-8",

			data: JSON.stringify(cliente),
			success: function(data) {
				document.getElementById("misFichas").innerHTML=saldoNuevo;
				
			 	cerrarModal();
			}
		}
	);
  }

}

function retirar() {
	
	var cliente = {
		correo: document.getElementById("correo").innerHTML,
		
			
	};
	
	$.ajax(
		{
			type: 'POST',
			url: '/dinero/retirar',
			contentType: "application/json; charset=utf-8",

			data: JSON.stringify(cliente),
			success: function(data) {
				document.getElementById("misFichas").innerHTML=0;
				
			 	
			}
		}
	);
}

//Modal cerrar y abrir

function mostrarModal() {
  var modal = document.getElementById("modalIngresar");
  modal.style.display = "block";
}

function cerrarModal() {
  var modal = document.getElementById("modalIngresar");
  document.getElementById("error").innerHTML = "";
  modal.style.display = "none";
}

//Modal mostrar y cerrar ganador
function mostrarModalG() {
  var modal = document.getElementById("modalGanador");
  modal.style.display = "block";
}

function cerrarModalG() {
  var modal = document.getElementById("modalGanador");
  document.getElementById("error").innerHTML = "";
  modal.style.display = "none";
}




// Mostrar form ingreso saldo
function mostrarIng() {
  document.getElementById("meterF").style.visibility = "visible";

}





