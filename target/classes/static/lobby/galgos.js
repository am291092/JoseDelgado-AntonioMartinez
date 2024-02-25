var saldo=parseInt(document.getElementById("dinero").innerHTML);
var progressValue1 = 0; 
var progressValue2 = 0; 
var progressValue3 = 0; 
var progressValue4 = 0; 
var progressValue5 = 0; 
var progressValue6 = 0; 
var progressValue7 = 0; 
var progressValue8 = 0; 
var progressValues = [0, 0, 0, 0, 0, 0, 0, 0];
var ListaGalgos = [];
var ListaCarreras = [];
document.getElementById('progressBar1').style.width = progressValue1 + '%';
document.getElementById('progressBar2').style.width = progressValue2 + '%';
document.getElementById('progressBar3').style.width = progressValue3 + '%';
document.getElementById('progressBar4').style.width = progressValue4 + '%';
document.getElementById('progressBar5').style.width = progressValue5 + '%';
document.getElementById('progressBar6').style.width = progressValue6 + '%';
document.getElementById('progressBar7').style.width = progressValue7 + '%';
document.getElementById('progressBar8').style.width = progressValue8 + '%';

function actualizarReloj() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
  
    if (horas < 10) {
      horas = '0' + horas;
    }
    
    if (minutos < 10) {
      minutos = '0' + minutos;
    }
    
    if (segundos < 10) {
      segundos = '0' + segundos;
    }
   
    var horaActual = horas + ':' + minutos + ':' + segundos;
  
    document.getElementById('textoReloj').innerHTML = horaActual;
  }
  
  
  actualizarReloj();

  setInterval(actualizarReloj, 1000);


  class Galgo {
    constructor(nombre,color,numero,experiencia,aceleracion,velocidad,cuota,apostado,finCarrera){
        this.nombre = nombre;
        this.color=color;
        this.numero=numero;
        this.experiencia=experiencia;
        this.aceleracion=aceleracion;
        this.velocidad=velocidad;
        this.cuota=cuota;
        this.apostado=apostado;
        this.finCarrera=finCarrera;
  }
  }
  var ListaGalgos = [];
  var ListaCarreras = [];
 






  var coloresGalgos = ["rojo", "azul", "verde", "amarillo", "naranja", "rosa", "cian", "negro"];
 

  class Carrera {
    constructor(id,ciudad,hora,galgosParticipantes,posicionGalgos,estado){
        this.id=id;
        this.ciudad=ciudad;
        this.hora=hora;
        this.galgosParticipantes=galgosParticipantes;
        this.posicionGalgos=posicionGalgos;
        this.estado=estado;
    }

  }
   class CarreraFinal {
    	constructor(id,ciudad,hora,estado){
        this.id=id;
        this.ciudad=ciudad;
        this.hora=hora;
        this.estado=estado;
    }

  }
  
  
