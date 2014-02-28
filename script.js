window.onload = function ()
{
	
}

function Aleatorio(){


	var palabra="";

	palabra=String(document.getElementById('lista').value)
 	var computador= parseInt(Math.random()*10);


 


//////////////SI EL USUARIO ELIJE TIJERAS/////////////////////////
if (palabra=="Tijeras") {
							if (computador<4) {

						//Entra a Tijeras

						alert("Tijeras es igual a Tijeras !!EMPATE!!")

							};


							
						if (computador>4&&computador<=7) {

						//Entra a piedra
	
						alert("Tijeras son destruidas por Piedra !!PERDIST!!")
	
						};


						if (computador>7) {
						//Entra a papel

						alert("Tijeras cortan Papel !!GANASTE!!")

						};

					};


////////////////////////////SI EL USUARIO ELEIJE PAPEL/////////////////////

					if (palabra=="Papel") {
							if (computador<4) {

						//Entra a Tijeras

						alert("Papel es cortado por Tijeras !!PERDISTE!!")

							};


							
						if (computador>4&&computador<=7) {

						//Entra a piedra
	
						alert("Papel envuelve a Piedra !!GANASTE!!")
	
						};


						if (computador>7) {
						//Entra a papel

						alert("Papel es igual a Papel !!EMPATE!!")

						};

					};

////////////////////////////SI EL USUARIO ELEIJE PIEDRA/////////////////////

					if (palabra=="Piedra") {
							if (computador<4) {

						//Entra a Tijeras

						alert("Piedra destruye  Tijeras !!GANASTE!!")

							};


							
						if (computador>4&&computador<=7) {

						//Entra a piedra
	
						alert("Piedra es igual a Piedra !!EMPATE!!")
	
						};


						if (computador>7) {
						//Entra a papel

						alert("Piedra es envuelto por Papel !!PERDISTE!!")

						};

					};


}
