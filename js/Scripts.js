
function modalBienvenida(){

	document.getElementById("modalBienvenida").style.display="block";
	document.getElementById("tituloEncabezado").style.animationPlayState ="paused";
	document.getElementById("textoEncabezado").style.animationPlayState ="paused";
	document.documentElement.style.overflow="hidden";
}

function cerrarMBB(){

	document.getElementById("modalBienvenida").style.display="none";
	document.getElementById("tituloEncabezado").style.animationPlayState ="running";
	document.getElementById("textoEncabezado").style.animationPlayState ="running";
	document.documentElement.style.overflowY="auto";

}


var bgCounter=0;

function heroSlideshow(){

	var listaImgBg = [
		"url('Media/Encabezado01.jpg')",
		"url('Media/Encabezado02.jpg')",
		"url('Media/Encabezado03.jpg')",
		];

	bgCounter++;

	if(bgCounter== listaImgBg.length){
		
	bgCounter=0;
}
	
	document.getElementById("encabezado").style.backgroundImage = listaImgBg[bgCounter];

}


//empieza el codigo del slideshow automatico con animacion

	var counterNext=0;
	var counterMain=0;

	function slideshowAnim(){

		var listaImBgAnim = document.getElementsByClassName("fondosHero");
		counterNext++;
		counterMain= counterNext-1;

		if(counterNext==listaImBgAnim.length){

			counterNext=0;
		}

		if(counterMain<0){

			counterMain=listaImBgAnim.length-1;
		}

		for(var i=0; i<listaImBgAnim.length;i++){

			listaImBgAnim[i].classList.remove("nextSlide");
			listaImBgAnim[i].classList.remove("mainSlide");
			listaImBgAnim[i].classList.remove("hiddenSlide");

			if(i==counterNext){

				listaImBgAnim[i].classList.add("nextSlide");
			}

			else if(i==(counterMain)){
				listaImBgAnim[i].classList.add("mainSlide");
			}
			else{
				listaImBgAnim[i].classList.add("hiddenSlide");
			}
		}
	}



//aqui empieza el codigo del modal de reserva

function modalReserva(){

	document.getElementById("modalReserva").style.display="block";
	document.documentElement.style.overflow="hidden";

	var nombre = document.getElementById("formNombre").value;
	var numero = document.getElementById("formNumero").value;
	var email = document.getElementById("formEmail").value;
	var mensaje = document.getElementById("formMensaje").value;

	var explica;

	(function formCheck(){

		if(!document.getElementById("formNombre").checkValidity()){
			explica="Introduce un nombre correcto";
			document.getElementById("mensajeReserva").innerHTML = explica;
			}

			else if(!document.getElementById("formNumero").checkValidity()){
				explica="Introduce un telefono correcto";
				document.getElementById("mensajeReserva").innerHTML = explica;
				}

				else if(!document.getElementById("formEmail").checkValidity()){
				explica="Introduce un email correcto";
				document.getElementById("mensajeReserva").innerHTML = explica;
				}

					else if(!document.getElementById("formMensaje").checkValidity()){
					explica="Introduce un mensaje correcto";
					document.getElementById("mensajeReserva").innerHTML = explica;
					}

		else{

			explica = "Apreciado/a " + nombre +", le confirmamos que se ha realizado su consulta. Recibirá un correo de confirmacion de su consulta en la dirección: "+ email + ". Pronto nos pondremos en contacto con usted al teléfono: "+ numero + ".";

			document.getElementById("mensajeReserva").innerHTML = explica;
		
		}

	})();

	
}

function cerrarMBR(){

	document.getElementById("modalReserva").style.display="none";
	document.documentElement.style.overflowY="auto";;

	document.getElementById("formNombre").value ="";
	document.getElementById("formNumero").value ="";
	document.getElementById("formEmail").value ="";
	document.getElementById("formMensaje").value ="";

}

//aqui empieiza el codigo para el menu

var posPreviaScroll= document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()}