/*
  ListaCarreras.push(
    new Carrera("1", "Paris", "12:00", [],[], "Finalizada"),
    new Carrera("2", "Londres", "13:30", [],[], "Finalizada"),
    new Carrera("3", "Madrid", "14:45", [],[], "Finalizada"),
    new Carrera("4", "Nueva York", "10:15", [],[], "Finalizada"),
    new Carrera("5", "Tokio", "11:20", [],[], "Finalizada"),
    new Carrera("6", "Roma", "16:10", [],[], "Finalizada"),
    new Carrera("7", "Berlín", "17:55", [],[], "Proxima"),
    new Carrera("8", "Sidney", "18:30", [],[], "Espera"),
    new Carrera("9", "Pekín", "19:40", [],[], "Espera"),
    new Carrera("10", "Moscú", "20:20", [],[], "Espera"),
    new Carrera("11", "Paris", "08:45", [],[], "Espera"),
    new Carrera("12", "Londres", "09:30", [],[], "Espera")
   ) ;

*/




  const model = {
    anadirSaldo:function () {
      var oldsaldo = saldo;
      var ingresado=document.getElementById("ingresarCantidad").value;
      if(ingresado>=0){
		    
     saldo += Number(ingresado);
                
                
            var cliente = {
		correo: document.getElementById("correo").innerHTML,
		saldo: saldo
			
	};
	
	$.ajax(
		{
			type: 'POST',
			url: '/dinero/ingresar',
			contentType: "application/json; charset=utf-8",

			data: JSON.stringify(cliente),
			success: function(data) {
				alert(data);
				
			 
			}
		}
	);    
                
                
                
                
                
                

      }
      view.animateValue(oldsaldo, saldo);
      view.cerrarIngresar();
    },
    retirar: function(){
      var oldsaldo = saldo;
      saldo =0;
      view.animateValue(oldsaldo, saldo);
      
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
      
      
      

    },
    elegirGalgo: function(ListaGalgos){
      var galgosAux=[...ListaGalgos];
      var coloresAux=[...coloresGalgos];
      var shuffleGalgos= galgosAux.sort(() => Math.random() - 0.5);
      var GalgosCorredores = shuffleGalgos.slice(0, 8);
      var cuotaActual=0;
      GalgosCorredores.forEach(galgo => {   
        cuotaActual+=galgo.experiencia+galgo.aceleracion+galgo.velocidad;      
        galgo.color=coloresAux.shift();
      });


      GalgosCorredores.forEach(galgo => {   
        galgo.finCarrera=0;
        galgo.cuota=0;
        galgo.apostado=0;
        var habilidadesGalgo = galgo.experiencia + galgo.aceleracion + galgo.velocidad;
        galgo.cuota = (cuotaActual / habilidadesGalgo).toFixed(2);
       
      });




      return GalgosCorredores;
    }

  };

  const view = {
    mostrarAnteriores:function(){
      
      var modal = document.getElementById("modalAnterior");
      modal.style.display = "block";

      var carrerasFinalizadas = ListaCarreras.filter(carrera => carrera.estado === "Finalizada");

      const infoCarreraAnterior = document.getElementById('infoCarrerasAnteriores');
      infoCarreraAnterior.innerHTML = '';

      carrerasFinalizadas.forEach(carrera => {
        
        const infoCarrera = document.createElement('div');
        infoCarrera.innerHTML ="<h3>"+ carrera.ciudad +" "+carrera.hora + "  </h3> ";

        
        const listaPosicionGalgos = document.createElement('ol');

       
        carrera.posicionGalgos.forEach(galgo => {
            const elementoLista = document.createElement('li');
            elementoLista.textContent = `N: ${galgo.numero} ${galgo.nombre} `;
            listaPosicionGalgos.appendChild(elementoLista);
        });

    
        infoCarrera.appendChild(listaPosicionGalgos);

       
        infoCarreraAnterior.appendChild(infoCarrera);
    });




    },
    cerrarMostrarAnteriores:function(){

      var modal = document.getElementById("modalAnterior");
      modal.style.display = "none";

    },/*
    mostrarCarreraAnterior:function(anterior){

      document.getElementById("lugarAnterior").textContent=anterior.ciudad;
      document.getElementById("horaAnterior").textContent=anterior.hora;

      var divLista = document.getElementById('infoCarreraAnterior');
      while (divLista.firstChild) {
        divLista.removeChild(divLista.firstChild);
      }
      var ol = document.createElement('ol');

      anterior.posicionGalgos.forEach(function(galgo) {
        var li = document.createElement('li');
        li.textContent = "N: "+galgo.numero+" "+galgo.nombre ;
        ol.appendChild(li);
    });
    
    divLista.appendChild(ol);

    },*/
    mostrarPodio :function(ganadores,ganado){

      var modal = document.getElementById("modalPodio");
      modal.style.display = "block";

      var divLista = document.getElementById('GanadoresCarreraActual');
      while (divLista.firstChild) {
        divLista.removeChild(divLista.firstChild);
      }
      var ol = document.createElement('ol');

      ganadores.forEach(function(galgo) {
        var li = document.createElement('li');
        li.textContent = "N: "+galgo.numero+" "+galgo.nombre ;
        ol.appendChild(li);
    });
    
    divLista.appendChild(ol);

    if(ganado>0){

      document.getElementById("mensajeGanado").textContent="Has ganado: "+ganado+"€";

    }else{
      document.getElementById("mensajeGanado").textContent="Esta vez no has ganado nada";
    }

    

    },
    cerrarPodio: function () {
      var modal = document.getElementById("modalPodio");
      modal.style.display = "none";
    },
    mostrarApuesta: function(){

      const elementoClickeado = event.target.closest('.filaGalgo');

      const idGalgo = elementoClickeado.id;
      const posicionGalgo = idGalgo.replace('galgo', '');
      const cuotaGalgo = document.getElementById(`CuotaGalgo${posicionGalgo}`).textContent;
      const numeroGalgo = document.getElementById(`NumeroGalgo${posicionGalgo}`).textContent;
      const nombreGalgo = document.getElementById(`NombreGalgo${posicionGalgo}`).textContent;
      

      var modal = document.getElementById("modalApuesta");
      modal.style.display = "block";
      document.getElementById("numeroApostar").textContent=numeroGalgo;
      document.getElementById("nombreApostar").textContent=nombreGalgo;
      document.getElementById("cuotaApostar").textContent=cuotaGalgo;

    },
    cerrarApuesta: function () {
      var modal = document.getElementById("modalApuesta");
      modal.style.display = "none";
    },

    mostrarInfoCarrera: function(carrera) {
      document.getElementById("textoLugar").innerHTML=carrera.ciudad;
      document.getElementById("horaLugar").innerHTML=carrera.hora;
      selectedGalgos=carrera.galgosParticipantes;
     
      view.displayGalgos(selectedGalgos);
    },

    displayGalgos: function(selectedGalgos) {
      var contador=1;
      for (let i = 1; i <= 8; i++) {
        document.getElementById("NumeroGalgo" + i).innerHTML = "";
        document.getElementById("NombreGalgo" + i).innerHTML = "";
        document.getElementById("CuotaGalgo" + i).innerHTML = "";
        var spanImgGalgo = document.getElementById('imgGalgo' + i);
        spanImgGalgo.innerHTML = "";
      }
      selectedGalgos.forEach(galgo => {         
      
        document.getElementById("NumeroGalgo"+contador).innerHTML=galgo.numero;
        document.getElementById("NombreGalgo"+contador).innerHTML=galgo.nombre;
        document.getElementById("CuotaGalgo"+contador).innerHTML=galgo.cuota;
        
        var spanImgGalgo = document.getElementById('imgGalgo'+contador);
        contador++;
        const imagen = document.createElement('img');
        imagen.src = 'imagenes/colores/'+ galgo.color.toLowerCase() + '.png';
        spanImgGalgo.appendChild(imagen);
       

       
      });
    },
    mostrarIngresar: function() {
      var modal = document.getElementById("modalIngresar");
      modal.style.display = "block";
    },
    cerrarIngresar: function () {
      var modal = document.getElementById("modalIngresar");
      modal.style.display = "none";
    },
    animateValue: function (start, end) {
  
      var startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
        document.getElementById("dinero").innerHTML = Math.floor(
          progress * (end - start) + start
        );
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

  };

  const controller = {
    intervaloSimulacion: null,
    anteriores: function(){
      ListaCarreras.forEach(carrera => { 
        if(carrera.estado=="Finalizada"){

console.log(ListaGalgos[0]);
console.log(ListaGalgos);
       var selectedGalgos = [ListaGalgos[0], ListaGalgos[1], ListaGalgos[2], ListaGalgos[3], ListaGalgos[4], ListaGalgos[5], ListaGalgos[6], ListaGalgos[7]];
       carrera.galgosParticipantes=selectedGalgos;
       carrera.posicionGalgos=selectedGalgos;
     }
     });

    },
    init: function() {
      
      document.getElementById("dinero").innerHTML = saldo;
      document.getElementById("ingresarPop").addEventListener("click", view.mostrarIngresar);
      document.getElementById("retirar").addEventListener("click", model.retirar);
      document.getElementById("anadirSaldo").addEventListener("click", model.anadirSaldo);
      document.getElementById("galgo1").addEventListener("click", view.mostrarApuesta);
      document.getElementById("galgo2").addEventListener("click", view.mostrarApuesta);
      document.getElementById("galgo3").addEventListener("click", view.mostrarApuesta);
      document.getElementById("galgo4").addEventListener("click", view.mostrarApuesta);
      document.getElementById("galgo5").addEventListener("click", view.mostrarApuesta);
      document.getElementById("galgo6").addEventListener("click", view.mostrarApuesta);
      document.getElementById("galgo7").addEventListener("click", view.mostrarApuesta);
      document.getElementById("galgo8").addEventListener("click", view.mostrarApuesta);
      document.getElementById("apostar").addEventListener("click", controller.apuesta);
      document.getElementById("cancelaApuesta").addEventListener("click", view.cerrarApuesta);
      document.getElementById("cancelaingreso").addEventListener("click", view.cerrarIngresar);
      document.getElementById("cerrarPodio").addEventListener("click", view.cerrarPodio);      
     // document.getElementById("mostrarAnteriores").addEventListener("click", view.mostrarAnteriores);
      document.getElementById("cerrarAnterior").addEventListener("click", view.cerrarMostrarAnteriores);
      
      document.getElementById("simular").addEventListener("click", controller.iniciarSimulacion);
      controller.inicializaCarreras();
      controller.crearCarrera();

      
      


    },
    simulacion: function () {
      
      let finalizado = true;
      var posCarrera=0;
      ListaCarreras.forEach((carrera) => {
        if (carrera.estado === 'Proxima') {
          carrera.galgosParticipantes.forEach((galgo, index) => {
            const nuevoValorDeProgreso = (galgo.experiencia + galgo.aceleracion + galgo.velocidad) / (Math.floor(Math.random() * 9) + 1);
            progressValues[index] += nuevoValorDeProgreso;
            if (progressValues[index] >= 100 && galgo.finCarrera==0) {
              galgo.finCarrera=1;
              carrera.posicionGalgos.push(galgo);
            }
          });
          carrera.galgosParticipantes.forEach((galgo) => {

            if(!galgo.finCarrera){
              finalizado = 0;

            }
            

          });
        }else if( carrera.estado === 'Finalizada'){
          posCarrera+=Number(1);
          
        }
        



      });
  
      progressValues.forEach((valor, index) => {
        const progressBarId = 'progressBar' + (index + 1);
        if (valor > 100) {
          progressValues[index] = 100;
        }
        document.getElementById(progressBarId).style.width = progressValues[index] + '%';
      });



  
      if (finalizado) {
        var ganancia=0;
        for(var i=0;i<=2;i++){
          console.log( i+" "+posCarrera+" "+ListaCarreras[posCarrera].posicionGalgos[i].apostado );
          ganancia+= (ListaCarreras[posCarrera].posicionGalgos[i].apostado*ListaCarreras[posCarrera].posicionGalgos[i].cuota)/(i+1);
          
          
        }
        
          var oldsaldo = saldo;
          ganancia = Math.ceil(ganancia);
          saldo +=ganancia;
          
          view.animateValue(oldsaldo, saldo);
          
          var cliente = {
		correo: document.getElementById("correo").innerHTML,
		saldo: saldo
			
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
          
          
          



        clearInterval(intervaloSimulacion);
        var contador=0;

        ListaCarreras.forEach((carrera) => {
          if (carrera.estado === 'Proxima') {

            view.mostrarPodio(carrera.posicionGalgos,ganancia);
            
            carrera.estado="Finalizada";
            contador++;
           
  var carreraFinal= new CarreraFinal(carrera.id,carrera.ciudad,carrera.hora,carrera.estado);

	$.ajax(
		{
			type: 'POST',
			url: '/finCarrera',
			contentType: "application/json; charset=utf-8",

			data: JSON.stringify(carreraFinal),
			success: function(data) {
			
			},
			error: function(error) {
            console.error("Error al obtener las carreras:", error);
        }
		}
	);
            
            
            
          }else if(carrera.estado === 'Finalizada'){

            contador++;
          }
        });
        ListaCarreras[contador].estado="Proxima";
        carreraProx= new CarreraFinal(ListaCarreras[contador].id,ListaCarreras[contador].ciudad,ListaCarreras[contador].hora,ListaCarreras[contador].estado);
        $.ajax(
		{
			type: 'POST',
			url: '/finCarrera',
			contentType: "application/json; charset=utf-8",

			data: JSON.stringify(carreraProx),
			success: function(data) {
				
			},
			error: function(error) {
            console.error("Error al obtener las carreras:", error);
        }
		}
	);
        
        
        
        controller.init();
      }
    },
  
    iniciarSimulacion: function () {
     intervaloSimulacion = setInterval(controller.simulacion, 1000);
    },


    inicializaCarreras:function(){
            progressValue1 = 0; 
            progressValue2 = 0; 
            progressValue3 = 0; 
          progressValue4 = 0; 
      progressValue5 = 0; 
      progressValue6 = 0; 
      progressValue7 = 0; 
      progressValue8 = 0; 
      progressValues = [0, 0, 0, 0, 0, 0, 0, 0];
      document.getElementById('progressBar1').style.width = progressValue1 + '%';
      document.getElementById('progressBar2').style.width = progressValue2 + '%';
      document.getElementById('progressBar3').style.width = progressValue3 + '%';
      document.getElementById('progressBar4').style.width = progressValue4 + '%';
      document.getElementById('progressBar5').style.width = progressValue5 + '%';
      document.getElementById('progressBar6').style.width = progressValue6 + '%';
      document.getElementById('progressBar7').style.width = progressValue7 + '%';
      document.getElementById('progressBar8').style.width = progressValue8 + '%';
            
     

    },
    crearCarrera:function(){
    var contador=0;
      ListaCarreras.forEach(carrera => { 
         if(carrera.estado=="Proxima"){

        var selectedGalgos = model.elegirGalgo(ListaGalgos);
        carrera.galgosParticipantes=selectedGalgos;
        console.log(carrera.galgosParticipantes);
        view.mostrarInfoCarrera(carrera);
        
      }else if(carrera.estado=="Finalizada"){
        contador++;

      }
      });

    //  view.mostrarCarreraAnterior(ListaCarreras[contador-1]);
      


     

    },
   
    apuesta:function(){
      var apostado=document.getElementById("cantidadApuesta").value;
      var numeroGalgo = document.getElementById("numeroApostar").textContent;
      if(apostado<=saldo){
        var oldsaldo = saldo;
        saldo -=apostado;
        
        ListaCarreras.forEach(carrera => { 
          if(carrera.estado=="Proxima"){
 
            carrera.galgosParticipantes.forEach(galgo => { 
              if(galgo.numero==numeroGalgo){
                galgo.apostado+=Number(apostado);

              }
 
            });
         
       }
       });

        view.animateValue(oldsaldo, saldo);
        view.cerrarApuesta();
      }else{
        view.cerrarApuesta();
        window.alert("no hay suficiente saldo");
      }

  },
  obtenerCarreras:function(){
	  
	   $.ajax({
        type: 'GET',
        url: '/obtenerCarreras',
        success: function(listaCarreras) {
            
            listaCarreras.forEach(function(carreraDto) {
                 var carrera = new Carrera(
                carreraDto.id,
                carreraDto.ciudad,
                carreraDto.hora,
                [],
                [],
                carreraDto.estado
               
            );

           ListaCarreras.push(carrera);
            });
            
			controller.anteriores();
 			controller.init();
        },
        error: function(error) {
            console.error("Error al obtener las carreras:", error);
        }
    });
  }
  };
  
  $(document).ready(function() {  // Asegúrate de que el DOM esté cargado
    $.ajax({
        type: 'GET',
        url: '/obtenerGalgos',
        success: function(listaGalgos) {
            // Procesa la respuesta
            listaGalgos.forEach(function(galgoDto) {
                 var galgo = new Galgo(
                galgoDto.nombre,
                galgoDto.color,
                galgoDto.numero,
                galgoDto.experiencia,
                galgoDto.aceleracion,
                galgoDto.velocidad,
                galgoDto.cuota,
                galgoDto.apostado,
                galgoDto.finCarrera
            );

           ListaGalgos.push(galgo);
            });

            controller.obtenerCarreras();
        },
        error: function(error) {
            console.error("Error al obtener los galgos:", error);
        }
    });

    
});
  
  