function esconderMostrarMenu(){

	var posActualScroll = document.documentElement.scrollTop;

	if (posPreviaScroll>posActualScroll) {

		//cuando subimos mostramos menu
		document.getElementById("navbar").style.top ="0";

		if(posActualScroll>200){
		document.getElementById("navbar").style.height ="50px";
		document.getElementById("navbar").style.fontSize ="1.5rem";
		document.getElementById("menu").style.lineHeight ="50px";
		document.getElementById("submenu").style.top ="43px";
		document.getElementById("logo").style.padding ="0px";


		}

		else {
		document.getElementById("navbar").style.height ="150px";
		document.getElementById("navbar").style.fontSize ="2rem";
		document.getElementById("menu").style.lineHeight ="150px";
		document.getElementById("submenu").style.top ="87px";
		document.getElementById("logo").style.padding ="23px";

		}
	}
	else {
		//cuando bajamos escondemos el menu
		
		if(posActualScroll<200){
		document.getElementById("navbar").style.height ="50px";
		document.getElementById("navbar").style.fontSize ="1.5rem";
		document.getElementById("menu").style.lineHeight ="50px";
		document.getElementById("submenu").style.top ="43px";
		document.getElementById("logo").style.padding ="0px";

		}

		else{
			document.getElementById("navbar").style.top ="-150px";

		}
	}

	posPreviaScroll = posActualScroll;
}

//codigo del catalogo

function marcaPestaña(contenedorMostrar, tabClick){

	var listaConPestaña = document.getElementsByClassName("contenedorPestañas");

	for(var i=0; i< listaConPestaña.length; i++){

		listaConPestaña[i].style.display="none";
	}

	document.getElementById(contenedorMostrar).style.display="block";

	var tabLinks= document.getElementsByClassName("clasificacionLetraCatalogo");
	for(var i=0; i<tabLinks.length; i++){
		tabLinks[i].classList.remove("activarBoton");
	}

	document.getElementById(tabClick).classList.add("activarBoton");

	var platos= document.getElementsByClassName("pieFotoEvento");
	for(var i=0; i<platos.length; i++){
		platos[i].classList.remove("eventoAnimado");
	}

	var violinContenedor =  document.getElementById(contenedorMostrar).children;
	for(var i=0; i<violinContenedor.length;i++){
		violinContenedor[i].classList.add("eventoAnimado");
	}

}

var listaRutaImgGal = [];
var numeroIMG = 0;

function readyLightbox(){

	var listaImgGal =document.getElementsByClassName("imagenesGaleria")
	for (var i =0; i<listaImgGal.length; i++){

		listaRutaImgGal.push(listaImgGal[i].src);
	}

	for(var i=0; i<listaImgGal.length; i++){

		listaImgGal[i].addEventListener('click', openLigthbox);
	}

	function openLigthbox(){

		var rutaImgClicada = event.currentTarget.src;
		numeroIMG = listaRutaImgGal.indexOf(rutaImgClicada);

		document.getElementById("imageToShow").innerHTML= "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG]+">";
		document.getElementById("modalLightBoxGal").style.display ="block";
		document.documentElement.style.overflow="hidden";
		closeLightbox();

	}

	function closeLightbox(){

		window.addEventListener("click", function(event){

			if(!event.target.matches(".imageLightBox") && !event.target.matches(".imagenesGaleria") && !event.target.matches(".lbBoton") && !event.target.matches(".material-symbols-outlined")){
			document.getElementById("modalLightBoxGal").style.display ="none";
			document.documentElement.style.overflowY="auto";

			}
		});
	}
}

function nextImgGal(){

	numeroIMG++;

	if(numeroIMG==listaRutaImgGal.length){

		numeroIMG= 0;
	}

	document.getElementById("imageToShow").innerHTML= "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG]+">";

}

function previaImgGal(){

	numeroIMG--;

	if(numeroIMG < 0){
	numeroIMG = listaRutaImgGal.length-1;
	
	}

	document.getElementById("imageToShow").innerHTML= "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG]+">";

}
function actualizarReloj() {
	var now = new Date();
	var horas = now.getHours();
	var minutos = now.getMinutes();
	var segundos = now.getSeconds();

	// Asegurar que siempre haya dos dígitos en minutos y segundos
	minutos = minutos < 10 ? '0' + minutos : minutos;
	segundos = segundos < 10 ? '0' + segundos : segundos;

	var tiempoActual = horas + ':' + minutos + ':' + segundos;
	document.getElementById('reloj').textContent = tiempoActual;
}

setInterval(actualizarReloj, 1000); // Actualizar cada segundo
